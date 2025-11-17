import wiloLogo from "@/assets/brands/wilo.png";
import lowaraLogo from "@/assets/brands/lowara.png";
import grundfosLogo from "@/assets/brands/grundfos.png";
import ksbLogo from "@/assets/brands/ksb.png";
import speckLogo from "@/assets/brands/speck.png";
import biralLogo from "@/assets/brands/biral.png";

const BrandBand = () => {
  const brands = [
    { name: "Grundfos", logo: grundfosLogo },
    { name: "Wilo", logo: wiloLogo },
    { name: "KSB", logo: ksbLogo },
    { name: "Lowara", logo: lowaraLogo },
    { name: "Speck Pumpen", logo: speckLogo },
    { name: "Biral", logo: biralLogo },
  ];

  return (
    <section className="bg-card py-12 md:py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
            Markenqualität von führenden Herstellern
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            Original-Ersatzteile und Pumpen aller Premium-Marken
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-background rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 h-24 md:h-28"
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} Logo`}
                className="max-w-full max-h-full object-contain transition-all duration-300 opacity-90 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandBand;
