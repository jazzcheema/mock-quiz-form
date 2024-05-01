import AnimatedButton from "@/components/AnimatedButton";
import SleekCard from "@/components/SleekCard";
import TickingNumberCard from "@/components/TickingNumberCard";

/** SleekCard:  Component for the home page of the OfferHaus website.
 *
 * Home -> {AnimatedButton, SleekCard, TickingNumberCard}
 */

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 py-20 max-w-4xl mx-auto">
      <div className="pulse text-center justify-between mx-auto">
        <h1 className="text-8xl">OfferHaus</h1>
      </div>
      <div className="flex mx-auto items-center flex-col gap-8">
        <h3 className="text-xl">Simple, safe, and successful offer options for your new home!</h3>
        <AnimatedButton />
      </div>
      <div className="grid grid-cols-3">
        <SleekCard
          title="1M+"
          description="homes bought and counting."
          color="custom-blue-light"
        />
        <SleekCard
          title=""
          description='"Buying our first home was a breeze with OfferHaus; the team was supportive every step of the way!" - Emily Robinson'
          color="custom-blue-light"
        />
        <SleekCard
          title="#1"
          description="choice for new home owners."
          color="custom-blue-light"
        />
        <SleekCard
          title=""
          description='"OfferHaus made the home-buying process straightforward and transparent—I couldn’t be happier with the outcome!" - Mark Johnson'
          color="custom-blue-light"
        />
        <TickingNumberCard />
        <SleekCard
          title="95%"
          description="of customers would use us again over an agent and recommend us over competitors."
          color="custom-blue-light"
        />
      </div>
    </main>
  );
}

export default Home;
