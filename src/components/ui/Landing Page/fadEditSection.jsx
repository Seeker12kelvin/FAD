import heroSection2Pic5 from "../../../assets/images/heroSection2Pic5.jpg";
import heroSection2Pic6 from "../../../assets/images/heroSection2Pic6.jpg";
import heroSection2Pic7 from "../../../assets/images/heroSection2Pic7.jpg";

const FadEditSection = () => {
  const editList = [
    {
      id: 1,
      img: heroSection2Pic5,
      topic: "Lookbooks",
      header: "New Season, New Icons",
      desc: "The designers, models, and photographers to watch this year.The designers, models, and photographers to watch this year.",
    },
    {
      id: 2,
      img: heroSection2Pic6,
      topic: "Lookbooks",
      header: "New Season, New Icons",
      desc: "The designers, models, and photographers to watch this year.The designers, models, and photographers to watch this year.",
    },
    {
      id: 3,
      img: heroSection2Pic7,
      topic: "Style Trends",
      header: "Streetwear Is Africa’s Biggest Export",
      desc: "How youth culture turned everyday style into global influence.How youth culture turned everyday style into global influence.",
    },
  ];

  return (
    <section className="max-[481px]:px-3 max-[481px]:pb-5 px-10 flex flex-col gap-10 pb-10">
      <hr className="border-[#667085] border" />

      <h2 className="font-helvetica font-medium leading-[100%] tracking-[-1%] text-[#322418] border-b-2 border-[#322418] pb-1 w-fit">
        THE FAD EDIT
      </h2>

      <div className="max-[481px]:min-h-190.25 min-[481px]:max-h-190.25 h-full flex max-[481px]:flex-col max-[481px]:gap-6 justify-between">
        {editList.map((data) => (
          <div
            key={data.id}
            className={`min-[481px]:max-w-100 h-full flex flex-col gap-2 ${editList.length === data.id ? "" : "pb-6 border-b-[0.2px] border-[#98A2B3]"}`}
          >
            <img src={data.img} className="object-cover h-158.75 w-full" />

            <div className="flex flex-col gap-2">
              <h3 className="max-[481px]:hidden font-bold font-helvetica leading-[100%] uppercase text-[#8D8382] text-sm">
                {data.topic}
              </h3>

              <h4 className="text-[#252324] text-lg max-[481px]:leading-[100%] leading-6.5 max-[481px]:tracking-[-1px] font-helvetica font-medium">
                {data.header}
              </h4>

              <p className="text-[#6C6263] font-helvetica font-light text-sm leading-6 tracking-[-0.17px] flex items-center gap-2">
                {data.desc}
              </p>

              <p className="min-[481px]:hidden text-sm text-[#A69F9E] leading-6 font-helvetica font-normal">
                09 January 2026
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FadEditSection;
