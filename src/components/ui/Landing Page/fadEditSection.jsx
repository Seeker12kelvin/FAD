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
    <section className="px-10 flex flex-col gap-10 pb-10">
      <hr className="border-[#322418] border-[1.5px]" />

      <h2 className="font-helvetica font-medium leading-[100%] tracking-[-1%] text-[#322418] border-b-2 border-[#322418] pb-1 w-fit">
        THE FAD EDIT
      </h2>

      <div className="max-h-190.25 h-full flex justify-between">
        {editList.map((data) => (
          <div key={data.id} className="max-w-100 h-full flex flex-col gap-2">
            <img src={data.img} className="object-cover h-158.75 w-full" />

            <div className="flex flex-col gap-2">
              <h3 className="font-bold font-helvetica leading-[100%] uppercase text-[#8D8382] text-sm">
                {data.topic}
              </h3>

              <h4 className="text-[#252324] text-lg leading-6.5 font-helvetica font-medium">
                {data.header}
              </h4>

              <p className="text-[#6C6263] font-helvetica font-light text-sm leading-6 tracking-[-0.17px] flex items-center gap-2">
                {data.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FadEditSection;
