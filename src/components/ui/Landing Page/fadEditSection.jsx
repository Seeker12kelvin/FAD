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
      desc: "The designers, models, and photographers to watch this year. The designers, models, and photographers to watch this year.",
    },
    {
      id: 2,
      img: heroSection2Pic6,
      topic: "Lookbooks",
      header: "New Season, New Icons",
      desc: "The designers, models, and photographers to watch this year. The designers, models, and photographers to watch this year.",
    },
    {
      id: 3,
      img: heroSection2Pic7,
      topic: "Style Trends",
      header: "Streetwear Is Africa’s Biggest Export",
      desc: "How youth culture turned everyday style into global influence. How youth culture turned everyday style into global influence.",
    },
  ];

  return (
    <section className="max-[768px]:px-3 max-[768px]:pb-5 min-[769px]:max-[1200px]:px-6 px-10 flex flex-col gap-10 pb-10">
      <hr className="border border-[#667085]" />

      <h2 className="font-helvetica font-medium leading-[100%] tracking-[-1%] text-[#322418] border-b-2 border-[#322418] pb-1 w-fit">
        THE FAD EDIT
      </h2>

      <div className="flex max-[768px]:flex-col min-[769px]:max-[1200px]:grid min-[769px]:max-[1200px]:grid-cols-2 justify-between gap-6">
        {editList.map((data) => (
          <>
            <div
              key={data.id}
              className={`
              flex flex-col gap-3 h-full
              xl:max-w-[400px]

              ${
                data.id === editList.length
                  ? ""
                  : "max-[768px]:pb-6 max-[768px]:border-b border-[#98A2B3]"
              }

              min-[769px]:max-[1200px]:col-span-2
            `}
            >
              <img
                src={data.img}
                alt={data.header}
                className="
                w-full
                object-cover

                h-[420px]

                min-[769px]:max-[1200px]:h-[320px]

                xl:h-[635px]
              "
              />

              <div className="flex flex-col gap-2">
                <h3 className="max-[768px]:hidden uppercase text-[#8D8382] font-bold font-helvetica text-sm">
                  {data.topic}
                </h3>

                <h4 className="text-[#252324] font-helvetica font-medium text-lg min-[769px]:max-[1200px]:text-xl leading-tight">
                  {data.header}
                </h4>

                <p className="text-[#6C6263] font-helvetica font-light text-sm leading-6 tracking-[-0.17px]">
                  {data.desc}
                </p>

                <p className="min-[769px]:hidden text-sm text-[#A69F9E] leading-6 font-helvetica">
                  09 January 2026
                </p>
              </div>
            </div>
            {data.id != editList.length && (
              <div className="border-[#98A2B3] border-l-[0.2px] max-[768px]:hidden" />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default FadEditSection;
