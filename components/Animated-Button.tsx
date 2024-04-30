"use client";
import Link from "next/link";
// components/AnimatedButton.js
export default function AnimatedButton() {
  return (
    <button
      className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-grey focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-150"
    >
      <Link href="/quiz" passHref>
        <p className="hover:text-gray-300">Get Started</p>
      </Link>
    </button>
  );
}
