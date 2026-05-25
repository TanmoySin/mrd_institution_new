import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import CategoryMatrix from "./components/sections/CategoryMatrix";
import StatsBar from "./components/sections/StatsBar";
import Faculty from "./components/sections/Faculty";
import Testimonials from "./components/sections/Testimonials";
import Admissions from "./components/sections/Admissions";
import FAQ from "./components/sections/FAQ";
import WhatsAppCTA from "./components/ui/WhatsAppCTA";
import SchoolBoards from "./pages/SchoolBoards";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoryMatrix />
        <StatsBar />
        <Faculty />
        <Testimonials />
        <Admissions />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/school-boards" element={<SchoolBoards />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
