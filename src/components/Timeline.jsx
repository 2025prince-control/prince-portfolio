import { motion } from "framer-motion";

function Timeline() {

  const journey = [

    {
      title: "Started College Journey",
      desc:
        "Entered ITM Skills University and started exploring the world of technology, programming and development.",
    },

    {
      title: "Learned Programming Fundamentals",
      desc:
        "Built a strong foundation in logic building, problem solving and programming concepts through consistent practice.",
    },

    {
      title: "Started Python",
      desc:
        "Learned Python basics and explored development fundamentals, improving understanding of coding structure and logic.",
    },

    {
      title: "Frontend Development Journey",
      desc:
        "Started learning HTML, CSS and JavaScript while building responsive and creative frontend interfaces.",
    },

    {
      title: "C++ & Problem Solving",
      desc:
        "Began learning C++ and currently exploring DSA to improve analytical thinking and coding efficiency.",
    },

    {
      title: "Started React JS",
      desc:
        "Entered modern frontend development by building reusable components and interactive user interfaces with React.",
    },

    {
      title: "Built Real Projects",
      desc:
        "Created multiple projects including Flappy Bird Game, Netflix Clone, Red Bull Frontend, BMI Calculator and Memory Card Game.",
    },

    {
      title: "Current Growth Phase",
      desc:
        "Currently focused on DSA in C++, improving frontend skills and exploring modern web technologies and open source.",
    },

    {
      title: "Future Vision",
      desc:
        "Aspiring to become a Full Stack Developer while also exploring Game Development and creative digital experiences.",
    },

  ];

  return (

    <section
      id="timeline"
      className="py-40 px-[5%] bg-[#d8c8bb]"
    >

      

      <div className="max-w-7xl mx-auto mb-32">

        <p className="uppercase tracking-[6px] text-[#8d6e63] text-sm">
          Journey
        </p>

        <h2 className="heading-font text-7xl md:text-8xl leading-[0.95] mt-8 text-[#241612]">
          My
          <br />
          Timeline
        </h2>

      </div>

     

      <div className="relative max-w-6xl mx-auto">

        

        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full bg-[#6f4e45]" />

        <div className="space-y-32">

          {journey.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >

             

              <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#2b1d18] border-[6px] border-[#e8dfd1] z-10" />

              

              <div
                className={`w-full md:w-[42%] bg-[#f5ede3] rounded-[40px] p-10 shadow-xl border border-[#d8c8bf] hover:-translate-y-2 transition duration-500`}
              >

                <p className="uppercase tracking-[4px] text-sm text-[#8d6e63]">
                  Step {index + 1}
                </p>

                <h3 className="heading-font text-4xl mt-5 text-[#241612] leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-[#5f4a43] leading-relaxed text-lg">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Timeline;