import React from "react";


import CategoryCard from "../../components/CategoryCard";
import PageHero from "../../components/PageHero";
import Container from "../../components/Container";
import Section from "../../components/Section";
import Grid from "../../components/Grid";


function Film() {
  return (
    <main>
      <PageHero
        eyebrow="Artist / Film & Screenwriting"
        title="Film & Screenwriting"
        subtitle="Short films, screenplays, and worldbuilding."
      />

      <Section>
        <Container>
          <Grid columns={2}>
            <CategoryCard
              number="01"
              title="Unconditional Love"
              subtitle="Short Film"
              description="A drama exploring love, sacrifice, and the bonds that shape our lives."
              to="/artist/film/unconditional-love"
            />

            <CategoryCard
              number="02"
              title="Zanura"
              subtitle="Fantasy Screenplay"
              description="An original cinematic universe featuring worldbuilding, mythology, and a collapsing sacred power system."
              to="/artist/film/zanura"
            />
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

export default Film;