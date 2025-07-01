
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Geometric background elements */}
      <div className="geometric-shape w-96 h-96 -top-48 -left-48" />
      <div className="geometric-shape w-64 h-64 top-1/3 -right-32" />
      <div className="geometric-shape w-80 h-80 bottom-1/4 -left-40" />
      
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
