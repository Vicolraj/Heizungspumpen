import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Wrench } from "lucide-react";
import houseImage from "@/assets/situation-house.jpg";
import buildingImage from "@/assets/situation-building.jpg";
import technicianImage from "@/assets/situation-technician.jpg";

const ProblemSelection = () => {
  const handleRequest = (type: string) => {
    // Scroll to contact form
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const cards = [
    {
      icon: Home,
      image: houseImage,
      title: "Haus / Wohnung (Privatkunde)",
      description: "Heizung fällt aus, Heizkörper werden nicht richtig warm oder die Pumpe macht Geräusche?",
      type: "privat"
    },
    {
      icon: Building2,
      image: buildingImage,
      title: "Hausverwaltung / Gewerbe",
      description: "Mehrfamilienhaus oder Gewerbeobjekt – Mieter beschweren sich, die Anlage steht oder läuft instabil?",
      type: "gewerbe"
    },
    {
      icon: Wrench,
      image: technicianImage,
      title: "Installateur / Handwerker",
      description: "Kunde steht im Keller, alte Pumpe defekt – Sie brauchen schnell eine passende Ersatzpumpe?",
      type: "handwerker"
    }
  ];

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Was ist Ihre Situation?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <Card key={index} className="bg-card border-2 border-border hover:border-accent hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center shadow-lg">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              <CardHeader className="text-center pb-4 pt-6">
                <CardTitle className="text-xl font-bold text-primary">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="text-base text-muted-foreground mb-6 flex-grow">
                  {card.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => handleRequest(card.type)}
                  className="w-full font-semibold hover:bg-accent hover:text-white hover:border-accent"
                >
                  Passende Ersatzpumpe anfragen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSelection;
