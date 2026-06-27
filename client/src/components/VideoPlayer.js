import "../styles/Components.css";


function VideoPlayer({
  title,
  src,
  poster,
  type = "video", // "video" or "youtube"
}) {
  return (
    <section className="video-player">
      {title && <h3 className="video-player__title">{title}</h3>}

      <div className="video-player__wrapper">
        {type === "youtube" ? (
          <iframe
            src={src}
            title={title || "Video player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <video controls poster={poster} preload="metadata">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </section>
  );
}

export default VideoPlayer;