import CONTENT_INFO from "../content";

const Content = ({ menuName }) => {
  return (
    <div className="content">
      {Object.keys(CONTENT_INFO).map((name) => {
        return (
          <video
            className={menuName === name ? "active" : ""}
            src={CONTENT_INFO[name].src}
            autoPlay
            muted
            loop
          ></video>
        );
      })}
      <div className={`video-overlay video-overlay-${menuName}`}></div>
      <section className="text-description">
        <h1>{CONTENT_INFO[menuName].h1}</h1>
        <h2>{CONTENT_INFO[menuName].h2}</h2>
        <p>{CONTENT_INFO[menuName].p}</p>
        <a href="#">EXPORE</a>
      </section>
    </div>
  );
};

export default Content;
