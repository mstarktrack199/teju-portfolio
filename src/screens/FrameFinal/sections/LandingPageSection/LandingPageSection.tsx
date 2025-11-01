import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "About Me", leftPosition: "left-[81px]" },
  { label: "Projects", leftPosition: "left-[95px]" },
  { label: "Contact", leftPosition: "left-24" },
];

const socialLinks = [
  { label: "Be", icon: "/line-4.svg" },
  { label: "in", icon: null },
];

export const LandingPageSection = (): JSX.Element => {
  return (
    <section className="w-full h-[982px] relative bg-[#203432] overflow-hidden">
      <div className="absolute top-[257px] left-[629px] w-[359px] h-[1133px] bg-[#f4d6db17] rounded-[179.5px/566.5px] blur-[58.3px]" />

      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Knitwear background"
        src="/img-2191-1.png"
      />

      <nav className="absolute top-[577px] left-[102px] flex flex-col gap-[25px]">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-[337px] h-[85px] relative p-0 hover:bg-transparent group"
          >
            <img
              className="absolute top-0 left-0 w-[335px] h-[85px]"
              alt=""
              src={`/rectangle-${index + 5}.svg`}
            />
            <span
              className={`absolute top-[25px] ${item.leftPosition} [font-family:'Montserrat',Helvetica] font-semibold text-[#b0c29c] text-[28px] text-right tracking-[0] leading-[normal] group-hover:opacity-80 transition-opacity`}
            >
              {item.label}
            </span>
          </Button>
        ))}
      </nav>

      <aside className="absolute top-[693px] left-[1221px] w-[189px] h-[189px]">
        <div className="flex gap-[13px]">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-[87px] h-[87px] relative p-0 hover:bg-transparent group"
            >
              <img
                className="absolute top-0 left-0 w-[87px] h-[87px]"
                alt=""
                src={`/rectangle-${index + 1}.svg`}
              />
              <span className="absolute top-[calc(50.00%_-_16px)] left-[calc(50.00%_-_22px)] [font-family:'Montserrat',Helvetica] font-bold text-[#b0c29c] text-[28px] text-right tracking-[0] leading-[normal] group-hover:opacity-80 transition-opacity">
                {link.label}
              </span>
              {link.icon && (
                <img
                  className="absolute top-[calc(50.00%_-_8px)] left-[calc(50.00%_+_4px)] w-3 h-0.5"
                  alt=""
                  src={link.icon}
                />
              )}
            </Button>
          ))}
        </div>

        <Button
          variant="ghost"
          className="absolute top-[102px] left-0 w-[191px] h-[87px] p-0 hover:bg-transparent group"
        >
          <img
            className="absolute top-0 left-0 w-[189px] h-[87px]"
            alt=""
            src="/rectangle-3.svg"
          />
          <span className="absolute top-[27px] left-[35px] [font-family:'Montserrat',Helvetica] font-semibold text-[#b0c29c] text-[28px] text-right tracking-[0] leading-[normal] group-hover:opacity-80 transition-opacity">
            Resume
          </span>
        </Button>
      </aside>

      <div className="absolute top-[335px] left-[1205px] [font-family:'Michroma',Helvetica] font-normal text-[#b0c29c] text-4xl text-right tracking-[0] leading-[normal]">
        Knitwear
        <br />
        Designer
      </div>
    </section>
  );
};
