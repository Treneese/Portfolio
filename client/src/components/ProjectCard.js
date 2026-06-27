import "../styles/Components.css";
import { Link } from "react-router-dom";

function ProjectCard({
    image,
    category,
    title,
    description,
    tech = [],
    to
}) {

    return (

        <Link
            to={to}
            className="project-card"
        >

            <div className="project-card__image">

                <img
                    src={image}
                    alt={title}
                />

            </div>

            <div className="project-card__content">

                <p className="project-card__category">
                    {category}
                </p>

                <h3>
                    {title}
                </h3>

                <p className="project-card__description">
                    {description}
                </p>

                <div className="project-card__tech">

                    {tech.map(item => (

                        <span key={item}>
                            {item}
                        </span>

                    ))}

                </div>

            </div>

        </Link>

    );

}

export default ProjectCard;