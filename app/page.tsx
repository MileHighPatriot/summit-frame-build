import ClimateDesk from "@/components/ClimateDesk";
import Hero from "@/components/Hero";
import HomeOnSite from "@/components/HomeOnSite";
import HomeProcess from "@/components/HomeProcess";
import HomeQuotes from "@/components/HomeQuotes";
import HomeServices from "@/components/HomeServices";
import PageCta from "@/components/PageCta";
import ScopeEstimator from "@/components/ScopeEstimator";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TrustBar />
      <HomeServices />
      <HomeOnSite />
      <ScopeEstimator />
      <HomeProcess />
      <ClimateDesk />
      <HomeQuotes />
      <PageCta
        title="Need something framed?"
        lede="Call, text the address, or send the scope. We will tell you if we are the right crew."
      />
    </main>
  );
}
