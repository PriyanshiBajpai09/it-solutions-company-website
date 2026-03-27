import React from "react";
import Tilt from "react-parallax-tilt";
import { FaCode, FaMobileAlt, FaPalette, FaRobot } from "react-icons/fa";

const ServicesInfo = [
  {
    title: "Web Solutions",
    services: [
      {
        name: "Web Development",
        icon: <FaCode />,
        description: "We build fast, scalable and responsive web applications.",
      },
      {
        name: "UI/UX Design",
        icon: <FaPalette />,
        description: "Designing modern and user-friendly interfaces.",
      },
    ],
  },
  {
    title: "Digital Solutions",
    services: [
      {
        name: "App Development",
        icon: <FaMobileAlt />,
        description: "Creating cross-platform mobile applications.",
      },
      {
        name: "AI Solutions",
        icon: <FaRobot />,
        description: "Integrating AI-powered features for smarter systems.",
      },
    ],
  },
];

const Services = () => (
  <section
    id="services"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SERVICES</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        We provide high-quality web development services to build scalable and
        user-friendly applications
      </p>
    </div>


    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {ServicesInfo.map((category) => (
        <div
          key={category.title}
          className="group bg-gray-900 px-6 sm:px-10 py-8 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
          transition-all duration-300
          hover:shadow-[0_0_35px_rgba(130,69,236,0.6)]
          hover:border-purple-500
          hover:-translate-y-2"
        >
          <h3 className="text-2xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.05}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.services.map((service) => (
                <div
                  key={service.name}
                  className="flex flex-col items-center border border-gray-700 rounded-2xl py-4 px-3 text-center hover:border-purple-500 transition"
                >
                  <div className="text-3xl text-purple-400 mb-2">
                    {service.icon}
                  </div>

                  <h4 className="text-sm text-white font-semibold">
                    {service.name}
                  </h4>

                  <p className="text-xs text-gray-400 mt-1">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
