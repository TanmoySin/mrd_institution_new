import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
    </>
  );
}

function GlobalWhatsApp() {
  const location = useLocation();

  const getMessage = () => {
    if (location.pathname === "/school-boards") {
      return "Hi! I was looking at the School Boards Curriculum page and I'd like to get more details about the CBSE/TBSE batches and fee structure.";
    }
    return "Hello! I'd like to know more about the admissions process.";
  };

  return <WhatsAppCTA defaultMessage={getMessage()} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/school-boards" element={<SchoolBoards />} />
        </Routes>

        <GlobalWhatsApp />
      </div>
    </BrowserRouter>
  );
}
