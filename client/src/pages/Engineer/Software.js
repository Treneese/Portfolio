import React, { useState } from "react";

import PageHero from "../../components/PageHero";
import Container from "../../components/Container";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import Grid from "../../components/Grid";
import CategoryCard from "../../components/CategoryCard";
import InfoModal from "../../components/InfoModal";

function Software() {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      title: "Muslim Center",
      subtitle: "Community Platform",
      description:
        "A volunteer-built platform featuring event management, prayer times, donations, contact forms, and a custom administrative dashboard.",
      image: "/images/software/muslim-center.png",
      website: "https://www.themuslimcenter.com/",
      github: "https://github.com/Treneese/MuslimCenter",
      tech: ["React", "Flask", "SQLite", "REST API"],
    },
    {
      title: "DOKO Platform",
      subtitle: "Sports Platform",
      description:
        "The digital foundation of DOKO, connecting members, events, experiences, and future immersive technology.",
      image: "/images/software/doko-platform.png",
      website: "https://dokobattlefield.com/",
      github: "https://github.com/DOKO-Battlefield/DOKO_Battlefield",
      tech: ["React", "Flask", "SQLAlchemy"],
    },
    {
      title: "DOKO Kiosk",
      subtitle: "Event Operations",
      description:
        "A self-service event kiosk supporting QR check-in, participant tracking, sport logging, and post-event surveys.",
      image: "/images/software/doko-kiosk.png",
      website: "https://doko-tablet.vercel.app/",
      github: "https://github.com/DOKO-Battlefield/DOKO_Battlefield/tree/main/doko-tablet",
      tech: ["React", "Flask", "QR Codes", "Survey Flow"],
    },
    {
      title: "DOKO Walkthrough",
      subtitle: "Unity Project",
      description:
        "An interactive 3D walkthrough exploring the future DOKO facility, allowing visitors to experience the environment, architecture, and vision before construction begins.",
      image: "/images/software/walkthrough.png",
      video: "https://www.youtube.com/embed/Fy1lZMQ7FTc?si=3pkrJw4QLql47Dgq",
      tech: ["Unity", "3D", "Interactive Design"],
    },
    {
      title: "My Green Book",
      subtitle: "Web Application",
      description:
        "A full-stack web application created during software engineering training, focusing on CRUD operations, APIs, and responsive design.",
      video: "https://www.youtube.com/embed/GmhkQZP-QkY?si=L4iPhrdTSBA8OaEA",
      github: "https://github.com/Treneese/MyGreenBook/tree/main/GreenBook_BonVoyage",
      tech: ["React", "Flask", "SQLite"],
    },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Engineer"
        title="Software"
        subtitle="Applications, platforms, APIs, and digital experiences built to solve real-world problems."
      />

      <Section>
        <Container>
          <SectionTitle
            title="Projects"
            subtitle="Explore the software I've designed and developed."
          />

          <Grid columns={2}>
            {projects.map((project) => (
              <CategoryCard
                key={project.title}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                onClick={() => setActiveModal(project)}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <InfoModal
        item={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </main>
  );
}

export default Software;