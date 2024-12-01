export default function SavedNotes() {
  return (
    <div className="notes">
      <div className="note-details">
        <p className="note-title">Introduction to React</p>
        <p className="note-date">26-11-24</p>
      </div>
      <div className="note-access">
        <span className="notes-icon">
          <ion-icon name="volume-high-outline"></ion-icon>
        </span>
        <span className="notes-icon">
          <ion-icon name="trash-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
}
