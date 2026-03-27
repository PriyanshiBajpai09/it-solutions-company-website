import React, { useEffect, useState } from "react";

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  // 🔥 FETCH FROM BACKEND
  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-skills-gradient clip-path-custom"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">OUR WORK</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4">
          Showcasing our latest and best digital solutions
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <div
            key={item._id}
            onClick={() => setSelected(item)}
            className="group border border-gray-700 rounded-xl bg-[#0f172a] p-4 cursor-pointer 
            transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(130,69,236,0.5)]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg mb-4 h-40 w-full object-cover"
            />

            <h3 className="text-lg font-semibold text-white group-hover:text-purple-400">
              {item.title}
            </h3>

            <p className="text-sm text-gray-400 mt-2 line-clamp-2">
              {item.description}
            </p>

            {/* OPTIONAL TAGS (agar future me add kare) */}
            {item.tech && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#1e1b2e] text-purple-400 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0f172a] rounded-xl w-full max-w-xl max-h-[75vh] overflow-y-auto p-5 relative shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-xl text-white bg-black/50 rounded-full px-2 py-1 hover:text-purple-400 z-50"
            >
              ✕
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="rounded-lg mb-4 w-full h-52 md:h-64 object-cover"
            />

            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {selected.title}
            </h3>

            <p className="text-gray-400 mb-4 text-sm md:text-base">
              {selected.description}
            </p>

            {/* TAGS */}
            {selected.tech && (
              <div className="flex flex-wrap gap-2 mb-5">
                {selected.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#1e1b2e] text-purple-400 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* BUTTONS */}
            <div className="flex gap-3">
              <a
                href={selected.github}
                target={selected.live === "#" ? "_self" : "_blank"}
                rel="noreferrer"
                className="flex-1 bg-gray-700 hover:bg-purple-700 text-white py-2 rounded-lg text-center text-sm"
              >
                View Code
              </a>
              <a
                href={selected.live}
                target={selected.live === "#" ? "_self" : "_blank"}
                rel="noreferrer"
                className="flex-1 bg-purple-600 hover:bg-purple-800 text-white py-2 rounded-lg text-center text-sm"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
