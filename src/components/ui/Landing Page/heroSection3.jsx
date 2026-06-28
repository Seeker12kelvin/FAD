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
    <section className="w-full px-10 flex flex-col gap-10 pb-10 overflow-x-hidden">
      <hr className="border-[#322418] border-[1.5px]" />
      <div className="w-full min-h-96 h-fit overflow-x-scroll no-scrollbar">
        <div className="w-fit flex gap-8 items-start">
          {list.map((data) => (
            <div
              key={data.id}
              className="flex flex-col gap-2 w-144.25 pb-4 border-b-[0.5px] border-b-[#8D8382]"
            >
              <img src={data.img} className="object-cover w-full h-62.25" />

              <div className="flex flex-col gap-1">
                <h3 className="text-[#252324] text-lg leading-[100%] tracking-[-1px] font-helvetica font-medium">
                  {data.topic}
                </h3>

                <h4 className="text-[#6C6263] font-helvetica font-light text-sm leading-6 tracking-[-0.17px]">
                  {data.header}
                </h4>
              </div>

              <p className="font-bold font-helvetica leading-[100%] uppercase text-[#8D8382] text-sm">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection3;
