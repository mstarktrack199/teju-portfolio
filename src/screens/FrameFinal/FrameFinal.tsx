import React from "react";
import { AboutMeSection } from "./sections/AboutMeSection";
import { InternshipExperienceSection } from "./sections/InternshipExperienceSection";
import { LandingPageSection } from "./sections/LandingPageSection";
import { PortfolioSection } from "./sections/PortfolioSection";

export const FrameFinal = (): JSX.Element => {
  const portfolioImages = [
    {
      src: "/37-1.png",
      alt: "Element",
    },
    {
      src: "/38-1.png",
      alt: "Element",
    },
    {
      src: "/39-1.png",
      alt: "Element",
    },
    {
      src: "/40-1.png",
      alt: "Element",
    },
  ];

  return (
    <div className="w-full min-w-[1555px] flex flex-col">
      <LandingPageSection />
      <AboutMeSection />
      <InternshipExperienceSection />
      <PortfolioSection />
      <section className="w-full flex justify-center bg-[#faefe4]">
        <div className="w-full max-w-[1512px] flex flex-col">
          {portfolioImages.map((image, index) => (
            <img
              key={`portfolio-image-${index}`}
              className="w-full h-auto object-cover"
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
