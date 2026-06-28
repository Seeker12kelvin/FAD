const SignUpSection = () => {
  return (
    <section className="min-h-48.5 h-fit bg-[#000000] flex items-center max-[481px]:justify-center justify-between max-[481px]:px-3 max-[481px]:py-6 py-15 px-10">
      <div className="w-full max-[481px]:min-h-18.5 min-[481px]:h-18.5 flex max-[481px]:flex-col gap-8 items-center px-4">
        <div className="max-w-180.25 w-full flex flex-col gap-2">
          <h2 className="max-[481px]:text-xl max-[481px]:leading-[100%] text-4xl text-[#FFFFFF] font-ivy leading-11 font-medium tracking-[-2%]">
            Sign up for our newsletter
          </h2>
          <p className="text-[#EAECF0] max-[481px]:text-sm text-lg font-helvetica font-light leading-[100%]">
            Be the first to know about releases and industry news and insights.
          </p>
        </div>

        <form className="w-full h-full flex items-center">
          <input
            placeholder="Enter your email"
            className="border-[#443F41] border-[0.7px] max-h-14 h-full w-full placeholder:text-[#443F41] font-helvetica leading-6 px-3.5 py-4"
          />
          <button className="bg-[#FCFCFD] text-[#344054] font-helvetica leading-6 font-medium py-4 px-5">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUpSection;
