import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", active: false },
  { label: "About", active: true },
  { label: "Projects", active: false },
  { label: "Contact", active: false },
];

const softwareSkills = [
  { src: "/indesign.png", alt: "Indesign", position: "top-0 left-0" },
  { src: "/procreate.png", alt: "Procreate", position: "top-0 left-20" },
  {
    src: "/illustrator.png",
    alt: "Illustrator",
    position: "top-[79px] left-0",
  },
  { src: "/figma.png", alt: "Figma", position: "top-20 left-20" },
  { src: "/photoshop.png", alt: "Photoshop", position: "top-[159px] left-0" },
];

export const AboutMeSection = (): JSX.Element => {
  return (
    <section className="w-screen h-screen relative bg-[#203432] py-[69px] px-[77px] overflow-auto">
      <nav className="flex items-center justify-between mb-[102px]">
        <div className="flex items-center gap-[75px]">
          {navigationItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <button
                className={`[font-family:'Montserrat',Helvetica] font-semibold text-[32px] tracking-[0] leading-[normal] ${
                  item.active ? "text-[#f3d7dd]" : "text-[#f3d7dd80]"
                } hover:text-[#f3d7dd] transition-colors`}
              >
                {item.label}
              </button>
              {index < navigationItems.length - 1 && (
                <span className="[font-family:'Montserrat',Helvetica] font-semibold text-[#f3d7dd80] text-[32px]">
                  .
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      <div className="flex gap-[141px]">
        <div className="flex flex-col items-center relative">
          <div className="relative mb-[50px]">
            <div className="w-[235px] h-[42px] rounded-[20px] border border-solid border-[#ffffff4c] blur-[4.7px] absolute top-0 left-0" />
            <div className="w-[235px] h-[42px] rounded-[20px] border-2 border-solid border-[#f6e8ce80] shadow-[0px_4px_5.7px_#000000a1] flex items-center justify-center relative">
              <div className="[font-family:'Montserrat',Helvetica] font-medium text-[#b0c29c] text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Software Skills
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              className="w-[235px] h-[796px]"
              alt="Avatar with glow"
              src="/avatar-with-glow.png"
            />

            <div className="absolute top-[219px] left-[10px] w-[215px] h-[282px]">
              <img
                className="absolute inset-0 w-full h-full"
                alt="Rectangle"
                src="/rectangle-7-1.svg"
              />

              <div className="absolute top-[33px] left-[42px] w-[130px] h-52">
                {softwareSkills.map((skill, index) => (
                  <img
                    key={index}
                    className={`absolute w-[50px] h-[49px] ${
                      skill.alt === "Procreate" ||
                      skill.alt === "Illustrator" ||
                      skill.alt === "Figma"
                        ? "h-[50px]"
                        : ""
                    } ${skill.position} object-cover`}
                    alt={skill.alt}
                    src={skill.src}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col pt-[50px]">
          <div className="relative mb-[89px]">
            <img
              className="absolute top-[-73px] left-[-140px] w-[63px] h-[57px]"
              alt="Niftnid"
              src="/niftnid-1.png"
            />

            <div className="absolute top-[-89px] left-[-210px] w-[157px] h-[83px] bg-[#20343299] rounded-[15px]" />

            <div className="[font-family:'Londrina_Solid',Helvetica] font-normal text-[40px] tracking-[0] leading-[normal]">
              <span className="text-[#b0c29c]">I am </span>
              <span className="text-[#f6e8ce]">Tejashwini</span>
              <span className="text-[#b0c29c]">
                , an enthusiastic and driven{" "}
              </span>
              <span className="text-[#f6e8ce]">
                Knitwear Designer with a solid foundation in design process
              </span>
              <span className="text-[#b0c29c]">
                . Possesses practical experience{" "}
              </span>
              <span className="text-[#f6e8ce]">
                with print development, fabric selection, and practical designs
              </span>
              <span className="text-[#b0c29c]">
                {" "}
                and a strong desire to learn and contribute in a professional
                setting.
              </span>
            </div>
          </div>

          <div className="[font-family:'Londrina_Solid',Helvetica] font-normal text-[#b0c29c] text-[28px] tracking-[0] leading-[normal] mb-[83px]">
            WORK EXPERIENCE : <br />
            worked as an intern at Ace Turtle under the brand Wrangler, for the
            duration of 2 months.
          </div>

          <div className="relative self-start">
            <div className="w-[421px] h-[63px] bg-[#f3d7dd57] rounded-[54px] border border-solid border-[#bf697842] blur-[4.7px] absolute top-0 left-0" />
            <Button className="w-[421px] h-[63px] bg-[#f3d7dd] rounded-[54px] border-[2.5px] border-solid border-[#bf697842] [font-family:'Montserrat',Helvetica] font-semibold text-[#203432] text-[32px] text-center tracking-[0] leading-[normal] hover:bg-[#f3d7dd]/90 relative">
              Explore Projects!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
