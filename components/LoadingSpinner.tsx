"use client";

import React from "react";

/**
 * Loading spinner for landing page.
 *
 * Props: none.
 * State: none.
 */

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="bg-indigo-500 flex items-center justify-center text-white font-bold py-2 px-4 rounded opacity-75 cursor-not-allowed disabled:opacity-100"
        disabled
      >
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-100"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-100"
            fill="green"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.313 1.353 6.311 3.514 8.485l2.486-2.194z"
          ></path>
        </svg>
        Loading...
      </button>
    </div>
  );
};

export default LoadingSpinner;
