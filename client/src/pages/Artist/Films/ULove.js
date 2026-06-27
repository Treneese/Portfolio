import React from "react";

import PageHero from "../../../components/PageHero";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import SectionTitle from "../../../components/SectionTitle";
import VideoPlayer from "../../../components/VideoPlayer";
import TechStack from "../../../components/TechStack";


function ULove() {
  return (
    <main>
      <PageHero
        eyebrow="Artist / Film"
        title="Unconditional Love"
        subtitle="A short film exploring love, sacrifice, and the bonds that shape our lives."
      />

      <Section>
        <Container>

          <SectionTitle
            title="Watch"
            subtitle="Official Short Film"
          />

          <VideoPlayer
  title="Unconditional Love"
  type="youtube"
  src="https://www.youtube.com/embed/WzRe9ixBqA8?si=0KVuMe6YCRcuEy4C"
/>

        </Container>
      </Section>

      <Section>
        <Container>

          <SectionTitle
            title="Project Details"
            subtitle="Production roles and information."
          />

          <TechStack
            align="center"
            items={[
              "Short Film",
              "Drama",
              "Writer",
              "Director",
              "Editor"
            ]}
          />

        </Container>
      </Section>

    </main>
  );
}

export default ULove;