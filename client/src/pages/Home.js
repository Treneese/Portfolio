// src/components/Home.js
import React from "react";
import PageHero from "../components/PageHero";
import Container from "../components/Container";
import Section from "../components/Section";
import Grid from "../components/Grid";
import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <main className="home-page">
      <PageHero
        eyebrow="Software Engineer • Founder • Artist"
        title="Treneese Johnson"
        subtitle="Building systems, stories, and worlds."
      />

      <Section>
        <Container>
          <Grid columns={3}>
            <CategoryCard
              number="01"
              title="Engineer"
              description="Software, AI automation, hardware, and systems."
              to="/engineer"
            />

            <CategoryCard
              number="02"
              title="Founder"
              description="DOKO, immersive sports, and future ventures."
              to="/founder"
            />

            <CategoryCard
              number="03"
              title="Artist"
              description="Fine art, short film, and screenwriting."
              to="/artist"
            />
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

export default Home;