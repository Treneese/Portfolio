import React from "react";
import PageHero from "../components/PageHero";
import Container from "../components/Container";
import Section from "../components/Section";
import Grid from "../components/Grid";
import CategoryCard from "../components/CategoryCard";

function Founder() {
  return (
    <main className="section-page">
      <PageHero
        eyebrow="Founder"
        title="Build companies."
        subtitle="Immersive technology, sports, community, and future ventures."
      />

      <Section>
        <Container>
          <Grid columns={2}>
            <CategoryCard
              number="01"
              title="DOKO"
              subtitle="Immersive Sports"
              description="Immersive sports, events, technology, and performance systems."
              to="/founder/doko"
            />

            <CategoryCard
              number="02"
              title="ELOS"
              subtitle="Creative Technology"
              description="Creative technology, future products, and experience design."
              to="/founder/elos"
            />
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

export default Founder;