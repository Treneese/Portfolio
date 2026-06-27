function InfoModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="info-modal__backdrop" onClick={onClose}>
      <div className="info-modal" onClick={(e) => e.stopPropagation()}>
        <button className="info-modal__close" onClick={onClose}>
          ×
        </button>

        {item.video ? (
          <div className="info-modal__video">
            <iframe
              src={item.video}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          item.image && (
            <img
              className="info-modal__image"
              src={item.image}
              alt={item.title}
            />
          )
        )}

        <div className="info-modal__content">
          <p className="info-modal__subtitle">{item.subtitle}</p>
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          {item.tech && (
            <div className="info-modal__tech">
              {item.tech.map((tech) => (
                <span key={tech} className="info-modal__tag">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="info-modal__links">
            {item.website && (
              <a href={item.website} target="_blank" rel="noreferrer">
                Website
              </a>
            )}

            {item.github && (
              <a href={item.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;