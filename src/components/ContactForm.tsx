import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Phone, Mail, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein").max(100, "Name darf maximal 100 Zeichen lang sein"),
  phone: z.string().min(5, "Bitte geben Sie eine gültige Telefonnummer ein").max(20, "Telefonnummer zu lang"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein").max(255, "E-Mail zu lang"),
  manufacturer: z.string().min(1, "Bitte wählen Sie einen Hersteller"),
  pumpType: z.string().max(200, "Pumpentyp zu lang").optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein").max(1000, "Nachricht darf maximal 1000 Zeichen lang sein"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      manufacturer: "",
      pumpType: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Hier würde die tatsächliche API-Anfrage erfolgen
      console.log("Form data:", data);
      
      // Simulation einer erfolgreichen Anfrage
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Anfrage erfolgreich gesendet!", {
        description: "Wir melden uns in Kürze bei Ihnen.",
      });
      
      form.reset();
    } catch (error) {
      toast.error("Fehler beim Senden", {
        description: "Bitte versuchen Sie es erneut oder rufen Sie uns an.",
      });
    }
  };

  const manufacturers = [
    "Grundfos",
    "Wilo",
    "KSB",
    "Pentair Jung Pumpen",
    "Lowara",
    "Speck Pumpen",
    "Andere / Unbekannt",
  ];

  return (
    <section id="contact-form" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Jetzt Ersatzpumpe anfragen
            </h2>
            <p className="text-lg text-muted-foreground">
              Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen
            </p>
          </div>

          <div className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Max Mustermann" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Telefon */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">Telefon *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="0123 456789" {...field} className="h-12 pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* E-Mail */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">E-Mail *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input type="email" placeholder="max@beispiel.de" {...field} className="h-12 pl-10" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Hersteller */}
                  <FormField
                    control={form.control}
                    name="manufacturer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">Hersteller *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Bitte wählen" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {manufacturers.map((manufacturer) => (
                              <SelectItem key={manufacturer} value={manufacturer}>
                                {manufacturer}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Pumpentyp */}
                  <FormField
                    control={form.control}
                    name="pumpType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">Pumpentyp (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="z.B. Wilo Star RS 25/4" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Nachricht */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">Ihre Nachricht / Problem-Beschreibung *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Textarea 
                            placeholder="Beschreiben Sie bitte Ihr Problem oder welche Ersatzpumpe Sie benötigen..."
                            {...field}
                            className="min-h-32 pl-10 pt-3"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="xl" 
                    variant="cta"
                    className="w-full md:w-auto md:min-w-64"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                  </p>
                </div>
              </form>
            </Form>
          </div>

          {/* Alternative Kontaktwege */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Telefonisch</h3>
              <a href="tel:+4974719429450" className="text-accent hover:underline font-semibold">
                07471-9429450
              </a>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">E-Mail</h3>
              <a href="mailto:info@beispiel.de" className="text-accent hover:underline">
                info@beispiel.de
              </a>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <MessageSquare className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/4974719429450?text=Hallo, ich benötige eine Ersatzpumpe" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Nachricht senden
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
