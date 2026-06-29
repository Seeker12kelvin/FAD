import heroSection5Pic1 from "../../../assets/images/heroSection5Pic1.jpg";
import heroSection2Pic3 from "../../../assets/images/heroSection2Pic3.jpg";
import heroSection5Pic2 from "../../../assets/images/heroSection5Pic2.jpg";
import heroSection5Pic3 from "../../../assets/images/heroSection5Pic3.jpg";
import heroSection5Pic4 from "../../../assets/images/heroSection5Pic4.jpg";
import heroSection5Pic5 from "../../../assets/images/heroSection5Pic5.jpg";
import heroSection5Pic6 from "../../../assets/images/heroSection5Pic6.jpg";

const HeroSection5 = () => {
  const questions = [
    {
      id: 1,
      text: "Why African Designers Deserve More Than Seasonal Attention",
    },
    { id: 2, text: "Are We Romanticising African Creativity Too Much?" },
    {
      id: 3,
      text: "Luxury Loves Africa — But Does It Love African Designers?",
    },
    { id: 4, text: "The Myth of the ‘Emerging Market’ Designer" },
    {
      id: 5,
      text: "If African Fashion Is the Future, Why Isn’t the Future Investing Back?",
    },
  ];

  const listOne = [
    {
      id: 1,
      img: heroSection5Pic1,
      header: "Who Pays When African Culture Goes Viral",
      desc: "From TikTok trends to luxury runways — unpacking the economics of cultural borrowing.",
    },
    {
      id: 2,
      img: heroSection2Pic3,
      header: "Who Pays When African Culture Goes Viral",
      desc: "From TikTok trends to luxury runways — unpacking the economics of cultural borrowing.",
    },
  ];

  const listTwo = [
    {
      id: 1,
      img: heroSection5Pic3,
      topic: "Culture & Power",
      header: "Who Owns African Fashion on the Global Stage?",
      desc: "When influence travels faster than credit, who really bene...",
    },
    {
      id: 2,
      img: heroSection5Pic4,
      topic: "Society",
      header: "Why Representation Still Shapes Opportunity",
      desc: "The impact of visibility in fashion, media, and leadership.",
    },
    {
      id: 3,
      img: heroSection5Pic5,
      topic: "Global African",
      header: "Diaspora Creatives and the New Cultural Middle Ground",
      desc: "How African designers abroad are reshaping identity — a...",
    },
    {
      id: 4,
      img: heroSection5Pic6,
      topic: "Industry Critique",
      header:
        "Beyond the Hype: What Real Support for African Designers Looks Like",
      desc: "Moving from applause to action in the global fashion ind...",
    },
  ];

  return (
    <section className="flex flex-col max-[481px]:items-start min-[481px]:items-end gap-16 max-[481px]:px-3 max-[481px]:py-5 p-10">
      <hr className="border-[#322418] border-t-[1.5px] w-full max-[481px]:hidden" />

      <div className="max-[481px]:w-full flex max-[1300px]:flex-wrap max-[1300px]:justify-between max-[481px]:flex-col max-[1030px]:gap-10 gap-6 max-[481px]:items-start items-end max-[481px]:min-h-170 min-[1300px]:h-170">
        <div className="flex flex-col gap-5 lg:gap-6 w-full">
          <h2 className="w-fit border-b-2 border-[#322418] pb-1 font-helvetica font-medium tracking-[-1%] text-[#322418]">
            QUICK RECAP
          </h2>

          <ol
            className="
      list-decimal
      pl-5
      flex
      flex-col
      gap-4
      lg:gap-5
      xl:gap-6

      xl:max-w-[325px]
    "
          >
            {questions.map((data) => (
              <li
                key={data.id}
                className={`
          ${questions.length === data.id ? "" : "border-b border-[#585051] pb-3"}

          text-base
          sm:text-[17px]
          xl:text-lg

          leading-6
          tracking-[-1px]

          font-medium
          font-helvetica
          text-[#252324]
        `}
              >
                {data.text}
              </li>
            ))}
          </ol>
        </div>

        <hr className="border-[#98A2B3] border-t w-full min-[481px]:hidden" />

        <div className="flex flex-col gap-10 w-full">
          {/* FIELD NOTES */}
          <div className="flex flex-col gap-6">
            <h2 className="font-helvetica font-medium tracking-[-1%] text-[#322418] border-b-2 border-[#322418] pb-1 w-fit">
              FIELD NOTES
            </h2>

            <div
              className="
        grid
        grid-cols-1
        min-[481px]:grid-cols-2
        gap-6
      "
            >
              {listOne.map((data) => (
                <div key={data.id} className="flex flex-col gap-3">
                  <img
                    src={data.img}
                    alt=""
                    className="
              w-full
              h-44
              sm:h-52
              lg:h-60
              object-cover
            "
                  />

                  <div className="flex flex-col gap-2">
                    <h3
                      className="
                text-lg
                lg:text-xl
                leading-tight
                tracking-[-1px]
                font-medium
                font-helvetica
                text-[#252324]
              "
                    >
                      {data.header}
                    </h3>

                    <p
                      className="
                text-sm
                leading-6
                font-normal
                font-helvetica
                text-[#6C6263]
              "
                    >
                      {data.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FEATURED ARTICLE */}
          <div className="flex flex-col gap-3">
            <img
              src={heroSection5Pic2}
              alt=""
              className="
        w-full
        h-56
        sm:h-72
        lg:h-80
        object-cover
      "
            />

            <div className="flex flex-col gap-2">
              <h3
                className="
          text-lg
          lg:text-xl
          leading-tight
          tracking-[-1px]
          font-medium
          font-helvetica
          text-[#252324]
        "
              >
                Is Global Fashion Finally Listening to Africa — or Just
                Watching?
              </h3>

              <p
                className="
          text-sm
          leading-6
          font-normal
          font-helvetica
          text-[#6C6263]
        "
              >
                Why visibility doesn’t always mean influence, and what real
                inclusion should look like.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-[#98A2B3] border-t w-full min-[481px]:hidden" />

        <div className="flex flex-col gap-10 w-full h-full">
          <h2 className="font-helvetica font-medium leading-[100%] tracking-[-1%] text-[#322418] border-b-2 border-[#322418] pb-1 w-fit">
            PERSPECTIVE
          </h2>

          <div
            className="
      flex flex-col gap-8

      min-[768px]:grid
      min-[768px]:grid-cols-2
      min-[768px]:gap-6

      min-[1300px]:flex
      min-[1300px]:flex-col
    "
          >
            {listTwo.map((data) => (
              <div key={data.id} className="flex gap-3">
                <img
                  src={data.img}
                  alt=""
                  className="
            w-20 h-20

            min-[768px]:w-24
            min-[768px]:h-24

            xl:w-25
            xl:h-25

            object-cover
            shrink-0
          "
                />

                <div className="flex flex-col gap-2 border-b border-[#C7C1C1] pb-3 flex-1">
                  <h3 className="uppercase text-[#8D8382] font-bold font-helvetica text-[10px] xl:text-xs">
                    {data.topic}
                  </h3>

                  <h4 className="font-helvetica font-medium text-base md:text-lg xl:text-xl leading-tight tracking-[-1px] text-[#000]">
                    {data.header}
                  </h4>

                  <p className="font-helvetica font-light text-xs md:text-sm leading-5 text-[#000]">
                    {data.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-[#322418] border-t-[1.5px] w-full max-[481px]:hidden" />
    </section>
  );
};

export default HeroSection5;
