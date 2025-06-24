import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "React.js",
    "Responsive Web Design",
    "Git/GitHub",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="flex justify-center">
              <div className="rounded-xl p-6 text-center hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">My Skills</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Bachelor of Computer Applications (BCA) </strong> -
                  IGNOU University (2021-2024)
                </li>

                <li>
                  <strong> Front-End Web Development </strong> - Dice Academy,
                  New Delhi (2024-2025)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Front-End Development Intern at Oasis Infobyte{" "}
                  </h4>

                  <li>
                    Built 4 responsive web apps using HTML, CSS, Tailwind, and
                    JavaScript.
                  </li>

                  <li>
                    Projects included a Calculator, Landing Page(Tribute), Login
                    system, and To-Do App.
                  </li>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// import React from "react";

// const About = () => {
//   const frontendSkills = ["HTML", "CSS", "TailwindCSS", "JavaScript", "React"];

//   return (
//     <section id="about" className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
//       <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
//         About Me
//       </h2>

//       <div className="bg-black border border-neutral-800 rounded-xl p-6 md:p-10 text-white">
//         <p className="text-center mb-8 text-neutral-300">
//           I’m a frontend developer who loves crafting clean, responsive user
//           interfaces. My goal is to build web experiences that are both visually
//           engaging and highly intuitive, with performance and accessibility
//           always in focus.
//         </p>

//         <div className="flex justify-center">
//           <div className="rounded-xl p-6 text-center hover:-translate-y-1 transition-all">
//             <h3 className="text-xl font-bold mb-4">Frontend</h3>
//             <div className="flex flex-wrap justify-center gap-2">
//               {frontendSkills.map((tech, key) => (
//                 <span
//                   key={key}
//                   className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
//                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
