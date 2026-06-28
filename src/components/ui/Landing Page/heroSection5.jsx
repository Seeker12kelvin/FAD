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

      <div className="max-[481px]:w-full flex max-[481px]:flex-col max-[481px]:gap-10 gap-6 max-[481px]:items-start items-end max-[481px]:min-h-170 min-[481px]:h-170">
        <div className="flex flex-col gap-6 justify-end h-full">
          <h2 className="font-helvetica font-medium leading-[100%] tracking-[-1%] text-[#322418] border-b-2 border-[#322418] pb-1 w-fit">
            QUICK RECAP
          </h2>

          <ol className="list-decimal pl-4.5 space-y-2 min-[481px]:max-w-81.25 flex flex-col gap-6">
            {questions.map((data) => (
              <li
                key={data.id}
                className={`text-lg text-[#252324] tracking-[-1px] font-medium font-helvetica leading-6 ${questions.length === data.id ? "min-[481px]:pb-3 min-[481px]:border-b-[#585051] min-[481px]:border-b-[0.3px]" : "pb-3 border-b-[#585051] border-b-[0.3px]"}`}
              >
                {data.text}
              </li>
            ))}
          </ol>
        </div>

        <hr className="border-[#98A2B3] border-t w-full min-[481px]:hidden" />

        <div className="flex flex-col max-[481px]:gap-10 justify-between h-full max-[481px]:w-full">
          <div className="h-85 flex gap-6 max-[481px]:w-full">
            <div className="flex-1 bg-[#98A2B3] w-[0.2px] max-[481px]:hidden" />
            <div className="flex flex-col gap-6 max-[481px]:w-full min-[481px]:max-w-114.75">
              <h2 className="font-helvetica font-medium leading-[100%] tracking-[-1%] text-[#322418] border-b-2 border-[#322418] pb-1 w-fit">
                FIELD NOTES
              </h2>
              <div className="flex gap-6 max-[481px]:w-full max-[481px]:justify-between">
                {listOne.map((data) => (
                  <div
                    key={data.id}
                    className="flex flex-col gap-2 max-[481px]:min-w-[163.5px] max-[481px]:min-h-72.5 min-[481px]:w-[217.5px] min-[481px]:max-h-72.5"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-full h-38.5 object-cover"
                    />

                    <div className="flex flex-col gap-1">
                      <h3 className="font-medium font-helvetica max-[481px]:leading-5.5 leading-6.5 tracking-[-1px] text-[#252324] max-[481px]:text-[16px] text-xl">
                        {data.header}
                      </h3>

                      <p className="text-[#6C6263] font-helvetica font-normal max-[481px]:text-xs text-sm max-[481px]:leading-5 leading-6">
                        {data.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-[#98A2B3] max-w-[0.2px] max-[481px]:hidden" />
          </div>

          <div className="flex gap-6 h-75">
            <div className="flex-1 bg-[#98A2B3] max-w-[0.2px] max-[481px]:hidden" />
            <div className="flex flex-col gap-2 max-[481px]:w-full min-[481px]:w-114.75 max-h-72.5">
              <img
                src={heroSection5Pic2}
                alt=""
                className="w-full max-[481px]:h-51 min-[481px]:h-53 object-cover"
              />

              <div className="flex flex-col gap-1">
                <h3 className="font-medium font-helvetica max-[481px]:leading-5.5 leading-6.5 tracking-[-1px] text-[#252324] max-[481px]:text-[16px] text-xl">
                  Is Global Fashion Finally Listening to Africa — or Just
                  Watching?
                </h3>

                <p className="text-[#6C6263] font-helvetica font-normal max-[481px]:text-xs text-sm max-[481px]:leading-5 leading-6">
                  Why visibility doesn’t always mean influence, and what real
                  inclusion sh...
                </p>
              </div>
            </div>
            <div className="flex-1 bg-[#98A2B3] max-w-[0.2px] max-[481px]:hidden" />
          </div>
        </div>

        <hr className="border-[#98A2B3] border-t w-full min-[481px]:hidden" />

        <div className="flex flex-col max-[481px]:gap-10 justify-between h-full p-0">
          <div className="flex flex-col gap-6">
            <h2 className="font-helvetica font-medium leading-[100%] tracking-[-1%] text-[#322418] border-b-2 border-[#322418] pb-1 w-fit">
              PERSPECTIVE
            </h2>

            <div className="flex flex-col gap-8 h-full py-5">
              {listTwo.slice(0, 2).map((data) => (
                <div
                  key={data.id}
                  className="w-full min-h-28.75 h-fit flex gap-2.5"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="size-25 min-h-25 max-h-25 min-w-25 max-w-25 w-full object-cover"
                  />

                  <div className="w-full max-[481px]:min-w-60.25 min-[481px]:max-w-92.5 flex flex-col gap-2 border-b-[#C7C1C1] border-b-[0.3px] pb-3">
                    <h3 className="font-bold font-helvetica leading-[100%] uppercase text-[#8D8382] max-[481px]:text-[10px] text-xs">
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
          </div>

          <div className="flex flex-col justify-end gap-8 h-full">
            {listTwo.slice(-2).map((data) => (
              <div
                key={data.id}
                className="w-full min-h-28.75 h-fit flex gap-2.5"
              >
                <img
                  src={data.img}
                  alt=""
                  className="size-25 min-h-25 max-h-25 min-w-25 max-w-25 w-full object-cover"
                />

                <div className="w-full max-[481px]:min-w-60.25 min-[481px]:max-w-92.5 flex flex-col gap-2 border-b-[#C7C1C1] border-b-[0.3px] pb-3">
                  <h3 className="font-bold font-helvetica leading-[100%] uppercase text-[#8D8382] max-[481px]:text-[10px] text-xs">
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
        </div>
      </div>

      <hr className="border-[#322418] border-t-[1.5px] w-full max-[481px]:hidden" />
    </section>
  );
};

export default HeroSection5;
