import fieldNoteSectionPic1 from "../../../assets/images/fieldNoteSectionPic1.jpg";
import fieldNoteSectionPic2 from "../../../assets/images/fieldNoteSectionPic2.jpg";
import fieldNoteSectionPic3 from "../../../assets/images/fieldNoteSectionPic3.jpg";
import fieldNoteSectionPic4 from "../../../assets/images/fieldNoteSectionPic4.jpg";
import fieldNoteSectionPic5 from "../../../assets/images/fieldNoteSectionPic5.jpg";

const HeroSection4 = () => {
  const list = [
    {
      id: 1,
      img: fieldNoteSectionPic1,
      topic: "Event Coverage",
      header: "Inside Accra’s Creative Pop-Up Scene",
      desc: "A look at how small events are building big platforms for emerging designers.",
    },
    {
      id: 2,
      img: fieldNoteSectionPic2,
      topic: "Ceremony & Culture",
      header: "Dressed for Meaning: The Power of Fashion in African Ceremonies",
      desc: "How weddings, festivals, and rites of passage continue to inspire modern design.",
    },
    {
      id: 3,
      img: fieldNoteSectionPic3,
      topic: "Informal Markets",
      header: "Where Trends Begin: Life Inside Africa’s Fashion Markets",
      desc: "From Balogun to Kantamanto, we explore the places where style is born before it reaches the runway.",
    },
    {
      id: 4,
      img: fieldNoteSectionPic4,
      topic: "Community Voices",
      header: "Young Creatives, Real Stories",
      desc: "Photographers, stylists, and models share what building in Africa’s fashion space really looks like.",
    },
  ];

  return (
    <section className="flex flex-col gap-10 max-[481px]:px-3 max-[481px]:py-5 p-10">
      <h2 className="font-helvetica font-medium leading-[100%] tracking-[-1%] text-[#322418] border-b-2 border-[#322418] pb-1 w-fit">
        FIELD NOTES
      </h2>

      <div className="flex max-[481px]:flex-col max-[481px]:gap-10 min-[481px]:gap-6 min-h-211.5 h-full">
        <div className="max-w-225.5 w-full grid grid-cols-2 grid-rows-2 gap-10 ">
          {list.map((data) => (
            <div
              key={data.id}
              className="max-w-109.5 w-fit min-[481px]:min-h-92.25 h-fit flex flex-col gap-4"
            >
              <img
                src={data.img}
                alt=""
                className="w-full max-[481px]:min-w-40.5 max-[481px]:h-34 min-[481px]:h-66 object-cover object-top"
              />

              <div className="flex flex-col gap-1">
                <h3 className="font-bold font-helvetica leading-[100%] uppercase max-[481px]:text-[10px] text-[#8D8382] text-xs">
                  {data.topic}
                </h3>

                <h4 className="text-[#000000] max-[481px]:text-[16px] text-xl max-[481px]:leading-5.5 leading-6.5 tracking-[-1px] font-helvetica font-medium">
                  {data.header}
                </h4>

                <p className="text-[#000000] font-helvetica font-light max-[481px]:text-xs text-sm leading-5">
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 max-[481px]:border-[#98A2B3] max-[481px]:border-[0.3px] bg-[#667085] max-[481px]:max-w-full min-[481px]:max-w-[0.5px]" />

        <img
          src={fieldNoteSectionPic5}
          alt=""
          className="object-cover flex-1 min-[481px]:max-w-96.5"
        />
      </div>
    </section>
  );
};

export default HeroSection4;
