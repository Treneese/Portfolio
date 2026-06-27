import React, { useState } from "react";

import PageHero from "../../components/PageHero";
import Container from "../../components/Container";
import Section from "../../components/Section";
import CategoryCard from "../../components/CategoryCard";
import SectionTitle from "../../components//SectionTitle";
import MediaGallery from "../../components//MediaGallery";

function FineArt() {
  const artworks = [
    {
      title: "Mi Amor",
      image: "/images/art/painting-1.png",
      caption: "Paintings",
    },
    {
      title: "Her World",
      image: "/images/art/painting-2.png",
      caption: "Paintings",
    },
    {
      title: "Zodiac/Artist",
      image: "/images/art/painting-3.png",
      caption: "Paintings",
    },
    {
      title: "Heart&Soul",
      image: "/images/art/painting-4.png",
      caption: "Paintings",
    },
    {
      title: "Findings",
      image: "/images/art/painting-5.png",
      caption: "Paintings",
    },
    {
      title: "Zodiac Aries",
      image: "/images/art/painting-6.png",
      caption: "Paintings",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeArtwork = artworks[activeIndex];

  const nextArtwork = () => {
    setActiveIndex((prev) => (prev + 1) % artworks.length);
  };

  const prevArtwork = () => {
    setActiveIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  return (
    <main>
      <PageHero
        eyebrow="Artist / Fine Art"
        title="Fine Art"
        subtitle="Paintings, collections, mixed media, and visual studies."
      />

      <Section>
        <Container>
          <div className="featured-art">
            <button onClick={prevArtwork} className="carousel-button">
              ‹
            </button>

            <div className="featured-art__image">
              <img src={activeArtwork.image} alt={activeArtwork.title} />
            </div>

            <button onClick={nextArtwork} className="carousel-button">
              ›
            </button>
          </div>

          <div className="carousel-dots">
            {artworks.map((artwork, index) => (
              <button
                key={artwork.title}
                onClick={() => setActiveIndex(index)}
                className={activeIndex === index ? "dot active" : "dot"}
                aria-label={`View ${artwork.title}`}
              />
            ))}
          </div>

          <div className="featured-art__caption">
            <h2>{activeArtwork.title}</h2>
            <p>{activeArtwork.caption}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            align="center"
            title="Selected Works"
            subtitle="A visual archive of paintings, collections, and studies."
          />

          <MediaGallery items={artworks} columns="three" />
        </Container>
      </Section>
    </main>
  );
}

export default FineArt;