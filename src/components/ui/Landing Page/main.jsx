import Report from "./report";
import AdSection from "./adSection";
import HeroSection from "./heroSection";
import HeroSection2 from "./heroSection2";
import HeroSection3 from "./heroSection3";
import HeroSection6 from "./heroSection6";
import HeroSection4 from "./heroSection4";
import HeroSection5 from "./heroSection5";
import SignUpSection from "./signUpSection";
import FadEditSection from "./fadEditSection";

const Main = () => {
  return (
    <main className="w-full h-full overflow-hidden flex flex-col gap-4">
      <HeroSection />
      <SignUpSection />
      <HeroSection2 />
      <FadEditSection />
      <AdSection />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection5 />
      <Report />
      <HeroSection6 />
    </main>
  );
};

export default Main;
