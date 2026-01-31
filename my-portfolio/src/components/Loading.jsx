import React, { useState, useEffect } from 'react';

export default function Loading({ message = '', isFading = false }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 30;
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return () => setProgress(100);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center gap-4 w-full px-8">
        {/* Progress bar */}
        <div className="w-full max-w-xs h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {/* Message */}
        <p className="text-sm text-secondary">{message}</p>
        {/* Accessibility text */}
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
