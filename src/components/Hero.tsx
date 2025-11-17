import { Button } from "@/components/ui/button";
import { Phone, PhoneCall, MessageCircle, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-technician.jpg";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:+491234567890";
  };

  const handleCallback = () => {
    // Scroll to form or open callback modal
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/491234567890?text=Hallo, ich benötige eine Ersatzpumpe", "_blank");
  };

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Heizungspumpe defekt? Wir liefern schnell Ersatz – deutschlandweit.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                20.000+ Pumpen auf Lager • Markenqualität von Grundfos, Wilo, KSB • Express-Lieferung & Fachberatung
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="destructive" 
                size="xl" 
                onClick={handleCall}
                className="flex-1 sm:flex-none"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </Button>
              <Button 
                variant="destructive" 
                size="xl" 
                onClick={handleCallback}
                className="flex-1 sm:flex-none"
              >
                <PhoneCall className="w-5 h-5" />
                Rückruf anfordern
              </Button>
              <Button 
                variant="destructive" 
                size="xl" 
                onClick={handleWhatsApp}
                className="flex-1 sm:flex-none"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>

            {/* Trust Icons - Hervorgehoben */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-start gap-4 bg-trust/50 p-5 rounded-xl border-2 border-trust-foreground/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex-shrink-0 w-10 h-10 bg-trust-foreground rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-base font-bold text-foreground pt-1.5">Original-Ersatzteile</span>
              </div>
              <div className="flex items-start gap-4 bg-trust/50 p-5 rounded-xl border-2 border-trust-foreground/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex-shrink-0 w-10 h-10 bg-trust-foreground rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-base font-bold text-foreground pt-1.5">Beratung durch Pumpen-Experten</span>
              </div>
              <div className="flex items-start gap-4 bg-trust/50 p-5 rounded-xl border-2 border-trust-foreground/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex-shrink-0 w-10 h-10 bg-trust-foreground rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-base font-bold text-foreground pt-1.5">Lieferung an Sie oder Ihren Heizungsbauer</span>
              </div>
              <div className="flex items-start gap-4 bg-trust/50 p-5 rounded-xl border-2 border-trust-foreground/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex-shrink-0 w-10 h-10 bg-trust-foreground rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-base font-bold text-foreground pt-1.5">Schnelle Lieferung</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Heizungstechniker prüft Heizungspumpe im Heizungsraum" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
