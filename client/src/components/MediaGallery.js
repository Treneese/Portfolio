import "../styles/Components.css";

function MediaGallery({ items = [], columns = "three" }) {
  return (
    <section className={`media-gallery media-gallery--${columns}`}>
      {items.map((item, index) => (
        <article className="media-gallery__item" key={item.title || index}>
          <div className="media-gallery__image">
            <img src={item.image} alt={item.alt || item.title || "Gallery item"} />
          </div>

          {(item.title || item.caption) && (
            <div className="media-gallery__content">
              {item.title && <h3>{item.title}</h3>}
              {item.caption && <p>{item.caption}</p>}
            </div>
          )}
        </article>
      ))}
    </section>
  );
}

export default MediaGallery;