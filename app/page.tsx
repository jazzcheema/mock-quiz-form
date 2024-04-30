// import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "@/components/Animated-Button";
import SleekCard from "@/components/CardComponent";
import TickingNumberCard from "@/components/TickingNumberCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 py-40 max-w-4xl mx-auto">
      <h1 className="text-6xl">OfferHaus</h1>
      <h3>Simple, safe, and successful offer options for your new home!</h3>
      <AnimatedButton />
      <div>
        <SleekCard
          title="1M+"
          description="Homes bought and counting"
          color="black"
        />
        <TickingNumberCard />
      </div>
    </main>
  );
}
