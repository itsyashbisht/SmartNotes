import HowitworksCard from "../HowitworksCard";

const cards = [
  {
    title: "File Conversion",
    description:
      "Drag & drop or browse any file format (docs, PDF, images) to convert into well-structured notes.",
    icon: "document-outline",
  },
  {
    title: "Voice Notes",
    description:
      "Listen to your notes with our text-to-speech feature for an auditory learning experience.",
    icon: "mic-outline",
  },
  {
    title: "AI Note Generation",
    description:
      "Generate comprehensive notes on any topic using our advanced AI technology.",
    icon: "bulb-outline",
  },
  {
    title: "Easy Management",
    description:
      "Add, delete, and organize your notes effortlessly with date tracking for each entry.",
    icon: "trash-outline",
  },
];

export default function Howitworks() {
  return (
    <section className="section-howitworks container">
      <h2 className="Heading-secondary">How it Works</h2>
      <div className="cards grid grid-col-4">
        {cards.map((card) => (
          <HowitworksCard card={card} key={card.title} />
        ))}
      </div>
    </section>
  );
}
