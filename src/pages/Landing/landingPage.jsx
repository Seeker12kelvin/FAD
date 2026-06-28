import logo from "../../assets/images/logo.png";
import Main from "../../components/ui/Landing Page/main";
import firstPic from "../../assets/images/landingPic1.png";
import Footer from "../../components/ui/Landing Page/footer";
import Header from "../../components/ui/Landing Page/header";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b-[#667085] border-b flex justify-center p-10">
          <img src={firstPic} alt="" className="max-h-50.75 max-w-206.5" />
        </div>

        <div className="flex gap-3 justify-center items-center px-10 h-50">
          <div className="flex gap-4 justify-center items-end">
            <img
              src={logo}
              alt=""
              className="max-h-[116.83px] max-w-[186.09px]"
            />

            <div className="font-inter text-[29.52px] font-bold leading-[100%]">
              <p>Fashion</p>
              <p>Africa</p>
              <p>Daily</p>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default LandingPage;
