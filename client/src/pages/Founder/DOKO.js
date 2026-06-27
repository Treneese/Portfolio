import React, { useState } from "react";

import PageHero from "../../components/PageHero";
import Container from "../../components/Container";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import Grid from "../../components/Grid";
import CategoryCard from "../../components/CategoryCard";
import Button from "../../components/Button";
import InfoModal from "../../components/InfoModal";
import VideoPlayer from "../../components/VideoPlayer";
import CarouselModal from "../../components/CarouselModal";

function Doko() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeCarousel, setActiveCarousel] = useState(null);

  const ecosystemItems = [
    {
      title: "DOKO Platform",
      subtitle: "Digital Foundation",
      description:
        "The software layer for events, participant flow, check-in, sport tracking, surveys, and future member experiences.",
      image: "/images/doko/platform.png",
    },
    {
      title: "DOKO Necklace",
      subtitle: "Identity + Access",
      description:
        "A wearable identity piece that connects guests to check-in, sport sessions, tracking, and future DOKO interactions.",
      image: "/images/doko/necklace.png",
    },
    {
      title: "D'AMS",
      subtitle: "Adaptive Motion System",
      description:
        "The wearable safety and telemetry system inside DOKO, designed to track motion, pulse, and live safety states.",
      image: "/images/doko/dams.png",
    },
    {
  title: "NAQI",
  subtitle: "Movement Intelligence Platform",
  description:
    "A future interactive movement platform connecting immersive training, D'AMS feedback, and adaptive coaching.",
  carousel: true,
  slides: [
    {
      title: "Welcome to NAQI",
      subtitle:
        "Every session begins with a personalized movement experience.",
      image: "/images/doko/naqi-welcome.png",
    },
    {
      title: "Environment Selection",
      subtitle:
        "Choose immersive worlds designed for different disciplines and training goals.",
      image: "/images/doko/naqi-environment.png",
    },
    {
      title: "Music Selection",
      subtitle:
        "Customize the atmosphere with music that matches your rhythm and intensity.",
      image: "/images/doko/naqi-music.png",
    },
    {
      title: "Discipline Selection",
      subtitle:
        "Select a combat sport and begin your adaptive training session.",
      image: "/images/doko/naqi-discipline.png",
    },
    {
      title: "Training Flow",
      subtitle:
        "Move through calibration, arena entry, discipline selection, live training, and feedback.",
      image: "/images/doko/naqi-flow.png",
    },
    {
      title: "Live Coaching",
      subtitle:
        "Practice techniques with real-time scoring, feedback, and adaptive coaching.",
      image: "/images/doko/naqi-feedback.png",
    },
  ],
}
  ];

  const journeyItems = [
  {
    title: "Idea",
    subtitle: "Where DOKO started",
    description:
      "The first vision for a sports experience that could feel more immersive, community-centered, and memorable than a traditional gym or event.",
  },
  {
    title: "Research",
    subtitle: "Understanding the space",
    description:
      "Studying sports experiences, family entertainment, combat sports, immersive attractions, event flow, safety, and what people need to feel comfortable trying something new.",
  },
  {
    title: "Brand",
    subtitle: "Shaping the identity",
    description:
      "Developing the name, visual style, tone, experience language, and overall world of DOKO.",
  },
  {
    title: "Website",
    subtitle: "Public-facing pitch",
    description:
      "Creating the official DOKO website for potential investors, partners, sponsors, and organizations.",
  },
  {
    title: "Platform MVP",
    subtitle: "The digital foundation",
    description:
      "Building the first version of the DOKO platform to support events, participants, check-in, and future experience features.",
  },
  {
    title: "Kiosk",
    subtitle: "Event operations",
    description:
      "Creating the QR check-in, sport log, and survey flow so guests can move through a DOKO event smoothly.",
  },
  {
    title: "Pop-Up",
    subtitle: "First live validation",
    description:
      "Designing the first public DOKO experience with fencing, karate/jujutsu, DOKO Bar, QR check-in, and community participation.",
  },
  {
    title: "D'AMS V1",
    subtitle: "Motion safety system",
    description:
      "Creating the first simulated version of the DOKO Adaptive Motion System with telemetry, motion data, and safety states.",
  },
  {
    title: "D'AMS V2",
    subtitle: "Hardware prototype",
    description:
      "Moving D'AMS from simulation into wearable hardware with wrist, ankle, and headset sensors.",
  },
  {
    title: "NAQI",
    subtitle: "Future device layer",
    description:
      "Developing the next interactive hardware layer that connects deeper into the DOKO ecosystem.",
  },
  {
    title: "Pilot Facility",
    subtitle: "First permanent location",
    description:
      "The first physical DOKO space designed to test the full platform, sports experience, and technology ecosystem.",
  },
  {
    title: "Flagship",
    subtitle: "Full-scale vision",
    description:
      "The long-term flagship DOKO experience with expanded sports, immersive architecture, hardware systems, and community programming.",
  },
];

  const progressItems = [
    "Website",
    "Platform MVP",
    "QR Check-In",
    "Sport Log",
    "D'AMS V1",
    "Pop-Up",
    "D'AMS V2",
    "NAQI",
    "Pilot Facility",
    "Flagship",
  ];

  return (
    <main>
      <PageHero
        eyebrow="Founder / DOKO"
        title="DOKO"
        subtitle="Vision, build, action — reimagining how people experience sports."
      />

      <Section>
        <Container>
          <div className="doko-hero-media">
            <img src="/images/doko/doko-hero.png" alt="DOKO concept" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <SectionTitle title="The Vision" />

          <p className="statement-text">
            DOKO is my vision for a new kind of sports experience — one that
            blends community, immersive environments, wearable technology, live
            data, and real-world play into something people can feel, move
            through, and remember.
          </p>

          <div className="center-actions">
            <Button
              href="https://dokobattlefield.com/"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              Visit Official DOKO Website
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            title="Founder Journey"
            subtitle="The path from idea to platform, pop-up, hardware, and future facility."
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
            title="The Ecosystem"
            subtitle="How DOKO, NAQI, D'AMS, and the necklace connect."
          />

          <Grid columns={2}>
  {ecosystemItems.map((item) => (
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
            title="Pop-Up Experience"
            subtitle="The first public proof of the DOKO experience."
          />

          <div className="doko-visual-block">
            <img src="/images/doko/popup-layout.png" alt="DOKO pop-up layout" />
          </div>

          <div className="tech-stack tech-stack--center">
            <span className="tech-stack__pill">Detroit</span>
            <span className="tech-stack__pill">Fencing</span>
            <span className="tech-stack__pill">Karate / Jujutsu</span>
            <span className="tech-stack__pill">QR Check-In</span>
            <span className="tech-stack__pill">Sport Log</span>
            <span className="tech-stack__pill">DOKO Bar</span>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            title="Current Progress"
            subtitle="What has been built, tested, planned, and prepared."
          />

          <div className="progress-grid">
            {progressItems.map((item, index) => (
              <div
                className={
                  index < 5
                    ? "progress-item progress-item--done"
                    : index < 7
                    ? "progress-item progress-item--active"
                    : "progress-item"
                }
                key={item}
              >
                <span>
                  {index < 5 ? "✓" : index < 7 ? "◐" : "○"}
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <SectionTitle title="What’s Next" />

          <p className="statement-text">
            The next phase is finishing the pop-up, using that traction to build
            the first D'AMS hardware prototype, then expanding the ecosystem
            toward NAQI, the pilot facility, and eventually the flagship DOKO
            experience.
          </p>
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

export default Doko;