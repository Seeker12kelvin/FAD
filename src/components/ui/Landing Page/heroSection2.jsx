import { IoMdArrowRoundDown } from "react-icons/io";
import heroSection2Pic1 from "../../../assets/images/heroSection2Pic1.jpg";
import heroSection2Pic2 from "../../../assets/images/heroSection2Pic2.jpg";
import heroSection2Pic3 from "../../../assets/images/heroSection2Pic3.jpg";
import heroSection2Pic4 from "../../../assets/images/heroSection2Pic4.jpg";
import { useEffect, useState } from "react";

const fallbackList = [
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
    desc: "From Instagram shops to international stockists — how digital tools are changing who wins in fashion. From Instagram shops to international stockists — how digital tools are changing who wins in fashion.",
    owner: "By Obi Hauwa Efiong",
  },
  {
    id: 3,
    img: heroSection2Pic3,
    topic: "Society",
    header: "When Style Becomes a Social Statement",
    desc: "How clothing is being used to speak on identity, politics, and belonging. How clothing is being used to speak on identity, politics, and belonging.",
    owner: "By Obi Hauwa Efiong",
  },
];

const HeroSection2 = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchAllBlogs = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_STRAPI_URL}/api/deep-dive-blogs?populate=*`,
        );

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const json = await res.json();

        if (!ignore) {
          if (json?.data?.length) {
            setBlogData(json.data);
          } else {
            setBlogData(fallbackList);
          }
        }
      } catch (err) {
        console.error(err);
        if (!ignore) setBlogData(fallbackList);
      }
    };

    fetchAllBlogs();

    return () => {
      ignore = true;
    };
  }, []);

  const itemsToRender = blogData?.length ? blogData : fallbackList;

  return (
    <section className="px-3 py-5 sm:px-6 lg:px-8 xl:px-10 xl:pt-6 xl:pb-5 flex flex-col gap-10">
      <hr className="border border-[#667085]" />

      <div className="flex flex-col gap-5">
        <h2 className="w-fit border-b-2 border-[#322418] pb-1 font-helvetica font-medium tracking-[-1%] text-[#322418]">
          DEEP DIVE
        </h2>

        <div className="flex flex-col gap-10">
          {itemsToRender.slice(0, 3).map((data) => {
            const imageSrc = data.img?.url
              ? `${import.meta.env.VITE_STRAPI_URL}${data.img.url}`
              : data.img;

            return (
              <div
                key={data.id}
                className="flex flex-col sm:flex-row gap-5 xl:gap-6 overflow-hidden"
              >
                <div
                  className="
                  w-full
                  h-49.25

                  sm:w-65
                  sm:min-w-65
                  sm:h-55

                  xl:w-125.75
                  xl:h-62.25

                  overflow-hidden
                "
                >
                  <img
                    src={imageSrc}
                    alt={data.img?.alternativeText || data.header}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1 gap-5">
                  <div className="flex flex-col gap-3">
                    <h3 className="uppercase text-xs xl:text-sm font-bold font-helvetica text-[#8D8382]">
                      {data.topic}
                    </h3>

                    <h4 className="font-helvetica font-medium text-[#252324] leading-tight text-xl sm:text-[22px] xl:text-2xl">
                      {data.header}
                    </h4>

                    <p className="font-helvetica font-light text-[#344054] text-base xl:text-lg leading-7">
                      {data.desc}
                    </p>
                  </div>

                  <p className="flex items-center gap-2 text-[13px] xl:text-sm text-[#6C6263] font-helvetica">
                    <span className="underline cursor-pointer">
                      {data.owner}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button className="self-center flex items-center gap-2 bg-[#0C111D] text-white font-helvetica font-medium text-sm xl:text-base px-4 py-3 xl:px-5 xl:py-4">
        LOAD MORE
        <IoMdArrowRoundDown size={20} />
      </button>

      <hr className="border border-[#667085]" />

      <div
        className="
          self-center
          overflow-hidden
          w-full

          max-w-75.75
          max-h-24

          sm:max-w-175
          sm:max-h-45

          xl:max-w-255.5
          xl:max-h-62.75
        "
      >
        <img
          src={heroSection2Pic4}
          alt="Puma logo"
          className="w-full object-cover -translate-y-20 sm:-translate-y-12 xl:-translate-y-32"
        />
      </div>
    </section>
  );
};

export default HeroSection2;
