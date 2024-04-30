// components/TickingNumberCard.tsx
"use client";

import React, { useEffect, useState } from "react";
import SleekCard from "./CardComponent";

const TickingNumberCard: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer =
      count < 5
        ? setInterval(() => {
            setCount((prevCount) => prevCount + 1);
          }, 200)
        : null; // Increment every second

    return () => clearInterval(timer); // Clear interval on component unmount
  }, [count]);

  return (
    <div>
      <SleekCard
        title={`${count < 5 ? count : "5+"} years`}
        description="empowering buyers"
        color="black"
      />
    </div>
  );
};

export default TickingNumberCard;
