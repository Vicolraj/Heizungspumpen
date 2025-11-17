import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Wie schnell kann meine Ersatzpumpe geliefert werden?",
    answer: "In vielen Fällen können wir innerhalb von 24–48 Stunden liefern, je nach Lagerbestand und Versanddienstleister. Bei sehr dringenden Fällen rufen Sie uns bitte direkt an – dann prüfen wir sofort die schnellste Option."
  },
  {
    question: "Welche Informationen brauchen Sie, um die passende Pumpe zu finden?",
    answer: "Ideal ist ein Foto vom Typenschild oder der alten Pumpe. Alternativ helfen uns Hersteller, Typbezeichnung, Leistung (z. B. 25-40 / 25-60), Baujahr und die Art der Anlage (Einfamilienhaus, Mehrfamilienhaus, Gewerbe). Je mehr Infos, desto schneller können wir ein passendes Angebot erstellen."
  },
  {
    question: "Ich kenne das Modell meiner alten Pumpe nicht – was kann ich tun?",
    answer: "Kein Problem: Machen Sie einfach Fotos von der Pumpe im eingebauten Zustand und vom Typenschild, wenn möglich. Laden Sie die Bilder im Formular hoch oder schicken Sie sie uns per E-Mail oder WhatsApp. Unser Team hilft Ihnen dann bei der Identifikation."
  },
  {
    question: "Kann ich als Privatkunde direkt bei Ihnen bestellen?",
    answer: "Ja, wir beliefern sowohl Privatkunden als auch Hausverwaltungen, Gewerbe und Handwerker. Auf Wunsch liefern wir direkt an Ihren Heizungsbauer oder an Ihre Privatadresse."
  },
  {
    question: "Muss der Pumpentausch unbedingt von einem Installateur gemacht werden?",
    answer: "Aus Sicherheits- und Haftungsgründen empfehlen wir immer einen zugelassenen Fachbetrieb. Bei vielen Anlagen greift zudem nur dann die Garantie vollständig, wenn der Einbau durch einen Fachmann erfolgt. Auf Wunsch vermitteln wir Ihnen einen Partnerbetrieb vor Ort."
  },
  {
    question: "Können Sie mir eine 1:1-Ersatzpumpe liefern, wenn mein Modell sehr alt ist?",
    answer: "In vielen Fällen ja. Wenn Ihr exaktes Modell nicht mehr lieferbar ist, suchen wir nach einem voll kompatiblen Nachfolgemodell oder einer passenden Alternative. Sie erhalten immer eine klare Empfehlung, was technisch sinnvoll und wirtschaftlich ist."
  },
  {
    question: "Bieten Sie auch moderne Hocheffizienzpumpen als Alternative an?",
    answer: "Ja. Wenn Sie möchten, prüfen wir, ob sich der Umstieg auf eine Hocheffizienzpumpe lohnt. Damit lassen sich je nach Ausgangssituation bis zu 60–80 % Stromkosten einsparen – wir beraten Sie, welche Lösung in Ihrem Fall sinnvoll ist."
  },
  {
    question: "Gibt es Garantie auf die neue Pumpe?",
    answer: "Ja, in der Regel gilt eine Herstellergarantie von 2 Jahren auf die Pumpe. Bei bestimmten Marken oder Produkten sind auch längere Garantiezeiten möglich – das teilen wir Ihnen im Angebot transparent mit."
  },
  {
    question: "Was kostet eine Ersatz-Heizungspumpe ungefähr?",
    answer: "Die Preise hängen von Leistung, Hersteller, Effizienzklasse und Anwendung (z. B. Einfamilienhaus vs. Gewerbeanlage) ab. Nach Ihren Angaben bzw. dem Foto vom Typenschild erhalten Sie von uns ein konkretes, verbindliches Angebot – transparent und ohne versteckte Kosten."
  },
  {
    question: "Beliefern Sie auch Installateure und Heizungsbauer direkt?",
    answer: "Ja, sehr gerne. Viele Installateure nutzen uns als schnellen Ersatzteil- und Pumpenlieferanten. Wir liefern direkt zur Baustelle oder in den Betrieb und unterstützen bei der Modellauswahl."
  },
  {
    question: "Bieten Sie auch einen Einbau- oder Vor-Ort-Service an?",
    answer: "Über unser Netzwerk können wir Ihnen je nach Region Partnerbetriebe empfehlen, die den Einbau und die Inbetriebnahme übernehmen. Sprechen Sie uns einfach im Formular oder am Telefon darauf an."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            FAQ – Häufige Fragen zur Ersatz-Heizungspumpe
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um Ersatzpumpen, Lieferung und Service.
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border shadow-sm p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border last:border-b-0 pb-4 last:pb-0"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-base md:text-lg py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
