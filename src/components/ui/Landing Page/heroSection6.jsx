import heroSectionPic1 from "../../../assets/images/heroSection6Pic1.png";

const HeroSection6 = () => {
  return (
    <section className="flex flex-col items-center gap-10 max-[481px]:px-3 max-[481px]:py-5 p-10">
      <hr className="border-[#667085] border-t w-full" />

      <img
        src={heroSectionPic1}
        alt=""
        className="max-[481px]:w-full min-[481px]:max-w-259 max-[481px]:h-63.25 h-full object-cover"
      />

      <hr className="border-[#667085] border-t w-full" />

      <div className="w-full max-[481px]:min-h-18.5 min-[481px]:h-18.5 flex max-[481px]:flex-col gap-8 items-center px-4">
        <div className="max-w-180.25 w-full flex flex-col gap-2">
          <h2 className="max-[481px]:text-xl text-4xl text-[#000000] font-ivy max-[481px]:leading-[100%] leading-11 font-medium tracking-[-2%]">
            Sign up for our newsletter
          </h2>
          <p className="text-[#344054] max-[481px]:text-sm text-lg font-helvetica font-light leading-[100%]">
            Be the first to know about releases and industry news and insights.
          </p>
        </div>

        <form className="w-full max-[481px]:h-12 h-full flex items-center">
          <input
            placeholder="Enter your email"
            className="border-[#443F41] border-[0.7px] max-h-14 h-full w-full placeholder:text-[#443F41] font-helvetica leading-6 px-3.5 py-4"
          />
          <button className="bg-[#0C111D] text-[#FFFFFF] font-helvetica leading-6 font-medium py-3 px-5">
            Subscribe
          </button>
        </form>
      </div>

      <hr className="border-[#667085] border-t w-full" />
    </section>
  );
};

export default HeroSection6;
