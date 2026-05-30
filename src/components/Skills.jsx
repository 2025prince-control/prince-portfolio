import { motion } from "framer-motion";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Tailwind CSS",
    "Python",
    "C++",
    "Git",
    "GitHub",
    "VS Code",
  ];

  return (

    <section
      id="skills"
      className="py-40 px-[5%] bg-[#dfd2c3]"
    >

      <div className="grid lg:grid-cols-[0.9fr_1.2fr] gap-20 items-start">

      

        <div className="sticky top-32">

          <p className="uppercase tracking-[6px] text-[#8d6e63] text-sm">
            Skills & Learning
          </p>

          <h2 className="heading-font text-7xl md:text-8xl leading-[0.95] mt-8 text-[#241612]">
            Technologies
            <br />
            I Work
            <br />
            With
          </h2>

          <p className="mt-12 text-[#5f4a43] text-lg leading-relaxed max-w-md">

            Passionate about building modern frontend
            interfaces and continuously improving my
            development skills through projects,
            experimentation and learning.

          </p>

          

          <div className="mt-14 space-y-6">

            <div className="bg-[#f5ede3] rounded-[30px] p-8 shadow-lg">

              <p className="uppercase tracking-[5px] text-[#8d6e63] text-sm">
                Currently Learning
              </p>

              <h3 className="heading-font text-3xl mt-5 text-[#241612]">
                DSA in C++
              </h3>

              <p className="mt-4 text-[#5f4a43] leading-relaxed">
                Solving problems consistently and
                improving logical thinking through
                data structures and algorithms.
              </p>

            </div>

            <div className="bg-[#2b1d18] text-white rounded-[30px] p-8 shadow-xl">

              <p className="uppercase tracking-[5px] text-[#d8b8a5] text-sm">
                Languages
              </p>

              <h3 className="heading-font text-3xl mt-5">
                English & German
              </h3>

              <p className="mt-4 text-[#d7c1b4] leading-relaxed">
                Comfortable communicating in English
                and currently exploring German as
                part of personal growth and learning.
              </p>

            </div>

          </div>

        </div>

        

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.4 }}
              className="bg-[#f5ede3] rounded-[40px] p-10 shadow-xl hover:bg-[#2b1d18] hover:text-white transition duration-500 border border-[#e5d8cb]"
            >

              <p className="text-sm uppercase tracking-[6px] text-[#a18477]">
                Skill
              </p>

              <h3 className="heading-font text-5xl mt-10 leading-tight">
                {skill}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Skills;