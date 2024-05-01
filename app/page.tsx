"use client";

import React, { useState, useEffect } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import DiagramComponent from "@/components/DiagramComponent";
import LoadingSpinner from "@/components/LoadingSpinner";
import CardArea from "@/components/CardArea";
import Footer from "@/components/Footer";

/** SleekCard:  Component for the home page of the OfferHaus website.
 *
 * Home -> {AnimatedButton, Diagram Component, CardArea, Footer}
 *
 * Props: none
 * State: isLoading(boolean)
 */

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time with setTimeout so entire page functions load properly.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 py-20 max-w-4xl mx-auto">
      <div className="pulse text-center justify-between mx-auto">
        <h1 className="text-8xl">OfferHaus</h1>
      </div>
      <div className="flex mx-auto items-center flex-col gap-8">
        <h3 className="text-xl typewriter">
          Simple, safe, and successful offer options for your new home!
        </h3>
        <AnimatedButton />
        <div className="">
          <div className="float-bounce mt-8">
            <DiagramComponent />
          </div>
        </div>
      </div>
      <CardArea />

      <Footer />
    </main>
  );
}

export default Home;
