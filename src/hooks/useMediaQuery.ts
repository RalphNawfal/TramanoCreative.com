"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Reads a media query without a setState-in-effect round trip.
 *
 * The obvious version — `useState(false)` plus an effect that measures and
 * sets — renders twice on every mount and trips react-hooks/set-state-in-effect.
 * `useSyncExternalStore` is the intended tool: the media query *is* an external
 * store, and React subscribes to it directly.
 *
 * Returns `null` until the client knows, because a static export cannot know.
 * That third state is deliberate and callers must handle it: `false` would be a
 * lie during prerender, and treating "don't know yet" as "motion is fine" is
 * what makes reduced-motion users see the animation flash before it's
 * suppressed. Check `=== false`, never `!value`.
 */
export function useMediaQuery(query: string): boolean | null {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onStoreChange);
      return () => mql.removeEventListener("change", onStoreChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => null,
  );
}
