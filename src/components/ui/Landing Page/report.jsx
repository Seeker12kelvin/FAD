import { IoArrowForward } from "react-icons/io5";

const Report = () => {
  return (
    <section className="bg-[#000000] max-[481px]:px-3 max-[481px]:py-2 px-10 py-1.5 flex justify-between items-center">
      <h2 className="text-white font-ivy font-medium tracking-[-2%] max-[481px]:text-sm text-lg leading-[100%] max-w-297.5 ">
        What Should We Be Reporting Now?
      </h2>
      <button className="flex gap-1 items-center py-1.5 px-2 bg-white max-[481px]:text-[10px] text-xs font-medium font-helvetica leading-[100%]">
        Write To Us
        <span>
          <IoArrowForward size={20} />
        </span>
      </button>
    </section>
  );
};

export default Report;
