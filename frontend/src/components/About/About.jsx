import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/profile2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-[7vw] md:px-[7vw] lg:px-[13vw] mt-20"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-20">
        {/* LEFT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            We Build
            <span className="text-[#8245ec] text-3xl sm:text-4xl md:text-5xl">
              {" "}
              Digital Solutions
            </span>{" "}
            🚀
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 text-gray-300">
            {/* Line 1 */}
            <div className="text-white">We specialize in</div>

            {/* Line 2 (Typing) */}
            <div className="text-[#8245ec] text-2xl mt-2">
              <TypeAnimation
                sequence={[
                  "Web Development",
                  1500,
                  "MERN Stack Applications",
                  1500,
                  "UI/UX Design",
                  1500,
                  "Scalable Systems",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            IT Solutions is a modern IT company focused on building scalable web
            applications. We help startups and businesses transform their ideas
            into powerful digital products using the latest technologies.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Get Started
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Tilt
            className="w-52 sm:w-64 md:w-80 lg:w-96 aspect-square border-4 border-purple-700 rounded-full overflow-hidden"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Equilx Company"
              className="w-full h-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
