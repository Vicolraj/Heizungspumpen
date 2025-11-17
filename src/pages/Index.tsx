import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandBand from "@/components/BrandBand";
import ProblemSelection from "@/components/ProblemSelection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BrandBand />
      <ProblemSelection />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
