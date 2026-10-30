import { Contact } from "@/components/Contact";
import { Filmography } from "@/components/Filmography";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { ProfileSection } from "@/components/ProfileSection";
import { Showreel } from "@/components/Showreel";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProfileSection />
        <Filmography />
        <Showreel />
        <Gallery />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
