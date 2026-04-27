import FooterSection from "@/components/ui/FooterSection";
import ContactSection from "@/components/ui/ContactSection";

export default function ContactPage() {
  return (
    <main className="relative w-full min-h-screen bg-black flex flex-col pt-32 lg:pt-40">
      
      {/* Background glow specific to contact page */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vh] h-[50vh] bg-electric/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[60vh] h-[60vh] bg-black blur-[200px] rounded-full pointer-events-none" />

      {/* Main contact area */}
      <div className="flex-grow flex items-center justify-center mb-10 w-full z-10">
        <ContactSection />
      </div>

      <FooterSection />
    </main>
  );
}
