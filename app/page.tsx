"use client";

import React, { useState, useEffect } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import SleekCard from "@/components/SleekCard";
import TickingNumberCard from "@/components/TickingNumberCard";
import DiagramComponent from "@/components/DiagramComponent";
import LoadingSpinner from "@/components/LoadingSpinner";

/** SleekCard:  Component for the home page of the OfferHaus website.
 *
 * Home -> {AnimatedButton, SleekCard, TickingNumberCard}
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
      <div className="grid grid-cols-3">
        <SleekCard
          title="1M+"
          description="homes bought and counting."
          color="subtle-yellow-green"
        />
        <SleekCard
          title=""
          description='"Buying our first home was a breeze with OfferHaus; the team was supportive every step of the way!" - Emily Robinson'
          color="light-gray"
        />
        <SleekCard
          title="#1"
          description="choice for new home owners."
          color="subtle-yellow-green"
        />
        <SleekCard
          title=""
          description='"OfferHaus made the home-buying process straightforward and transparent—I couldn’t be happier with the outcome!" - Mark Johnson'
          color="light-gray"
        />
        <TickingNumberCard color1="subtle-yellow-green" color2="stem-green" />
        <SleekCard
          title="95%"
          description="of customers would use us again over an agent and recommend us over competitors."
          color="light-gray"
        />
      </div>
      {/* bottom div in place for inputting custom colors below to connect them. */}
      {/* <div className="bg-subtle-yellow-green p-4 rounded-lg shadow-md"></div> */}

      <footer className="w-full bg-gray-100 text-center text-xs text-gray-600">
        © 2024 OfferHaus. All rights reserved.
      </footer>
    </main>
  );
}

export default Home;
