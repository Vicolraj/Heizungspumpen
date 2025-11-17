import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
export default FAQ;
