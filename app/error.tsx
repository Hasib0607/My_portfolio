"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary flex items-center justify-center px-6">
      <div className="max-w-lg text-center space-y-4">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="text-text-secondary">
          An unexpected error occurred while loading this page.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-md border border-text-secondary/30 px-4 py-2 hover:bg-white/5 transition"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
