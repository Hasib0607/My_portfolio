"use client";

import { useEffect } from "react";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="font-body bg-bg-primary text-text-primary antialiased">
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-lg text-center space-y-4">
            <h1 className="text-3xl font-semibold">Application error</h1>
            <p className="text-text-secondary">
              A critical error occurred. Please try again.
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center justify-center rounded-md border border-text-secondary/30 px-4 py-2 hover:bg-white/5 transition"
            >
              Reload
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
