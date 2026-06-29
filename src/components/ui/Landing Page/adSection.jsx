import adSectionPic1 from "../../../assets/images/adSectionPic1.jpg";

const AdSection = () => {
  return (
    <section className="max-[768px]:px-3 max-[768px]:pb-5 min-[769px]:max-[1200px]:px-6 px-10 flex flex-col gap-10 pb-10">
      <hr className="border-[#667085] border" />
      <img src={adSectionPic1} alt="An ad" className="h-145.75 object-cover" />
    </section>
  );
};

export default AdSection;
