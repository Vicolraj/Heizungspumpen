import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Phone, Mail, MessageSquare, Upload, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";

const formSchema = z.object({
  nameCompany: z.string().min(2, "Name oder Firmenname erforderlich").max(100),
  email: z.string().email("Gültige E-Mail erforderlich"),
  phone: z.string().min(5, "Gültige Telefonnummer erforderlich").max(20),
  zipCity: z.string().min(3, "PLZ und Stadt erforderlich"),
  customerType: z.enum(["privat", "gewerbe", "handwerker"], { errorMap: () => ({ message: "Bitte wählen Sie eine Kategorie" }) }),
  manufacturer: z.string().min(1, "Hersteller erforderlich"),
  pumpModel: z.string().max(200).optional(),
  pumpYear: z.string().max(4).optional(),
  urgency: z.enum(["today", "48h", "days"], { errorMap: () => ({ message: "Bitte wählen Sie eine Dringlichkeit" }) }),
  wantCallback: z.boolean().default(false),
  wantEnergyAlternative: z.boolean().default(false),
  message: z.string().min(10, "Beschreibung mindestens 10 Zeichen").max(2000),
  fileUrl: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameCompany: "",
      email: "",
      phone: "",
      zipCity: "",
      customerType: undefined,
      manufacturer: "",
      pumpModel: "",
      pumpYear: "",
      urgency: undefined,
      wantCallback: false,
      wantEnergyAlternative: false,
      message: "",
      fileUrl: "",
    },
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a production app, you would upload this file to a server or storage service
      // For now, we'll just store the filename
      form.setValue("fileUrl", file.name);
      toast.success(`Datei "${file.name}" hinzugefügt`);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Build email content with all form data
      const emailContent = `
NEUE ANFRAGE ZUR HEIZUNGSPUMPENERSATZ
=====================================

PERSÖNLICHE DATEN:
------------------
Name/Firma: ${data.nameCompany}
E-Mail: ${data.email}
Telefon: ${data.phone}
PLZ/Stadt: ${data.zipCity}

KUNDENKATEGORIE:
----------------
${data.customerType === "privat" ? "Privatkunde" : data.customerType === "gewerbe" ? "Hausverwaltung/Gewerbe" : "Installateur/Handwerker"}

PUMPENDETAILS:
--------------
Hersteller: ${data.manufacturer}
Modell/Typ: ${data.pumpModel || "Nicht angegeben"}
Baujahr: ${data.pumpYear || "Nicht angegeben"}
Fotodatei: ${data.fileUrl || "Keine Datei hochgeladen"}

DRINGLICHKEIT:
--------------
${data.urgency === "today" ? "Sehr dringend (heute/morgen)" : data.urgency === "48h" ? "Innerhalb 48 Stunden" : "In den nächsten Tagen"}

ZUSÄTZE:
--------
Rückruf gewünscht: ${data.wantCallback ? "Ja" : "Nein"}
Energieeffiziente Alternative: ${data.wantEnergyAlternative ? "Ja" : "Nein"}

NACHRICHT/PROBLEMBESCHREIBUNG:
------------------------------
${data.message}

=====================================
Formular eingereicht am: ${new Date().toLocaleString("de-DE")}
`;

      // Create mailto link with encoded subject and body
      const subject = `Neue Anfrage zur Heizungspumpenersatz - ${data.nameCompany}`;
      const mailtoLink = `mailto:info@solarics.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;

      // Open user's mail client with prefilled email
      window.location.href = mailtoLink;

      // Show success message
      setShowSuccess(true);
      toast.success("Anfrage wird geöffnet!", {
        description: "Ihr Mail-Client wird mit Ihrer Anfrage geöffnet. Bitte überprüfen und senden Sie die E-Mail ab.",
      });

      form.reset();
      
      // Hide success message after 8 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 8000);
    } catch (error) {
      toast.error("Fehler beim Öffnen", {
        description: "Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.",
      });
    } finally {
      setIsSubmitting(false);
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
    <section id="inquiry-form" className="bg-background py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Jetzt Ersatzpumpe anfragen
            </h2>
            <p className="text-lg text-muted-foreground">
              Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen
            </p>
          </div>

          {showSuccess && (
            <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-xl">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 text-lg mb-2">
                    Danke! Ihre Anfrage wurde erfolgreich übermittelt.
                  </h3>
                  <p className="text-green-800">
                    Unser Team wird sich in Kürze unter der angegebenen Telefonnummer oder E-Mail-Adresse bei Ihnen melden. 
                    Typischerweise innerhalb von 2–4 Stunden während unserer Geschäftszeiten.
                  </p>
                  <p className="text-sm text-green-700 mt-3 font-semibold">
                    Sie können die Seite jetzt schließen oder weitere Informationen durchstöbern.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* SECTION 1: PERSONAL DATA */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Ihre Kontaktdaten *</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nameCompany"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Name / Firma *</FormLabel>
                          <FormControl>
                            <Input placeholder="Max Mustermann / Musterfirma GmbH" {...field} className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
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
                    <FormField
                      control={form.control}
                      name="zipCity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">PLZ / Stadt *</FormLabel>
                          <FormControl>
                            <Input placeholder="72379 Hechingen" {...field} className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="border-t border-border pt-6"></div>

                {/* SECTION 2: CUSTOMER TYPE & PUMP DETAILS */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Ihre Situation & Pumpe</h3>
                  
                  <FormField
                    control={form.control}
                    name="customerType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">Ich bin... *</FormLabel>
                        <FormControl>
                          <RadioGroup value={field.value} onValueChange={field.onChange}>
                            <div className="flex items-center space-x-3 py-2">
                              <RadioGroupItem value="privat" id="privat" />
                              <label htmlFor="privat" className="cursor-pointer text-base">
                                Privatkunde (Haus / Wohnung)
                              </label>
                            </div>
                            <div className="flex items-center space-x-3 py-2">
                              <RadioGroupItem value="gewerbe" id="gewerbe" />
                              <label htmlFor="gewerbe" className="cursor-pointer text-base">
                                Hausverwaltung / Gewerbe
                              </label>
                            </div>
                            <div className="flex items-center space-x-3 py-2">
                              <RadioGroupItem value="handwerker" id="handwerker" />
                              <label htmlFor="handwerker" className="cursor-pointer text-base">
                                Installateur / Handwerker
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="manufacturer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Hersteller der Pumpe *</FormLabel>
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
                    <FormField
                      control={form.control}
                      name="pumpModel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Modell / Typ (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="z.B. Wilo Star RS 25/4" {...field} className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="pumpYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">Baujahr (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="z.B. 2015" {...field} className="h-12" maxLength={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="border-t border-border pt-6"></div>

                {/* SECTION 3: FILE UPLOAD & MESSAGE */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Weitere Informationen</h3>
                  
                  <FormItem>
                    <FormLabel className="text-base font-semibold">Foto der Pumpe / Typenschild (optional)</FormLabel>
                    <FormControl>
                      <div 
                        className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-accent hover:bg-accent/5 transition-all"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="font-semibold text-foreground">Datei auswählen oder hier ziehen</p>
                        <p className="text-sm text-muted-foreground mt-1">JPG, PNG oder PDF bis 5MB</p>
                        <input 
                          ref={fileInputRef}
                          type="file" 
                          accept="image/*,.pdf"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        {form.watch("fileUrl") && (
                          <p className="text-sm text-green-600 font-semibold mt-3">
                            ✓ {form.watch("fileUrl")}
                          </p>
                        )}
                      </div>
                    </FormControl>
                  </FormItem>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">Problembeschreibung / Anfrage *</FormLabel>
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
                </div>

                <div className="border-t border-border pt-6"></div>

                {/* SECTION 4: URGENCY & PREFERENCES */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Zeitrahmen & Präferenzen</h3>
                  
                  <FormField
                    control={form.control}
                    name="urgency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">Wie dringend ist der Pumpentausch? *</FormLabel>
                        <FormControl>
                          <RadioGroup value={field.value} onValueChange={field.onChange}>
                            <div className="flex items-center space-x-3 py-2">
                              <RadioGroupItem value="today" id="today" />
                              <label htmlFor="today" className="cursor-pointer text-base font-semibold text-red-600">
                                ⚡ Sehr dringend (heute / morgen)
                              </label>
                            </div>
                            <div className="flex items-center space-x-3 py-2">
                              <RadioGroupItem value="48h" id="48h" />
                              <label htmlFor="48h" className="cursor-pointer text-base">
                                Innerhalb 48 Stunden
                              </label>
                            </div>
                            <div className="flex items-center space-x-3 py-2">
                              <RadioGroupItem value="days" id="days" />
                              <label htmlFor="days" className="cursor-pointer text-base">
                                In den nächsten Tagen
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-3 pt-4">
                    <FormField
                      control={form.control}
                      name="wantCallback"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange}
                              className="mt-1"
                            />
                          </FormControl>
                          <FormLabel className="text-base font-normal cursor-pointer">
                            ☎️ Ich möchte einen Rückruf von einem Pumpen-Experten
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="wantEnergyAlternative"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-3">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange}
                              className="mt-1"
                            />
                          </FormControl>
                          <FormLabel className="text-base font-normal cursor-pointer">
                            ⚡ Bitte auch eine energieeffiziente Alternative anbieten
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* SUBMIT SECTION */}
                <div className="border-t border-border pt-6">
                  <Button 
                    type="submit" 
                    size="xl" 
                    className="w-full md:w-auto md:min-w-72 text-lg font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Anfrage wird gesendet..." : "Anfrage jetzt absenden"}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben. 
                    <a href="#" className="text-accent hover:underline ml-1">Datenschutz</a>
                  </p>
                </div>
              </form>
            </Form>
          </div>

          {/* ALTERNATIVE CONTACT METHODS */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-md transition-all">
              <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Telefonisch</h3>
              <a href="tel:+4974719429413" className="text-accent hover:underline font-semibold text-lg">
                07471 / 9429413
              </a>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-md transition-all">
              <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">E-Mail</h3>
              <a href="mailto:info@solarics.de" className="text-accent hover:underline font-semibold text-lg">
                info@solarics.de
              </a>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-md transition-all">
              <MessageSquare className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/4974719429413?text=Heizungspumpe%20defekt%20–%20bitte%20um%20Rückruf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-semibold text-lg"
              >
                Sofort schreiben
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
