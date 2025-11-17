import { Phone, Users, MessageCircle } from "lucide-react";
import technician1 from "@/assets/technician-1.jpg";
import technician2 from "@/assets/technician-2.jpg";
import solaricsLogo from "@/assets/solarics-logo.jpg";

const Header = () => {
  // Kann später mit Supabase Realtime erweitert werden
  const onlineTechnicians = 2;
  const waitingCustomers = 2;

  return (
    <header className="bg-card border-b-2 border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-3 md:gap-6 h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <img 
              src={solaricsLogo} 
              alt="Solarics - Investition in die Zukunft" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Center - Team & Status */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Techniker Avatare */}
            <div className="flex items-center gap-1">
              <div className="relative">
                <img 
                  src={technician1} 
                  alt="Techniker 1" 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-card object-cover"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 md:w-3.5 md:h-3.5 bg-trust-foreground rounded-full border-2 border-card"></div>
              </div>
              <div className="relative">
                <img 
                  src={technician2} 
                  alt="Techniker 2" 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-card object-cover"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 md:w-3.5 md:h-3.5 bg-trust-foreground rounded-full border-2 border-card"></div>
              </div>
            </div>

            {/* Status Info */}
            <div className="hidden md:flex flex-col">
              <div className="flex items-center gap-1.5">
                <div className="relative">
                  <div className="w-2 h-2 bg-trust-foreground rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-trust-foreground rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-sm font-bold text-trust-foreground">Sofortige Hilfe durch unsere Techniker</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Users className="w-3 h-3" />
                <span>Aktuell {waitingCustomers} Personen in der Warteschleife</span>
              </div>
            </div>

            {/* Mobile: Kompakte Anzeige */}
            <div className="flex md:hidden flex-col">
              <span className="text-xs font-bold text-trust-foreground leading-tight">Sofortige Hilfe</span>
              <span className="text-xs text-muted-foreground leading-tight">{waitingCustomers} in Warteschleife</span>
            </div>
          </div>

          {/* Right - Contact Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/4974719429413?text=Heizungspumpe%20defekt%20–%20bitte%20um%20Rückruf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-trust-foreground hover:bg-trust-foreground/90 text-white px-3 md:px-4 py-2 rounded-lg transition-all hover:scale-105 shadow-md text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">WhatsApp Sofort-Hilfe</span>
              <span className="md:hidden">WhatsApp</span>
            </a>

            {/* Phone Button */}
            <a 
              href="tel:+4974719429413"
              className="flex items-center gap-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground px-3 md:px-5 py-2 md:py-2.5 rounded-lg transition-all hover:scale-105 shadow-md"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="text-xs sm:text-sm md:text-base font-semibold">Jetzt anrufen</span>
                <span className="hidden sm:inline text-sm md:text-base font-semibold">07471-9429413</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
