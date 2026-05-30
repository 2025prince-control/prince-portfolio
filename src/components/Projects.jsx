import { motion } from "framer-motion";

function Projects() {

  const projects = [

    {
      number: "01",
      title: "Flappy Bird Game",
      tech: "HTML • CSS • JavaScript",
      desc:
        "A smooth browser-based Flappy Bird clone focused on animations, score tracking and responsive gameplay.",
      color: "from-[#3d2c25] to-[#6f4e45]",
    },

    {
      number: "02",
      title: "BMI Calculator",
      tech: "React JS",
      desc:
        "Modern BMI calculator with clean UI, category detection and responsive React components.",
      color: "from-[#4e342e] to-[#8d6e63]",
    },

    {
      number: "03",
      title: "Netflix Frontend Clone",
      tech: "HTML • CSS • JavaScript",
      desc:
        "Responsive Netflix inspired landing page with cinematic sections and modern layouts.",
      color: "from-[#2b1d18] to-[#5d4037]",
    },

    {
      number: "04",
      title: "Red Bull Frontend",
      tech: "HTML • CSS • JavaScript",
      desc:
        "A modern Red Bull inspired interface focused on strong visuals, smooth layouts and bold UI sections.",
      color: "from-[#3b2a24] to-[#795548]",
    },

    {
      number: "05",
      title: "Memory Card Flip Game",
      tech: "HTML • CSS • JavaScript",
      desc:
        "Interactive card matching game with smooth flip animations and responsive gameplay experience.",
      color: "from-[#2f211d] to-[#6d4c41]",
    },

  ];

  return (

    <section
      id="projects"
      className="py-40 px-[5%] bg-[#e2d5c7]"
    >

      <div className="mb-24">

        <p className="uppercase tracking-[6px] text-[#8d6e63] text-sm">
          Selected Work
        </p>

        <h2 className="heading-font text-7xl md:text-8xl leading-[0.95] mt-6 text-[#241612]">
          Featured
          <br />
          Projects
        </h2>

      </div>

      <div className="space-y-14">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center bg-[#f5ede3] rounded-[45px] p-10 shadow-xl border border-[#dbc8bb]"
          >

           

            <div
              className={`h-[240px] rounded-[35px] bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
            >

              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent)]" />

              <h3 className="heading-font text-5xl text-white text-center px-8 leading-tight">
                {project.title}
              </h3>

            </div>

            

            <div>

              <p className="text-sm tracking-[5px] uppercase text-[#8d6e63]">
                {project.number}
              </p>

              <h3 className="heading-font text-5xl mt-5 text-[#241612]">
                {project.title}
              </h3>

              <p className="mt-4 text-[#8d6e63] font-medium">
                {project.tech}
              </p>

              <p className="mt-8 text-lg leading-relaxed text-[#5f4a43] max-w-2xl">
                {project.desc}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default Projects;