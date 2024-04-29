import Image from "next/image";
import Header from "@/components/Header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 py-40 max-w-4xl mx-auto">
      <h1>OfferHaus</h1>
      <p>Simple, safe, and successful offer options for your new home!</p>
      <Header/>
    </main>
  );
}
