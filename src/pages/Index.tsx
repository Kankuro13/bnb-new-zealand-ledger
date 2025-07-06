
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IndexSummary } from "./IndexSummary";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <IndexSummary />
      <Footer />
    </div>
  );
};

export default Index;
