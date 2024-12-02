// import ChatBot from "./ChatBot";
import YourNotes from "./YourNotes";

export default function Notes() {
  return (
    <div className="container section-Notes">
      <h2 className="Heading-secondary">Revolutionize Your Note-Taking</h2>
      <div className="NotesMaker grid grid-col-2">
        <div className="drag-n-drop">
          <p className="Heading-tertiary">Upload Files</p>
          <div className="Upload-files">
            <label htmlFor="document" className="input-label">
              <figure className="upload-icon">
                <ion-icon name="cloud-upload-outline"></ion-icon>
              </figure>
              Drag and drop a file here, or click to select a file
              <input
                type="file"
                id="document"
                placeholder="Drag and drop a file here, or click to select a file"
                hidden
              />
            </label>
          </div>
        </div>
        <YourNotes />
        {/* <ChatBot /> */}
      </div>
    </div>
  );
}
