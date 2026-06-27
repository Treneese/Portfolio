import React from "react";
import PageHero from "../components/PageHero";
import Container from "../components/Container";
import Section from "../components/Section";
import Grid from "../components/Grid";
import CategoryCard from "../components/CategoryCard";

function Engineer() {
  return (
    <main className="section-page">
      <PageHero
        eyebrow="Engineer"
        title="Build systems."
        subtitle="Software, hardware, AI automation, and real-world tools."
      />

      <Section>
        <Container>
          <Grid columns={2}>
            <CategoryCard
              number="01"
              title="Software"
              subtitle="Full Stack Development"
              description="Full-stack applications, APIs, automation, and platforms."
              to="/engineer/software"
            />

            <CategoryCard
              number="02"
              title="Hardware"
              subtitle="Embedded Systems"
              description="Wearables, sensors, IoT systems, and D'AMS."
              to="/engineer/hardware"
            />
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

export default Engineer;