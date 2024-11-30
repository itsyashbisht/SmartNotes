export default function HeroSection() {
  return (
    <>
      <div className="section-hero grid grid-col-2">
        <div className="Hero-Content">
          <h1 className="Heading-primary">
            Transform your notes with <span>SmartNotes AI</span>
          </h1>
          <p className="descriptive-text">
            SmartNotes uses AI to transform any file into structured,
            intelligent notes. Boost your productivity and learning in ways you
            never imagined.
          </p>
          <div className="btn-container">
            <button className="btn">
              Get started{" "}
              <span>
                <ion-icon
                  className="icon"
                  name="arrow-forward-outline"
                ></ion-icon>
              </span>
            </button>
          </div>
        </div>
        <div className="Hero-Image">
          <h5>hello</h5>
        </div>
      </div>
    </>
  );
}
