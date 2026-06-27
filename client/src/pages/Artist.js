import React from "react";
import PageHero from "../components/PageHero";
import Container from "../components/Container";
import Section from "../components/Section";
import Grid from "../components/Grid";
import CategoryCard from "../components/CategoryCard";

function Artist() {
  return (
    <main className="section-page">
      <PageHero
        eyebrow="Artist"
        title="Build worlds."
        subtitle="Fine art, film, screenwriting, and visual storytelling."
      />

      <Section>
        <Container>
          <Grid columns={2}>
            <CategoryCard
              number="01"
              title="Fine Art"
              subtitle="Visual Work"
              description="Paintings, collections, mixed media, and visual studies."
              to="/artist/fine-art"
            />

            <CategoryCard
              number="02"
              title="Film & Screenwriting"
              subtitle="Story Worlds"
              description="Zanura, screenplays, worldbuilding, and cinematic development."
              to="/artist/film"
            />
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

export default Artist;