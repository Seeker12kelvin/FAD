import heroSectionPic1 from "../../../assets/images/heroSection6Pic1.png";

const HeroSection6 = () => {
  return (
    <section className="flex flex-col items-center gap-10 p-10">
      <hr className="border-[#322418] border-t-[1.5px] w-full" />

      <img src={heroSectionPic1} alt="" className="max-w-259 h-full" />

      <hr className="border-[#322418] border-t-[1.5px] w-full" />

      <div className="w-full h-18.5 flex gap-8 items-center px-4">
        <div className="max-w-180.25 w-full flex flex-col gap-2">
          <h2 className="text-4xl text-[#000000] font-ivy leading-11 font-medium tracking-[-2%]">
            Sign up for our newsletter
          </h2>
          <p className="text-[#344054] text-lg font-helvetica font-light leading-[100%]">
            Be the first to know about releases and industry news and insights.
          </p>
        </div>

        <form className="w-full h-full flex items-center">
          <input
            placeholder="Enter your email"
            className="border-[#443F41] border-[0.7px] max-h-14 h-full w-full placeholder:text-[#443F41] font-helvetica leading-6 px-3.5 py-4"
          />
          <button className="bg-[#0C111D] text-[#FFFFFF] font-helvetica leading-6 font-medium py-4 px-5">
            Subscribe
          </button>
        </form>
      </div>

      <hr className="border-[#322418] border-t-[1.5px] w-full" />
    </section>
  );
};

export default HeroSection6;
