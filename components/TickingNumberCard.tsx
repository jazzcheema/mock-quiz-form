// components/TickingNumberCard.tsx
"use client";

import React, { useEffect, useState } from "react";
import SleekCard from "./SleekCard";

/** TickingNumberCard: Component for displaying a card with a ticking number
 *
 * state: Count (#)
 *
 * props: color1(string), color2(string)
 *
 * Home -> TickingNumberCard -> SleekCard
 */

interface TickingNumberCardProps {
  color1: string;
  color2: string;
}

const TickingNumberCard: React.FC<TickingNumberCardProps> = ({
  color1,
  color2,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer: number = window.setInterval(() => {
      if (count < 5) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(timer);
      }
    }, 800);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <SleekCard
        title={`${count < 5 ? count : "5+"} years`}
        description="empowering buyers."
        color={color1}
      />
      <SleekCard
        title={`10 minutes`}
        description="to complete the application!"
        color={color2}
      />
    </div>
  );
};

export default TickingNumberCard;
