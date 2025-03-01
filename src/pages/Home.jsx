import React from "react";
import icon1 from "../assets/images/Vector.png";
import icon2 from "../assets/images/Vector(1).png";
import icon3 from "../assets/images/Vector(2).png";
import bannerImg from "../assets/images/banner.webp";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import ServiceTabs from "../components/website/ServiceTab";
const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen relative text-white">
        <div className="absolute top-0 w-full h-full bg-black/90"></div>
        <img
          loading="lazy"
          src={bannerImg}
          srcset={`${bannerImg} 400w, 
          ${bannerImg} 800w, 
          ${bannerImg} 1200w`}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          class="w-full h-full absolute -z-10 object-cover object-center"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
        >
          <p className="sub-heading">
            Welcome to
            {/* <span className="text-primary font-semibold">
              AIPROTOX
            </span> */}
          </p>
          <h1 className="heading text-stroke">AIPROTOX</h1>
          <p className="sub-heading">
            AI Meets Integrity - Empowering Innovation with Intelligence
          </p>
        </div>
      </section>
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        <div className="bg-[#0A1828] rounded-lg p-5">
          <div className="flex gap-3 mb-4">
            <img
              loading="lazy"
              src={icon1}
              width="50"
              height="50"
              className="w-[3rem] object-contain"
              alt=""
            />
            <p className="text-lg leading-tight font-medium">
              Mobile Application Development
            </p>
          </div>
          <p className="desc">
            Achieve Mobile Supremacy through Custom App Development Solutions
          </p>
        </div>
        <div className="bg-[#0A1828] rounded-lg p-5">
          <div className="flex items-center gap-3 mb-4">
            <img
              loading="lazy"
              src={icon2}
              width="50"
              height="50"
              className="w-[3rem] object-contain"
              alt=""
            />
            <p className="text-lg leading-tight font-medium">MVP Development</p>
          </div>
          <p className="desc">
            Turning ideas into impactful products quickly with scalable Minimum
            Viable Products tailored to market needs.
          </p>
        </div>
        <div className="bg-[#0A1828] rounded-lg p-5">
          <div className="flex gap-3 mb-4">
            <img
              loading="lazy"
              src={icon3}
              width="50"
              height="50"
              className="w-[3rem] object-contain"
              alt=""
            />
            <p className="text-lg leading-tight font-medium">
              Website Application Development
            </p>
          </div>
          <p className="desc">
            Our full-stack development services provideend - to -end solutions
          </p>
        </div>
      </div>
      <section className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg}
              width="600"
              height="600"
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg}
                  width="200"
                  height="200"
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Transforming Visions into Reality with Advanced Tech.
              </h2>
              <p className="desc">
                AtAIPROTOX, we transform bold ideas into powerful digital
                solutions that drive remarkable change across industries.
                Leveraging the potential of cutting-edge technologies such as
                artificial intelligence, we empower businesses to unlock new
                opportunities, streamline complex processes, and achieve
                strategic growth.
                <br />
                <br />
                What sets us apart is our unwavering commitment to transparency,
                reliability, and customer-centricity in everything we do. From
                data-driven insights to innovative product development, we
                partner with organizations to tackle today’s challenges while
                preparing for tomorrow’s opportunities.
                <br />
                <br />
                Our solutions are meticulously designed not just to meet current
                demands but to anticipate the ever-changing landscape of
                technology, ensuring your business remains ahead of the curve.
                At AIPROTOX, we don’t just create solutions; we shape the
                future.
              </p>
            </div>
            <div className="w-fit mt-4 justify-center lg:justify-start">
              <Link to="/about-us" className="primary-btn">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ServiceTabs />
      {/* <AllServices /> */}
      <TrustWorthySection />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
