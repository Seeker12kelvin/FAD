import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import logo from "../../../assets/images/invertedLogo.svg";

const Footer = () => {
  const list = [
    {
      id: 1,
      header: "Features",
      one: "Culture",
      two: "Social Studies",
      three: "Sustainability",
      four: "Informal Markets",
      five: "Entrepreneurship",
      six: "Marketing",
      seven: "Beauty",
      eight: "Nuptials",
      nine: "Across the Pond",
      ten: "Matters Arising",
    },
    {
      id: 2,
      header: "Exclusives",
      one: "Dear Derived",
      two: "FAD Calendar",
      three: "Owambe Confetti ",
      four: "Lip Service",
    },
    {
      id: 3,
      header: "About Us",
      one: "Who We Are",
      two: "Work With Us",
      three: "Contact Us",
    },
    {
      id: 4,
      header: "Community",
      one: "Directory",
      two: "Conference",
      three: "Newsletters",
      four: "Insights",
      five: "Events",
    },
  ];

  return (
    <footer className="-mb-10 min-[481px]:min-h-180.25 h-fit bg-[#000000] flex flex-col justify-between pt-20 max-[481px]:px-6 max-[481px]:pb-0 p-14">
      <div className="min-h-100.5 h-fit flex max-[900px]:flex-col max-[900px]:gap-4 justify-between w-full">
        <div className="max-[900px]:self-start min-[900px]:self-end flex flex-col gap-4">
          <img src={logo} alt="Logo" className="h-25 w-40 object-cover" />
          <p className="max-[900px]:max-w-full max-w-61 text-white text-sm font-helvetica font-medium">
            Agenda-setting intelligence, analysis and advice for the African
            fashion community.
          </p>
        </div>

        <div className="flex-1 bg-[#787878] max-w-[0.2px] max-[481px]:hidden" />

        <hr className="border-[#787878] border-t-[0.2px] w-full min-[900px]:hidden" />

        <div className="max-[900px]:max-w-full max-[1050px]:max-w-125 max-[1250px]:max-w-150 max-[1300px]:max-w-200 max-[1390px]:max-w-4xl max-w-234 w-full flex max-[481px]:flex-col max-[1390px]:justify-center gap-8 min-[1390px]:justify-between min-h-100.5 max-[900px]:py-10 max-[481px]:pt-0 max-[481px]:pb-10">
          {list.slice(0, 1).map((data) => (
            <div key={data.id} className="w-full h-full flex flex-col gap-6">
              <h2 className="text-[#D7D3D0] max-[481px]:text-[16px] text-lg font-helvetica uppercase leading-5 font-medium">
                {data.header}
              </h2>
              <ul className="flex flex-col gap-4 justify-between h-full">
                {[
                  data.one,
                  data.two,
                  data.three,
                  data.four,
                  data.five,
                  data.six,
                  data.seven,
                  data.eight,
                  data.nine,
                  data.ten,
                ].map((item, index) => (
                  <li
                    key={index}
                    className="max-[567px]:text-[#A9A29D] max-[567px]:text-sm text-[#FCFCFC] leading-[100%] font-helvetica font-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-full flex flex-col justify-between h-full gap-8">
            {list.slice(1, 3).map((data) => (
              <div key={data.id} className="w-full flex flex-col gap-6">
                <h2 className="text-[#D7D3D0] text-lg font-helvetica uppercase leading-5 font-medium">
                  {data.header}
                </h2>
                <ul className="flex flex-col gap-4">
                  {[data.one, data.two, data.three, data?.four, data?.five].map(
                    (item, index) => (
                      <li
                        key={index}
                        className="max-[567px]:text-[#A9A29D] max-[567px]:text-sm text-[#FCFCFC] leading-[100%] font-helvetica font-light"
                      >
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col justify-between h-full gap-8">
            {list.slice(-1).map((data) => (
              <div key={data.id} className="w-full flex flex-col gap-6">
                <h2 className="text-[#D7D3D0] text-lg font-helvetica uppercase leading-5 font-medium">
                  {data.header}
                </h2>
                <ul className="flex flex-col gap-4">
                  {[data.one, data.two, data.three, data?.four, data?.five].map(
                    (item, index) => (
                      <li
                        key={index}
                        className="max-[567px]:text-[#A9A29D] max-[567px]:text-sm text-[#FCFCFC] leading-[100%] font-helvetica font-light"
                      >
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-[#787878] border-t-[0.2px] w-full min-[900px]:hidden" />
      </div>

      <div className="flex flex-col gap-10 max-[900px]:py-10 h-fit">
        <div className="w-full flex max-[900px]:flex-col max-[900px]:gap-12 max-[900px]:items-center min-[900px]:justify-between">
          <div className="flex max-[900px]:flex-wrap max-[900px]:w-full max-[900px]:justify-center items-center gap-4 max-[900px]:h-fit h-5">
            <p className="max-[481px]:text-[#A9A29D] text-[#E4E4E7] max-[481px]:text-xs max-[481px]:tracking-[0%] text-sm font-helvetica font-medium leading-5">
              EDITORIALS
            </p>

            <div className="bg-[#787878] max-w-[0.2px] h-full border-[#252324] border-[1.2px]" />

            <p className="max-[481px]:text-[#A9A29D] text-[#E4E4E7] max-[481px]:text-xs max-[481px]:tracking-[0%] text-sm font-helvetica font-medium leading-5">
              CALENDAR
            </p>

            <div className="bg-[#787878] max-w-[0.2px] h-full border-[#252324] border-[1.2px]" />

            <p className="max-[481px]:text-[#A9A29D] text-[#E4E4E7] max-[481px]:text-xs max-[481px]:tracking-[0%] text-sm font-helvetica font-medium leading-5">
              PRIVACY POLICY
            </p>

            <div className="bg-[#787878] max-w-[0.2px] h-full border-[#252324] border-[1.2px]" />

            <p className="max-[481px]:text-[#A9A29D] text-[#E4E4E7] max-[481px]:text-xs max-[481px]:tracking-[0%] text-sm font-helvetica font-medium leading-5">
              TERMS & CONDITIONS
            </p>
          </div>

          <div className="flex items-center gap-6">
            <FaFacebookF size={30} className="text-[#A9A29D]" />
            <FaInstagram size={30} className="text-[#A9A29D]" />
            <FaXTwitter size={30} className="text-[#A9A29D]" />
            <FaPinterestP size={30} className="text-[#A9A29D]" />
          </div>
        </div>

        <p className="text-[#787878] text-xs font-helvetica font-medium leading-5">
          © 2026 Fashion Africa Daily. All rights reserved. For more information
          read our <span className="underline">Terms & Conditions</span>, 
          <span className="underline"> Privacy Policy</span>, 
          <span className="underline"> Cookie Policy</span> and  
          <span className="underline"> Accessibility Statement</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
