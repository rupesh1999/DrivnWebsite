import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { BentoGrid } from "@/components/bento-grid";
import { ScrollSection } from "@/components/scroll-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BentoGrid />
      <ScrollSection />
      <Footer />
    </main>
  );
}
