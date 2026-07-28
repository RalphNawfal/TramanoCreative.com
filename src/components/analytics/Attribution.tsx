"use client";

import { useEffect } from "react";
import { captureFirstTouch } from "@/lib/attribution";

/**
 * Records the arrival context once per document, on the first page the
 * visitor loads. It has to run here in the root layout rather than on the
 * contact page: by the time someone reaches the form, the campaign tags from
 * their landing URL are long gone from the address bar.
 *
 * Renders nothing and sends nothing — see lib/attribution for why this holds
 * no storage and leaves the browser only on form submit.
 */
export default function Attribution() {
  useEffect(() => {
    captureFirstTouch();
  }, []);

  return null;
}
