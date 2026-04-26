"use client";

import { useEffect } from "react";

export default function PricingPage() {
  useEffect(() => {
    // Use replace() so the /pricing page is replaced by the PDF in the history stack.
    // This way, when the user clicks Back, they go to the previous page (e.g., Home)
    // instead of returning to /pricing and getting immediately redirected again.
    window.location.replace("/pricing.pdf");
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <p className="text-slate-400 text-sm animate-pulse">
        Opening pricing guide…
      </p>
    </div>
  );
}
