import React from "react";

const processSteps = [
  {
    id: 1,
    title: "Requirement Analysis",
    subtitle: "Understanding Client Needs",
    desc: "We gather and analyze client requirements to define project goals and scope clearly.",
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },
  {
    id: 2,
    title: "Planning & Strategy",
    subtitle: "Project Roadmap",
    desc: "We create a structured plan and choose the right technologies for efficient execution.",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: 3,
    title: "Development",
    subtitle: "Building the Product",
    desc: "Our team develops scalable and high-performance applications using modern technologies.",
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
  },
  {
    id: 4,
    title: "Testing & Deployment",
    subtitle: "Quality Assurance",
    desc: "We test thoroughly and deploy the product ensuring performance, security, and reliability.",
    icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  },
];

const Approach = () => {
  return (
    <section
      id="process"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">OUR PROCESS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Our structured approach ensures quality, efficiency, and successful project delivery
        </p>
      </div>

      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={step.icon}
                alt={step.title}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>

            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 
              shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(130,69,236,0.6)]
              ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } ml-8 sm:ml-0 sm:w-[45%]`}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {step.title}
              </h3>
              <h4 className="text-sm text-purple-400 mt-1">
                {step.subtitle}
              </h4>

              <p className="mt-4 text-gray-400">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;