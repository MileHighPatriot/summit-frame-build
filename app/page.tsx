import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import HomeOnSite from "@/components/HomeOnSite";
import HomeProcess from "@/components/HomeProcess";
import HomeQuotes from "@/components/HomeQuotes";
import PageCta from "@/components/PageCta";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <HomeServices />
      <HomeOnSite />
      <HomeProcess />
      <HomeQuotes />
      <PageCta
        title="Need something framed?"
        lede="Call or send the address and the scope. We will tell you if we are the right crew."
      />
    </main>
  );
}
