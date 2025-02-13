import React from "react";
import { aicallingwhychooseus } from "../../constant";

const AiCallingWhyChooseUs = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aicallingwhychooseus.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-black">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiCallingWhyChooseUs;
