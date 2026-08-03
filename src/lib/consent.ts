"use client";

import { useSyncExternalStore } from "react";

/**
 * Consent state for the one script on this site that needs it.
 *
 * GA4 sets cookies, which under UK/EU law requires opt-in consent taken
 * *before* the script runs. So this is a hard gate, not a signal: nothing is
 * requested from Google until someone presses Accept. A visitor who declines,
 * or who never answers, causes exactly zero third-party requests — which is
 * the behaviour the rest of this site already promises.
 *
 * The choice itself is kept in localStorage. That is device storage, and the
 * privacy policy says so plainly; storing a consent decision is permitted
 * without consent precisely because it exists to honour the decision. It
 * holds one word and no identifier.
 */

export type ConsentState =
  /** Accepted — GA4 may load. */
  | "granted"
  /** Refused — GA4 must never load. */
  | "denied"
  /** Asked and unanswered, or never asked. Show the banner. */
  | "unset"
  /** Prerender only: the build cannot know a visitor's choice. Render nothing. */
  | "unknown";

const STORAGE_KEY = "tc-consent";

type Listener = () => void;
const listeners = new Set<Listener>();

export function readConsent(): ConsentState {
  if (typeof window === "undefined") return "unknown";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "granted" || stored === "denied" ? stored : "unset";
  } catch {
    // Private browsing and blocked-storage modes throw on access. Treat an
    // unreadable choice as no choice — never as consent.
    return "unset";
  }
}

/**
 * Deletes a consent choice left over from when analytics was enabled.
 *
 * Turning GA4 off stops anything new being written, but a visitor who used the
 * site while it was on still has `tc-consent` on their device. The privacy
 * policy now states without qualification that this site stores nothing —
 * no cookies, no local storage — and that has to be true for returning
 * visitors too, not just new ones.
 *
 * Safe to keep permanently: it only runs while analytics is disabled, so
 * re-enabling GA4 stops the purge and the banner asks again from a clean slate.
 */
export function purgeStoredConsent(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Blocked storage means there was nothing to remove.
  }
}

export function setConsent(state: "granted" | "denied"): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, state);
  } catch {
    // Non-fatal: the choice still applies here, it just won't persist.
  }
  for (const listener of listeners) listener();
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  // Keeps a second tab honest if the visitor changes their mind in this one.
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

/**
 * `useSyncExternalStore` rather than an effect that calls setState: the
 * prerendered HTML must not assume a choice, and this is the supported way to
 * read browser-only state without a cascading render. The server snapshot is
 * "unknown", so the static export ships no banner and no GA4 tag — both
 * appear, if at all, only once the real choice is known on the client.
 */
export function useConsent(): ConsentState {
  return useSyncExternalStore(
    subscribe,
    readConsent,
    () => "unknown" as const,
  );
}
