import AboutIntroSection from "@/components/ui/about/AboutIntroSection";
import AboutWhoSection from "@/components/ui/about/AboutWhoSection";
import AboutMissionSection from "@/components/ui/about/AboutMissionSection";
import LetsTalkSection from "@/components/ui/about/LetsTalkSection";
import AboutVisionSection from "@/components/ui/about/AboutVisionSection";
import FooterSection from "@/components/ui/FooterSection";

export default function AboutPage() {
  return (
    <main className="relative w-full bg-[#050505] min-h-screen">
      <div className="w-full relative z-10">
        
        <AboutIntroSection />
        
        <AboutWhoSection />

        <AboutMissionSection />

        <LetsTalkSection />

        <AboutVisionSection />

        <FooterSection />

      </div>
    </main>
  );
}
