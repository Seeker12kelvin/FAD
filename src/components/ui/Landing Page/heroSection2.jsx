import { IoMdArrowRoundDown } from "react-icons/io";
import heroSection2Pic1 from "../../../assets/images/heroSection2Pic1.jpg";
import heroSection2Pic2 from "../../../assets/images/heroSection2Pic2.jpg";
import heroSection2Pic3 from "../../../assets/images/heroSection2Pic3.jpg";
import heroSection2Pic4 from "../../../assets/images/heroSection2Pic4.jpg";

const HeroSection2 = () => {
  const list = [
    {
      id: 1,
      img: heroSection2Pic1,
      topic: "Sustainability",
      header:
        "Sustainability Isn’t New — Africa Has Been Doing It for Generations",
      desc: "Why slow fashion, reuse, and craftsmanship are deeply rooted in African culture. Why slow fashion, reuse, and craftsmanship are deeply rooted in African culture.",
      owner: "By Obi Hauwa Efiong",
    },
    {
      id: 2,
      img: heroSection2Pic2,
      topic: "Entrepreneurship",
      header: "The New Fashion Moguls: Young Africans Building Global Brands",
      desc: "From Instagram shops to international stockists — how digital tools are changing who wins in fashion.From Instagram shops to international stockists — how digital tools are changing who wins in fashion.",
      owner: "By Obi Hauwa Efiong",
    },
    {
      id: 3,
      img: heroSection2Pic3,
      topic: "Society",
      header: "When Style Becomes a Social Statement",
      desc: "How clothing is being used to speak on identity, politics, and belonging.How clothing is being used to speak on identity, politics, and belonging.",
      owner: "By Obi Hauwa Efiong",
    },
  ];

  return (
    <section className="pt-6 pb-5 px-10 flex flex-col gap-10">
      <hr className="border-[#322418] border-[1.5px]" />

      <h2 className="font-helvetica font-medium leading-[100%] tracking-[-1%] text-[#322418] border-b-2 border-[#322418] pb-1 w-fit">
        DEEP DIVE
      </h2>

      <div className="flex flex-col gap-10">
        {list.map((data) => (
          <div key={data.id} className="h-62.25 overflow-clip flex gap-6">
            <div className="max-w-125.75 h-full">
              <img
                src={data.img}
                alt="A picture of someone singing into a mike"
                className={`flex-1 ${data.id % 2 === 0 ? "-mt-15" : "-mt-30"}`}
              />
            </div>

            <div
              className={`flex flex-col h-full justify-between max-w-208.25`}
            >
              <div className="flex flex-col gap-2 h-full">
                <h3 className="font-bold font-helvetica leading-[100%] uppercase text-[#8D8382] text-sm">
                  {data.topic}
                </h3>

                <h4 className="text-[#252324] text-2xl leading-[100%] font-helvetica font-medium">
                  {data.header}
                </h4>

                <p className="text-[#344054] font-helvetica font-light text-lg leading-7">
                  {data.desc}
                </p>
              </div>

              <p className="text-[#6C6263] font-helvetica font-normal text-sm leading-6 flex items-center gap-2">
                {data.owner.split(" ")[0]}
                <span className="underline cursor-pointer">
                  {data.owner.split(" ")[1]} {data.owner.split(" ")[2]}{" "}
                  {data.owner.split(" ")[3]}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="self-center w-fit bg-[#0C111D] text-white font-helvetica font-medium leading-6 flex items-center gap-2 py-4 px-5">
        LOAD MORE{" "}
        <span>
          <IoMdArrowRoundDown size={20} />
        </span>
      </button>

      <hr className="border-[#322418] border-[1.5px]" />

      <div className="max-h-62.75 max-w-255.5 w-full overflow-hidden h-full self-center">
        <img
          src={heroSection2Pic4}
          alt="A picture of pumas' logo"
          className="object-cover -mt-77"
        />
      </div>
    </section>
  );
};

export default HeroSection2;
