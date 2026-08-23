import { FocusPage } from "@/components/FocusPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/research", "en");

export default function ResearchPage() {
  return <FocusPage locale="en" label="Independent research" title="Research that stays close to real systems." lead="Arvexo explores how AI products can be evaluated, understood and improved in the environments where people actually use them." statement="This page is the foundation for forthcoming research notes, experiments and publications." sections={[
    { title: "AI effectiveness", text: "Methods for connecting AI adoption to useful outcomes without reducing people to simplistic productivity scores." },
    { title: "Knowledge systems", text: "How organizations discover, validate and spread effective ways of working with AI." },
    { title: "Human-centered AI", text: "Interfaces and feedback loops that make advanced systems understandable, teachable and safe to improve." }
  ]} primary={{ label: "Follow on GitHub", href: "https://github.com/Pobedych", external: true }} secondary={{ label: "Founder profile", href: "/founder" }} />;
}
