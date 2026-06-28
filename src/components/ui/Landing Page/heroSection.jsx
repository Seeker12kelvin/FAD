import heroSectionPic1 from "../../../assets/images/heroSectionPic1.jpg";

const HeroSection = () => {
  const list = [
    {
      id: 1,
      header: "Redefining Black Elegance in Contemporary Fashion",
      desc: "How a new generation of creatives is rewriting the rules of representation.",
      owner: "09 January 2026",
    },
    {
      id: 2,
      header: "Fashion as Ritual: What African Ceremonies Teach Modern Design",
      desc: "From weddings to festivals, culture remains fashion’s greatest muse.......",
      owner: "09 January 2026",
    },
    {
      id: 3,
      header: "Style as Protest: When Clothing Becomes a Voice",
      desc: "The social power of fashion across African cities.",
      owner: "09 January 2026",
    },
    {
      id: 4,
      header: "The Rise of Afro-Centric Beauty Brands",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in......",
      owner: "09 January 2026",
    },
    {
      id: 5,
      header: "Style as Protest: When Clothing Becomes a Voice",
      desc: "The social power of fashion across African cities.",
      owner: "09 January 2026",
    },
  ];

  return (
    <section className="h-fit max-[481px]:px-3 max-[481px]:py-5 px-10 py-6 gap-2.5">
      <div className="min-h-202.25 h-fit flex max-[481px]:flex-col gap-6 max-[481px]:pb-10 pb-16 border-[#322418] border-b-[1.5px]">
        <div className="border-[#5E4630] border-[0.5px] max-[481px]:hidden" />

        <div className="max-[481px]:gap-4 max-w-238 h-full flex flex-col justify-start gap-2 pt-2">
          <h1 className="max-[481px]:text-2xl max-[481px]:tracking-[-2%] text-5xl font-ivy font-medium w-fit tracking-[-0.079%] leading-[100%]">
            From Representation to Ownership: Why African Creatives are no
            Longer Settling for Just Visibility
          </h1>

          {/* <h1 className="max-[481px]:text-2xl max-[481px]:hidden max-[481px]:leading-[100%] max-[481px]:tracking-[-2%] text-5xl font-ivy font-medium w-full tracking-[-0.8%] leading-[100%]">
            Creatives are no Longer Settling for Just Visibility
          </h1> */}

          <div className="max-h-168.25 overflow-hidden">
            <img
              src={heroSectionPic1}
              alt="A man sitting and posing for a picture"
              className="object-cover w-full -mt-20"
            />
          </div>

          <p className="font-normal font-helvetica max-[481px]:text-[16px] text-lg leading-7 tracking-[-1px]">
            <span className="uppercase font-medium max-[481px]:text-lg max-[481px]:tracking-[-1%] max-[481px]:leading-6">
              TODAY IN FOCUS:
            </span>{" "}
            From Lagos to Paris, African designers, models, and tastemakers are
            reshaping how the world defines style, identity, and luxury.
          </p>
        </div>

        <div className="border-[#5E4630] border-[0.5px]" />

        <div className="flex flex-col gap-6 min-[481px]:max-w-84">
          <div className="border-[#322418] border-b-[1.5px] pb-2 max-[481px]:w-full">
            <h2 className="font-bold font-helvetica leading-[100%]">
              HEADLINES
            </h2>
          </div>

          <div className="flex flex-col max-[481px]:gap-8">
            {list.map((data) => (
              <div
                key={data.id}
                className={`flex flex-col gap-4 border-[#C7C1C1] border-b-[0.3px] pb-1`}
              >
                <div>
                  <h3 className="text-[#252324] max-[481px]:text-lg text-xl leading-6.5 font-helvetica font-medium">
                    {data.header}
                  </h3>

                  <p className="text-[#6C6263] font-helvetica font-light text-sm leading-6">
                    {data.desc}
                  </p>
                </div>

                <p className="text-[#A69F9E] font-helvetica font-normal text-sm leading-6 flex items-center gap-2">
                  {data.owner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
