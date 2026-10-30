import { useState } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import SmileGallery from "./components/SmileGallery";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const handleSelectServiceForBooking = (service) => {
    setSelectedTreatment(service);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToBooking = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6FBFC] text-[#33525C] flex flex-col font-sans selection:bg-[#B7E4CC] selection:text-[#0F3B4A]">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Navigation */}
      <Navbar onBookClick={handleScrollToBooking} />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero onBookClick={handleScrollToBooking} />

        {/* 4. Trust Strip */}
        <TrustStrip />

        {/* 5. Treatments / Services Section */}
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 6. About the Doctor */}
        <About />

        {/* 7. Your Visit / Process */}
        <Process />

        {/* 8. Results Gallery (Before / After Comparison) */}
        <SmileGallery />

        {/* 9. Patient Reviews */}
        <Reviews />

        {/* 10. FAQ Accordion */}
        <Faq />

        {/* 11. Appointment Booking & Contact Section */}
        <Contact preselectedTreatment={selectedTreatment} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating Quick Actions (Call, WhatsApp, Scroll Top) */}
      <FloatingActions />
    </div>
  );
}

