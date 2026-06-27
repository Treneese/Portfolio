import React, { useState } from "react";

import PageHero from "../../components/PageHero";
import Container from "../../components/Container";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import Grid from "../../components/Grid";
import CategoryCard from "../../components/CategoryCard";
import InfoModal from "../../components/InfoModal";
import CarouselModal from "../../components/CarouselModal";

function Hardware() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeCarousel, setActiveCarousel] = useState(null);


  const handleProjectClick = (project) => {
    if (project.slides) {
      setActiveCarousel(project);
    } else {
      setActiveModal(project);
    }
  };

  const projects = [
    {
      title: "D'AMS V1",
      subtitle: "Motion Safety Prototype",
      description:
        "A working sensor-based motion safety prototype using an ESP32 and MPU6050 to track movement, send telemetry to a Flask backend, and trigger NORMAL, SLOW, and STOP safety states.",
      image: "/images/hardware/dams-v1.png",
      website: "https://wokwi.com/projects/465907182655084545",
      github:
        "https://github.com/DOKO-Battlefield/DOKO_Battlefield/tree/main/dams-service",
      tech: ["ESP32", "MPU6050", "Flask", "Wokwi"],
    },
    {
  title: "D'AMS V2",
  subtitle: "Adaptive Motion System",
  description:
    "A next-generation wearable safety platform for DOKO, combining motion tracking, biometric monitoring, telemetry, and adaptive safety intelligence.",
  slides: [
    {
      title: "System Architecture",
      subtitle:
        "Operational and immersive ecosystem flow showing how D'AMS connects into the larger DOKO system.",
      image: "/images/hardware/dams-v2-architecture.png",
    },
    {
      title: "Hardware Design",
      subtitle:
        "Wearable pilot kit with wristbands, ankle bands, and a VR headset integration module.",
      image: "/images/hardware/dams-v2-render.png",
    },
  ],
  tech: [
    "Wearables",
    "Motion Tracking",
    "Heart Rate",
    "Telemetry",
    "AI",
    "IoT",
  ],
},
    {
      title: "DOKO Necklace",
      subtitle: "Participant Identity Device",
      description:
        "A wearable participant device concept for DOKO, designed to connect identity, check-in, participation tracking, and future game-system interactions.",
      image: "/images/hardware/necklace.png",
      website: "https://wokwi.com/projects/425958698147193857",
      github:
        "https://github.com/DOKO-Battlefield/DOKO_Battlefield/tree/main/necklace-service",
      tech: ["ESP32", "Wearable", "RFID"],
    },
  ];

  



  return (
    <main>
      <PageHero
        eyebrow="Engineer"
        title="Hardware"
        subtitle="Wearables, sensors, IoT prototypes, and physical systems built for immersive safety and participation."
      />

      <Section>
        <Container>
          <SectionTitle
            title="Projects"
            subtitle="Hardware concepts and prototypes connecting physical movement to digital systems."
          />

          <Grid columns={2}>
            {projects.map((project) => (
              <CategoryCard
                key={project.title}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <InfoModal
        item={activeModal}
        onClose={() => setActiveModal(null)}
      />

      <CarouselModal
        item={activeCarousel}
        onClose={() => setActiveCarousel(null)}
      />
    </main>
  );
}

export default Hardware;