import React, { useState } from "react";

import Grid from "../../../components/Grid";
import CategoryCard from "../../../components/CategoryCard";
import PageHero from "../../../components/PageHero";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";
import VideoPlayer from "../../../components/VideoPlayer";
import InfoModal from "../../../components/InfoModal";

function Zanura() {
  const [activeModal, setActiveModal] = useState(null);

  const worldItems = [
    {
      title: "Zanura",
      subtitle: "Hidden Nation",
      description:
        "A protected land built around sacred power, family legacy, and political tension.",
      image: "/images/zanura/zanura.png",
    },
    {
      title: "Adeora",
      subtitle: "Origin Land",
      description:
        "The original Noorite land, carrying the history that still shapes Zanura's future.",
      image: "/images/zanura/adeora.png",
    },
    {
      title: "Ajora",
      subtitle: "Old Land",
      description:
        "A culturally rich land connected to Amari’s origin and the larger world beyond Zanura.",
      image: "/images/zanura/ajora.png",
    },
  ];

  const powerItems = [
    {
      title: "Noorite",
      subtitle: "Sacred Power",
      description:
        "A white pearl-like energy source tied to the land, healing, protection, and spiritual legacy.",
      image: "/images/zanura/noorite.png",
    },
    {
      title: "Aurava",
      subtitle: "Man-Made Power",
      description:
        "A gold, unstable force created outside the natural order, accelerating conflict and collapse.",
      image: "/images/zanura/aurava.png",
    },
  ];

  const characterItems = [
  {
    title: "Aje",
    subtitle: "The Future Protector",
    description:
      "A gifted young man battling a mysterious illness while discovering the responsibility he may one day carry as Zanura’s future protector.",
  },
  {
    title: "Chike",
    subtitle: "The Protector",
    description:
      "A brilliant healer, engineer, and guardian whose past loss drives him to protect Aje, his family, and the future of Zanura.",
  },
  {
    title: "Ala",
    subtitle: "The Artist",
    description:
      "A gifted artist with a compassionate heart, caught between family, survival, and a love that grows during Zanura’s collapse.",
  },
  {
    title: "Shango",
    subtitle: "The Muslim Heir",
    description:
      "Marcel’s son and heir to the Muslim leadership of Zanura, descended from the nation’s founding bloodline.",
  },
  {
    title: "Jabari",
    subtitle: "The Christian Heir",
    description:
      "Bishop Ayo’s son, Shango’s closest friend, and Ala’s star-crossed love, torn between loyalty, faith, and duty.",
  },
  {
    title: "Ejike",
    subtitle: "The AA Heir",
    description:
      "Amari’s son and heir to the AA people, carrying the weight of legacy, politics, and an uncertain future.",
  },
  {
    title: "Amari / Sekou",
    subtitle: "The Bridge Between Worlds",
    description:
      "A ruler from Ajora whose past connects two worlds and whose choices shape Zanura’s fragile future.",
  },
  {
    title: "Marcel",
    subtitle: "The Muslim Ruler",
    description:
      "A respected ruler and descendant of Zanura’s founders, trying to guide his people through a collapsing power system.",
  },
  {
    title: "Anita",
    subtitle: "The Mother",
    description:
      "A devoted mother holding her family together while fear, grief, and political pressure close in around them.",
  },
  {
    title: "Malik",
    subtitle: "The Doctor",
    description:
      "Aje’s doctor and trusted ally, whose care for the family later grows into deeper feelings for Ala.",
  },
  {
    title: "Idris",
    subtitle: "The Revolutionary",
    description:
      "A political force pushing against Zanura’s old order as fear, control, and survival collide.",
  },
  {
    title: "Bishop Ayo",
    subtitle: "The Christian Ruler",
    description:
      "Jabari’s father and ruler of Zanura’s Christian people, striving to protect his community as the nation fractures.",
  },
];

  const developmentItems = [
    "Screenplay Rewrite",
    "Competition Feedback",
    "Concept Preview",
    "Worldbuilding",
    "Character Development",
  ];

  return (
    <main>
      <PageHero
        eyebrow="Artist / Film & Screenwriting / Zanura"
        title="Zanura"
        subtitle="A fantasy screenplay and cinematic world in development."
      />

      <Section>
        <Container>
          <SectionTitle
            title="Preview"
            subtitle="A visual glimpse into the world, atmosphere, and mystery of Zanura."
          />

          <VideoPlayer
            title="Zanura Preview"
            type="video"
            src="/videos/zanura-preview.mov"
            poster="/images/zanura/poster.png"
          />
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <SectionTitle title="Logline" />

          <p className="statement-text">
  As a sacred power system begins collapsing inside a hidden nation, a future
  protector and the uncle who once lost everything must fight to save their
  family, their people, and the future of their world.
</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            title="World"
            subtitle="The lands, forces, and histories shaping the story."
          />

          <Grid columns={3}>
            {worldItems.map((item) => (
              <CategoryCard
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                onClick={() => setActiveModal(item)}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            title="Power System"
            subtitle="Sacred energy, man-made force, and the collapse that threatens the world."
          />

          <Grid columns={2}>
            {powerItems.map((item) => (
              <CategoryCard
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                onClick={() => setActiveModal(item)}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            title="Characters"
            subtitle="A family, a nation, and the people caught between duty, grief, love, and survival."
          />

          <div className="character-card-grid">
  {characterItems.map((character) => (
    <button
      key={character.title}
      className="character-card"
      onClick={() => setActiveModal(character)}
    >
      <span className="character-card__subtitle">{character.subtitle}</span>
      <h3>{character.title}</h3>
      <p>{character.description}</p>
    </button>
  ))}
</div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            title="Development"
            subtitle="Current stage of the screenplay and cinematic world."
          />

          <div className="tech-stack tech-stack--center">
            {developmentItems.map((item) => (
              <span className="tech-stack__pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <InfoModal item={activeModal} onClose={() => setActiveModal(null)} />
    </main>
  );
}

export default Zanura;