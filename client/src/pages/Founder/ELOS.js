import React, { useState } from "react";

import PageHero from "../../components/PageHero";
import Container from "../../components/Container";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import Grid from "../../components/Grid";
import CategoryCard from "../../components/CategoryCard";
import InfoModal from "../../components/InfoModal";
import CarouselModal from "../../components/CarouselModal";

function ELOS() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeCarousel, setActiveCarousel] = useState(null);

  const concepts = [
  {
    title: "Art & Expression Rooms",
    subtitle: "Draw + Paint + Create",
    description:
      "Interactive rooms where guests draw, paint, throw color, reveal art, and become part of the artwork.",
    carousel: true,
    slides: [
      {
        title: "Draw. Paint. Be You.",
        subtitle: "A private washable room where every surface becomes your canvas.",
        image: "/images/elos/draw-paint-room.png",
      },
      {
        title: "Powder Baseball Arena",
        subtitle: "A colorful outdoor-style stadium experience where play creates color.",
        image: "/images/elos/powder-baseball.png",
      },
      {
        title: "Paint Balloon Darts",
        subtitle: "Throw darts at paint-filled balloons and create a giant wall of color.",
        image: "/images/elos/paint-balloon-darts.png",
      },
      {
        title: "Reverse Graffiti Tunnel",
        subtitle: "Wipe, reveal, and uncover hidden messages and art.",
        image: "/images/elos/reverse-graffiti.png",
      },
    ],
  },
  {
    title: "Hologram Experiences",
    subtitle: "Movement + Performance",
    description:
      "Dance, performance, and movement rooms using holograms, reactive visuals, and immersive environments.",
    carousel: true,
    slides: [
      {
        title: "Digital Dance Hologram Room",
        subtitle: "Hologram dancers surround the guest like they are the star of the show.",
        image: "/images/elos/dance-hologram-room.png",
      },
      {
        title: "Create a Music Video Room",
        subtitle: "Guests choose a scene, perform, and leave with their own music video.",
        image: "/images/elos/music-video-room.png",
      },
    ],
  },
  {
    title: "Digital Words",
    subtitle: "Poetry + Storytelling",
    description:
      "Interactive word rooms where guests write, record, arrange, and project poetry, stories, and affirmations.",
    carousel: true,
    slides: [
      {
        title: "Digital Poetry Room",
        subtitle: "Write, record, and watch your words become moving visual art.",
        image: "/images/elos/digital-poetry-room.png",
      },
      {
        title: "Confession Cloud Hallway",
        subtitle: "Anonymous confessions become glowing hologram clouds.",
        image: "/images/elos/confession-cloud.png",
      },
    ],
  },
  {
    title: "Emotion + Reflection",
    subtitle: "Private Reset Experiences",
    description:
      "Personal immersive rooms where guests step into private emotional journeys, reflection, and sensory reset.",
    carousel: true,
    slides: [
      {
        title: "360 Emotion Dome",
        subtitle: "Private domes where each guest chooses an emotion and enters their own immersive journey.",
        image: "/images/elos/emotion-dome.png",
      },
    ],
  },
];

  const journeyItems = [
    {
      title: "Concept",
      subtitle: "The museum idea",
      description:
        "ELOS began as a vision for an interactive museum where people do not just look at art — they become part of it.",
    },
    {
      title: "Room Design",
      subtitle: "Building the experience",
      description:
        "Designing immersive rooms for art, movement, digital words, reflection, performance, and creative play.",
    },
    {
      title: "Prototype",
      subtitle: "Testing the model",
      description:
        "Turning the strongest room concepts into early experiences, visuals, flows, and interactive systems.",
    },
    {
      title: "D'AMS Integration",
      subtitle: "Wearable connection",
      description:
        "Connecting movement, reactions, room effects, and guest identity through D'AMS and wearable technology.",
    },
    {
      title: "Pilot",
      subtitle: "First location",
      description:
        "A smaller launch version of ELOS to test rooms, guest flow, membership, media vault, and event programming.",
    },
    {
      title: "Expansion",
      subtitle: "Museum network",
      description:
        "The long-term vision is a network of immersive art and expression museums built around creativity, technology, and community.",
    },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Founder / ELOS"
        title="ELOS"
        subtitle="An interactive art and experience museum where creativity, play, and technology come together."
      />

      <Section>
        <Container>
          <div className="doko-hero-media">
            <img src="/images/elos/elos-board.png" alt="ELOS museum concept board" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <SectionTitle title="The Vision" />

          <p className="statement-text">
            ELOS reimagines what an art museum can be — transforming passive
            observation into bold, personal, playful interaction. Guests do not
            just visit the art. They create, move, perform, reflect, and become
            part of the experience.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            title="Experience Concepts"
            subtitle="The rooms and systems shaping the ELOS world."
          />

          <Grid columns={2}>
            {concepts.map((item) => (
              <CategoryCard
  key={item.title}
  title={item.title}
  subtitle={item.subtitle}
  description={item.description}
  onClick={() =>
    item.carousel ? setActiveCarousel(item) : setActiveModal(item)
  }
/>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            title="Founder Journey"
            subtitle="The path from concept to rooms, wearable integration, pilot, and expansion."
          />

          <div className="timeline-grid">
            {journeyItems.map((item, index) => (
              <button
                type="button"
                className="timeline-card"
                key={item.title}
                onClick={() => setActiveModal(item)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </button>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            title="Built For"
            subtitle="The purpose behind the museum."
          />

          <div className="tech-stack tech-stack--center">
            <span className="tech-stack__pill">Creativity</span>
            <span className="tech-stack__pill">Joyful Experiences</span>
            <span className="tech-stack__pill">Community</span>
            <span className="tech-stack__pill">Mental Wellness</span>
            <span className="tech-stack__pill">Accessible Art</span>
            <span className="tech-stack__pill">Technology + Expression</span>
          </div>
        </Container>
      </Section>

      <InfoModal item={activeModal} onClose={() => setActiveModal(null)} />
        <CarouselModal
  item={activeCarousel}
  onClose={() => setActiveCarousel(null)}
/>
    </main>
  );
}

export default ELOS;