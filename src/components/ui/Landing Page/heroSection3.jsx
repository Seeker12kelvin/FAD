import heroSection3Pic1 from "../../../assets/images/heroSection3Pic1.jpg";
import heroSection3Pic2 from "../../../assets/images/heroSection3Pic2.png";
import heroSection3Pic3 from "../../../assets/images/heroSection3Pic3.jpg";
import heroSection3Pic4 from "../../../assets/images/heroSection3Pic4.jpg";
import heroSection3Pic5 from "../../../assets/images/heroSection3Pic5.jpg";

const HeroSection3 = () => {
  const list = [
    {
      id: 1,
      img: heroSection3Pic1,
      topic: "The Rise of Melanin-First Beauty",
      header:
        "Brands building products with Black skin at the center — not the margins.Brands building products with Black skin at the center — not the margins.",
      desc: "Beauty Edit.",
    },
    {
      id: 2,
      img: heroSection3Pic2,
      topic: "New Season, New Icons",
      header:
        "The designers, models, and photographers to watch this year.The designers, models, and photographers to watch this year.",
      desc: "Lookbooks",
    },
    {
      id: 3,
      img: heroSection3Pic3,
      topic: "Streetwear Is Africa’s Biggest Export",
      header:
        "How youth culture turned everyday style into global influence.How youth culture turned everyday style into global influence.",
      desc: "Style Trends",
    },
    {
      id: 4,
      img: heroSection3Pic4,
      topic: "Streetwear Is Africa’s Biggest Export",
      header:
        "How youth culture turned everyday style into global influence.How youth culture turned everyday style into global influence.",
      desc: "Style Trends",
    },
    {
      id: 5,
      img: heroSection3Pic5,
      topic: "Streetwear Is Africa’s Biggest Export",
      header:
        "How youth culture turned everyday style into global influence.How youth culture turned everyday style into global influence.",
      desc: "Style Trends",
    },
  ];

  return (
    <section className="w-full max-[768px]:px-3 max-[768px]:pb-5 min-[769px]:max-[1200px]:px-6 px-10 flex flex-col gap-10 pb-10 overflow-x-hidden">
      <hr className="border-[#667085] border" />
      <div className="w-full max-[481px]:h-fit min-[481px]:min-h-96 h-fit overflow-x-scroll no-scrollbar">
        <div className="w-fit flex gap-8 items-start">
          {list.map((data) => (
            <div
              key={data.id}
              className="flex flex-col max-[481px]:justify-between max-[481px]:min-h-60.5 min-[481px]:gap-2 max-[481px]:w-59.5 min-[481px]:w-144.25 max-[481px]:pb-1 min-[481px]:pb-4 border-b-[0.5px] border-b-[#8D8382]"
            >
              <img
                src={data.img}
                className="object-cover w-full max-[481px]:h-26.5 min-[481px]:h-62.25"
              />

              <div className="flex flex-col min-[481px]:gap-1">
                <h3 className="text-[#252324] max-[481px]:text-[16px] text-lg leading-[100%] tracking-[-1px] font-helvetica font-medium">
                  {data.topic}
                </h3>

                <h4 className="max-[481px]:hidden text-[#6C6263] font-helvetica font-light max-[481px]:text-xs text-sm max-[481px]:leading-5 leading-6 tracking-[-0.17px]">
                  {data.header}
                </h4>

                <h4 className="min-[481px]:hidden text-[#6C6263] font-helvetica font-light max-[481px]:text-xs text-sm max-[481px]:leading-5 leading-6 tracking-[-0.17px]">
                  The designers, models, and photographers to watch this
                  year.The designers, models, and photographers to watch this
                  year.
                </h4>
              </div>

              <p className="font-bold font-helvetica leading-[100%] uppercase text-[#8D8382] max-[481px]:text-[10px] text-sm">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-[#667085] border" />
    </section>
  );
};

export default HeroSection3;
