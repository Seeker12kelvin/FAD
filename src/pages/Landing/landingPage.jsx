import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import logo from "../../assets/images/logo.png";
import Main from "../../components/ui/Landing Page/main";
import firstPic from "../../assets/images/landingPic1.png";
import { UserContext } from "../../components/context/user";
import Footer from "../../components/ui/Landing Page/footer";
import Header from "../../components/ui/Landing Page/header";
import MobileMenu from "../../components/ui/Landing Page/mobileMenu";

const LandingPage = () => {
  const { menu } = useContext(UserContext);

  const siteUrl = "https://fashionafricadaily.com";
  const currentUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}`
      : siteUrl;

  const pageTitle =
    "Fashion Africa Daily | African Fashion News & Creative Ownership";
  const pageDescription =
    "Discover fashion news, African creatives, and stories that spotlight representation, ownership, and the future of style.";
  const socialImage = `${siteUrl}/icons.svg`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Fashion Africa Daily",
            url: currentUrl,
            description: pageDescription,
            publisher: {
              "@type": "Organization",
              name: "Fashion Africa Daily",
              url: "https://www.fashionafricadaily.com",
            },
          })}
        </script>
      </Helmet>

      <div className="flex flex-col">
        <div className="border-b-[#667085] border-b flex justify-center p-10 max-[481px]:px-4 max-[481px]:py-5">
          <img
            src={firstPic}
            alt=""
            className="max-h-50.75 h-full min-[481px]:max-w-206.5 max-[481px]:max-w-66.25 w-full"
          />
        </div>

        <div className="flex justify-center items-center max-[481px]:py-3 px-10 min-[481px]:min-h-50 h-full">
          <div className="flex gap-4 justify-center items-end">
            <img
              src={logo}
              alt=""
              className="max-[481px]:max-w-25 max-[481px]:max-h-[62.28px] max-h-[116.83px] h-full max-w-[186.09px] w-full"
            />

            <div className="font-inter max-[481px]:text-[15.73px] text-[29.52px] font-bold leading-[100%]">
              <p>Fashion</p>
              <p>Africa</p>
              <p>Daily</p>
            </div>
          </div>
        </div>
      </div>
      <Header />
      {menu && <MobileMenu />}
      <Main />
      <Footer />
    </>
  );
};

export default LandingPage;
