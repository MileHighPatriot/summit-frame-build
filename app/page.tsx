import FeaturedProject from "@/components/home/FeaturedProject";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Process from "@/components/home/Process";
import Quote from "@/components/home/Quote";
import ServiceList from "@/components/home/ServiceList";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Intro />
      <FeaturedProject />
      <ServiceList />
      <Process />
      <Quote />
    </main>
  );
}
