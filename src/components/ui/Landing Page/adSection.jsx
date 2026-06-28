import adSectionPic1 from "../../../assets/images/adSectionPic1.jpg";

const AdSection = () => {
  return (
    <section className="px-10 flex flex-col gap-10 pb-10">
      <hr className="border-[#322418] border-[1.5px]" />
      <img src={adSectionPic1} alt="An ad" className="h-145.75 object-cover" />
    </section>
  );
};

export default AdSection;
