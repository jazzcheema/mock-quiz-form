// import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "@/components/Animated-Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 py-40 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold roll-in">OfferHaus</h1>
      <p>Simple, safe, and successful offer options for your new home!</p>
      <AnimatedButton />
    </main>
  );
}
