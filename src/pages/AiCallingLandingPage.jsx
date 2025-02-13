import React, { lazy } from "react";
import bannerImg from "../assets/images/banner.webp";
import SubHeading from "../components/SubHeading";
import { aiCallingAgentServices } from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import aiCallingAboutImg from "../assets/images/landingpage/ai-calling-about.jpg";
import AiCallingWhyChooseUs from "../components/landingPages/AiCalllingWhyChooseUs";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../components/JoinHappyCustomers")
);

const AiCallingLandingPage = ({ page }) => {
  return (
    <>
      <LandingHeader />
      <section id="banner" className="h-screen relative text-white">
        <div className="absolute top-0 w-full h-full bg-black/90"></div>
        <img
          loading="lazy"
          src={bannerImg}
          className="w-full h-full absolute -z-10 object-cover object-center"
          alt="AI Calling Agent Platform"
        />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
        >
          <p className="text-xl">
            Welcome to{" "}
            <span className="text-primary font-semibold">AIPROTOX</span>
          </p>
          <h1 className="heading-1 text-stroke">
            Elevating Customer Connections with Intelligent Calling Solutions
          </h1>
          <p className="sub-heading">
            Intelligent Conversations, Seamless Interactions - Transforming
            Business Communications
          </p>
        </div>
      </section>

      <section id="about" className="text-white wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aiCallingAboutImg}
              className="object-cover h-full rounded-lg"
              alt="AI Calling Solutions"
              width="600"
              height="400"
            />
          </div>
          <div className="flex h-full items-center lg:items-start flex-col gap-7">
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="AI-Powered Calling Solutions" />
              <div className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full">
                <img
                  loading="lazy"
                  src={aiCallingAboutImg}
                  className="object-cover h-full rounded-lg w-full"
                  alt="AI Communication Platform"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Transforming Business Communications with Intelligent AI Agents
              </h2>
              <p className="desc">
                Our AI calling solutions revolutionize customer interactions
                through advanced natural language processing and machine
                learning. We provide 24/7 intelligent call agents that deliver
                personalized experiences, handle complex queries, and drive
                operational efficiency while maintaining human-like engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading heading="AI Calling Agent Services" />
        <h2 className="heading-2 max-w-[60rem] mx-auto text-center">
          Intelligent Call Management for Modern Businesses
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {aiCallingAgentServices.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              className="bg-secondary items-center rounded-lg p-5 flex text-center flex-col"
            >
              {service.icon}
              <h6 className="text-xl font-medium mt-2 text-white">
                {service.title}
              </h6>
              <p className="desc mt-2 !text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <AiCallingWhyChooseUs />
      <Testimonials />
      <ConnectWithUs />
      <JoinHappyCustomers />
      <ContactForm />
      <LandingFooter />
    </>
  );
};

export default AiCallingLandingPage;
