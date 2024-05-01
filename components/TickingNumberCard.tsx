// components/TickingNumberCard.tsx
"use client";

import React, { useEffect, useState } from "react";
import SleekCard from "./SleekCard";

/** TickingNumberCard: Component for displaying a card with a ticking number
 *
 * state: Count (#)
 *
 * props: None
 *
 * Home -> TickingNumberCard -> SleekCard
 */

const TickingNumberCard: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer =
      count < 5
        ? setInterval(() => {
            setCount((prevCount) => prevCount + 1);
          }, 300)
        : null; // Increment every second

    return () => clearInterval(timer); // Clear interval on component unmount
  }, [count]);

  return (
    <div>
      <SleekCard
        title={`${count < 5 ? count : "5+"} years`}
        description="empowering buyers."
        color="custom-blue-light"
      />
      <SleekCard
       title={`10 minutes`}
       description="to complete the application!"
       color="custom-blue-light"
     />
    </div>
  );
};

export default TickingNumberCard;
