import React from "react";

const colorSwatches = [
  {
    top: "top-[177px]",
    name: "Burnt Brick",
    code: "18-1350 TCX",
    color: "#a44e3b",
  },
  {
    top: "top-72",
    name: "Khaki",
    code: "16-0726 TCX",
    color: "#a1905f",
  },
  {
    top: "top-[400px]",
    name: "Coconut Milk",
    code: "11-0608 TCX",
    color: "#f0ede5",
  },
  {
    top: "top-[513px]",
    name: "Ensign Blue",
    code: "19-4026 TCX",
    color: "#384c68",
  },
  {
    top: "top-[626px]",
    name: "Pineneedle",
    code: "19-5920 TCX",
    color: "#374f47",
  },
  {
    top: "top-[738px]",
    name: "Desert Sage",
    code: "16-0110 TCX",
    color: "#a3ad9a",
  },
];

export const InternshipExperienceSection = (): JSX.Element => {
  return (
    <section className="w-screen h-screen relative bg-[#f0ede5] overflow-hidden">
      <div className="relative w-full h-screen">
        <div className="absolute top-[976px] left-[959px] w-[589px] h-[466px]">
          <img
            className="absolute w-full h-full top-0 left-0"
            alt="Untitled HFUIH"
            src="/untitled-hfuih-1.png"
          />
        </div>

        <img
          className="absolute top-0 left-0 w-full h-[1107px]"
          alt="Background"
          src="/background.png"
        />

        <img
          className="absolute top-[110px] left-[274px] w-[999px] h-[243px]"
          alt="Wrangler alone"
          src="/wrangler-alone.png"
        />

        <img
          className="absolute top-[756px] left-[599px] w-[349px] h-[113px]"
          alt="Wrangler alone"
          src="/wrangler-alone-1.png"
        />

        <div className="absolute top-[265px] left-[565px] w-[418px] h-[567px] bg-[#a2915f24] rounded-[209px/283.5px] blur-[60.7px]" />

        <img
          className="absolute top-[202px] left-[556px] w-[436px] h-[645px]"
          alt="Img"
          src="/img-2172-1.png"
        />

        <img
          className="absolute top-[55px] left-[524px] w-[463px] h-[60px]"
          alt="Print design project"
          src="/print-design-project.png"
        />

        <div className="absolute top-[776px] left-[102px] w-[489px] h-[155px] flex flex-col items-center gap-[9px]">
          <h2 className="ml-[-232px] h-[42px] w-[257px] [font-family:'Albert_Sans',Helvetica] font-bold text-[#f0ede5] text-[35px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Brand Direction
          </h2>

          <p className="-ml-1 h-[104px] w-[485px] [font-family:'Albert_Sans',Helvetica] font-normal text-[#f0ede5] text-[22px] tracking-[0] leading-[normal]">
            <span className="font-bold">
              Built for the Bold.
              <br />
            </span>

            <span className="italic">
              Wrangler stands for more than denim Every piece is made to move
              with you - from the wild outdoors to the urban edge.
            </span>
          </p>
        </div>

        <div className="absolute top-[1138px] left-[102px] w-[903px] h-[197px] flex flex-col items-center gap-2.5">
          <h2 className="ml-[-482.2px] h-[42px] w-[420.77px] [font-family:'Albert_Sans',Helvetica] font-bold text-[#271813] text-[35px] tracking-[0] leading-[normal]">
            Concept Note
          </h2>

          <p className="-ml-1 h-[145px] w-[899px] [font-family:'Albert_Sans',Helvetica] font-normal text-transparent text-2xl tracking-[0] leading-[normal]">
            <span className="font-bold text-[#271813]">
              The Sunset Riders
              <br />
            </span>

            <span className="text-[#271813]">
              A menswear graphic tee collection for SS26 inspired by the
              riders&apos; slow, easy days spent unwinding at roadside motels.
              Away from the rush, it captures the calm between journeys — lazy
              afternoons, faded motel signs, and the free spirit of the open
              road.
            </span>
          </p>
        </div>

        <div className="absolute top-[776px] left-[925px] w-[489px] h-[181px] flex flex-col items-center gap-[9px]">
          <h2 className="ml-[201px] h-[42px] w-[280px] [font-family:'Albert_Sans',Helvetica] font-bold text-[#f0ede5] text-[35px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            Brand Aesthetics
          </h2>

          <p className="-ml-1 h-[130px] w-[485px] [font-family:'Albert_Sans',Helvetica] font-normal text-[#f0ede5] text-[22px] text-right tracking-[0] leading-[normal]">
            <span className="font-bold">
              Raw. Real. Timeless.
              <br />
            </span>

            <span className="italic">
              Captures the essence of the wild frontier - where denim meets
              dirt, dust, and freedom. With sun-faded blues, sturdy textures,
              and vintage-inspired finishes.
            </span>
          </p>
        </div>

        <img
          className="absolute top-[1489px] left-[89px] w-[1334px] h-[889px] object-cover"
          alt="Img"
          src="/img-2204.png"
        />

        <div className="absolute top-[2432px] left-[-135px] w-[1681px] h-[1000px]">
          <div className="absolute top-0 left-[1233px] w-[448px] h-[1000px] bg-[#271813]" />

          <img
            className="absolute top-0 left-[135px] w-[1280px] h-[1000px] object-cover"
            alt="Portfolio"
            src="/portfolio--12--1.png"
          />

          {colorSwatches.map((swatch, index) => (
            <React.Fragment key={index}>
              <img
                className={`${swatch.top} absolute left-[1233px] w-48 h-[78px]`}
                alt="Subtract"
                src="/subtract.svg"
              />
            </React.Fragment>
          ))}

          <div className="absolute top-[198px] left-[1443px] w-[89px] h-[34px]">
            <div className="absolute top-[18px] left-[calc(50.00%_-_44px)] w-[78px] [font-family:'Albert_Sans',Helvetica] font-normal text-[#a44e3b] text-[13px] tracking-[0] leading-[normal]">
              18-1350 TCX
            </div>

            <div className="absolute top-0 left-[calc(50.00%_-_44px)] [font-family:'Albert_Sans',Helvetica] font-bold text-[#a44e3b] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Burnt Brick
            </div>
          </div>

          <div className="absolute top-[310px] left-[1448px] w-[89px] h-[34px]">
            <div className="absolute top-[18px] left-[calc(50.00%_-_44px)] [font-family:'Albert_Sans',Helvetica] font-normal text-[#a1905f] text-[13px] tracking-[0] leading-[normal]">
              16-0726 TCX
            </div>

            <div className="absolute top-0 left-[calc(50.00%_-_44px)] w-[85px] [font-family:'Albert_Sans',Helvetica] font-bold text-[#a1905f] text-base tracking-[0] leading-[normal]">
              Khaki
            </div>
          </div>

          <div className="absolute top-[423px] left-[1443px] w-[104px] h-[34px]">
            <div className="absolute top-[18px] left-[calc(50.00%_-_52px)] [font-family:'Albert_Sans',Helvetica] font-normal text-[#f0ede5] text-[13px] tracking-[0] leading-[normal]">
              11-0608 TCX
            </div>

            <div className="absolute top-0 left-[calc(50.00%_-_52px)] [font-family:'Albert_Sans',Helvetica] font-bold text-[#f0ede5] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Coconut Milk
            </div>
          </div>

          <div className="absolute top-[535px] left-[1443px] w-[91px] h-[34px]">
            <div className="absolute top-[18px] left-[calc(50.00%_-_46px)] [font-family:'Albert_Sans',Helvetica] font-normal text-[#384c68] text-[13px] tracking-[0] leading-[normal]">
              19-4026 TCX
            </div>

            <div className="absolute top-0 left-[calc(50.00%_-_46px)] [font-family:'Albert_Sans',Helvetica] font-bold text-[#384c68] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Ensign Blue
            </div>
          </div>

          <div className="absolute top-[648px] left-[1443px] w-[87px] h-[34px]">
            <div className="absolute top-[18px] left-[calc(50.00%_-_44px)] [font-family:'Albert_Sans',Helvetica] font-normal text-[#374f47] text-[13px] tracking-[0] leading-[normal]">
              19-5920 TCX
            </div>

            <div className="absolute top-0 left-[calc(50.00%_-_44px)] [font-family:'Albert_Sans',Helvetica] font-bold text-[#374f47] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Pineneedle
            </div>
          </div>

          <div className="absolute top-[760px] left-[1443px] w-[95px] h-[34px]">
            <div className="absolute top-[18px] left-[calc(50.00%_-_48px)] [font-family:'Albert_Sans',Helvetica] font-normal text-[#a3ad9a] text-[13px] tracking-[0] leading-[normal]">
              16-0110 TCX
            </div>

            <div className="absolute top-0 left-[calc(50.00%_-_48px)] [font-family:'Albert_Sans',Helvetica] font-bold text-[#a3ad9a] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Desert Sage
            </div>
          </div>
        </div>

        <p className="absolute top-[3371px] left-[calc(50.00%_-_47px)] [font-family:'Albert_Sans',Helvetica] font-medium text-[#f0ede58f] text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Graphic Tee | SS - 26 | Mood Board
        </p>

        <div className="absolute top-[3395px] left-[-21px] w-[1567px] h-[748px] bg-[#271813]" />

        <img
          className="absolute top-[3641px] left-0 w-full h-[499px]"
          alt="Adobe express file"
          src="/adobe-express---file---2025-10-31t214542-804-1.png"
        />

        <div className="absolute top-[3567px] left-[334px] w-[852px] h-[417px] bg-[#f0ede54a] rotate-[-6.61deg] blur-[29.65px]" />

        <div className="absolute top-[3452px] left-80 w-[876px] h-[584px] rotate-[-7.98deg]">
          <img
            className="absolute w-[108.29%] h-[119.85%] top-[-9.93%] left-[-4.14%] rotate-[7.98deg] object-cover"
            alt="Img"
            src="/img-2198-1.png"
          />
        </div>

        <p className="absolute top-[4163px] left-[calc(50.00%_-_195px)] [font-family:'Albert_Sans',Helvetica] font-semibold text-[#49080a] text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Athleisure | AW 25-26 | Graphic Art Work
        </p>

        <img
          className="absolute top-[4214px] left-0 w-full h-[955px]"
          alt="Element"
          src="/13-1.png"
        />

        <img
          className="absolute top-[5169px] left-0 w-full h-[914px]"
          alt="Element"
          src="/14-1.png"
        />
      </div>
    </section>
  );
};
