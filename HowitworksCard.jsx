export default function HowitworksCard({ card }) {
  return (
    <div className="howitworks-card">
      <div className="card-icons">
        <ion-icon name={card.icon} className="card-icon"></ion-icon>
      </div>
      <p className="card-title">{card.title}</p>
      <p className="card-description">{card.description}</p>
    </div>
  );
}
