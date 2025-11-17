import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleScrollToForm = () => {
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full">
      {/* Pre-Footer Notfallleiste */}
      <div className="bg-secondary border-t border-border">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Heizungspumpe defekt und Sie brauchen schnelle Hilfe?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Rufen Sie uns an – unsere Pumpen-Experten helfen persönlich.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 text-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-accent" />
                  <a href="tel:+4974719429413" className="font-semibold text-lg hover:text-accent transition-colors">
                    07471 / 9429413
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href="mailto:info@solarics.de" className="hover:text-accent transition-colors">
                    info@solarics.de
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-accent" />
                  <span>WhatsApp-Service verfügbar</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:flex-col md:gap-3">
              <Button 
                variant="destructive" 
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.location.href = 'tel:+4974719429413'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Jetzt anrufen
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/4974719429413?text=Heizungspumpe%20defekt%20–%20bitte%20um%20Rückruf', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp öffnen
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Haupt-Footer */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            {/* Spalte 1 - Logo & Kurzbeschreibung */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <h3 className="text-xl font-bold">Solarics GmbH</h3>
              </div>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>Spezialisiert auf Heizungspumpen & Ersatzteile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>20.000+ Pumpen auf Lager</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>Beratung durch Pumpen-Experten</span>
                </li>
              </ul>
            </div>

            {/* Spalte 2 - Kontakt */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Kontakt</h3>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p className="font-semibold text-primary-foreground">Solarics GmbH</p>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Im Nasswasen 14</p>
                    <p>72379 Hechingen</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+4974719429413" className="hover:text-accent transition-colors">
                    07471 / 9429413
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:info@solarics.de" className="hover:text-accent transition-colors">
                    info@solarics.de
                  </a>
                </div>
                
                <div className="pt-4 border-t border-primary-foreground/20">
                  <div className="flex items-start gap-2 mb-2">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary-foreground mb-1">Öffnungszeiten:</p>
                      <p>Mo–Fr: 8:00–17:00 Uhr</p>
                      <p>Notfall nach Vereinbarung</p>
                    </div>
                  </div>
                  <p className="text-xs text-primary-foreground/60 mt-2">
                    Abhollager für Handwerker nach Absprache.
                  </p>
                </div>
              </div>
            </div>

            {/* Spalte 3 - Service & Infos */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Service & Infos</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <button onClick={handleScrollToForm} className="hover:text-accent transition-colors">
                    Ersatzpumpe anfragen
                  </button>
                </li>
                <li>
                  <a href="#situations" className="hover:text-accent transition-colors">
                    Für Installateure & Heizungsbauer
                  </a>
                </li>
                <li>
                  <a href="#situations" className="hover:text-accent transition-colors">
                    Für Hausverwaltungen & Gewerbe
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-accent transition-colors">
                    FAQ zur Ersatz-Heizungspumpe
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-accent transition-colors">
                    Ratgeber: Alte Pumpe vs. Hocheffizienzpumpe
                  </a>
                </li>
              </ul>
            </div>

            {/* Spalte 4 - Rechtliches & Sicherheit */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Rechtliches & Sicherheit</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Datenschutzerklärung
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    AGB
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Widerrufsrecht
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Zahlungsarten
                  </a>
                </li>
              </ul>

              <div className="pt-4 border-t border-primary-foreground/20">
                <p className="text-xs text-primary-foreground/60 mb-3">Zahlungsarten:</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 bg-primary-foreground/10 rounded">Vorkasse</span>
                  <span className="px-3 py-1 bg-primary-foreground/10 rounded">PayPal</span>
                  <span className="px-3 py-1 bg-primary-foreground/10 rounded">Kreditkarte</span>
                  <span className="px-3 py-1 bg-primary-foreground/10 rounded">Rechnung</span>
                </div>
                <div className="flex items-center gap-1 mt-4 text-accent">
                  <span className="text-lg">⭐⭐⭐⭐⭐</span>
                  <span className="text-xs text-primary-foreground/80 ml-1">4,8/5 Sterne – Kundenbewertungen</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright-Zeile */}
        <div className="border-t border-primary-foreground/20">
          <div className="container mx-auto px-4 py-6">
            <p className="text-xs text-center text-primary-foreground/60">
              © 2025 Solarics GmbH. Alle Rechte vorbehalten. Grundfos®, Wilo® und KSB® sind eingetragene Marken der jeweiligen Hersteller.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;