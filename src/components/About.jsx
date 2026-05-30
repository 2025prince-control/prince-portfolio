import { motion } from "framer-motion";

import {
  FaBaseballBall,
  FaFilm,
  FaBookOpen,
  FaGamepad,
} from "react-icons/fa";

import prince from "../assets/prince.jpeg";

function About() {

  const interests = [
    {
      icon: <FaBaseballBall />,
      title: "Cricket",
    },

    {
      icon: <FaFilm />,
      title: "Movies",
    },

    {
      icon: <FaBookOpen />,
      title: "Books",
    },

    {
      icon: <FaGamepad />,
      title: "Game Dev",
    },
  ];

  return (

    <section
      id="about"
      className="py-40 px-[5%] bg-[#e2d5c7]"
    >

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-24 items-center">

        

        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

          <div className="relative w-fit">

           

            <div className="absolute inset-0 translate-x-5 translate-y-5 border border-[#c8b6a7] rounded-[45px]" />

            

            <div className="relative overflow-hidden rounded-[45px] shadow-2xl w-[480px] h-[620px]">

              <img
                src={prince}
                alt="Prince Rajesh Yadav"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />

            </div>

          </div>

        </motion.div>

        

        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >

          

          <p className="uppercase tracking-[6px] text-[#8d6e63] text-sm">

            About Me

          </p>

          

          <h2 className="heading-font text-6xl md:text-8xl leading-[0.9] mt-8 text-[#241612]">

            Creative
            <br />
            Developer
            <br />
            Mindset

          </h2>

        

          <p className="mt-12 text-[#5f4a43] text-xl leading-relaxed max-w-2xl">

            I enjoy building modern digital experiences,
            learning new technologies and experimenting
            with creative ideas. I’m a free minded and
            curious person who loves staying chill while
            continuously growing as a developer.

          </p>

         

          <p className="mt-8 text-[#7a5c52] text-lg leading-relaxed max-w-2xl">

            Currently focused on Full Stack Development,
            while also exploring Game Development,
            Cyber Security and modern frontend systems.

          </p>

         

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

            {interests.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="bg-[#f5ede3] border border-[#d7c7ba] rounded-[28px] p-6 text-center shadow-lg hover:bg-[#2b1d18] hover:text-[#f5ede3] transition duration-500"
              >

                <div className="text-3xl flex justify-center mb-4">

                  {item.icon}

                </div>

                <p className="text-sm tracking-[3px] uppercase">

                  {item.title}

                </p>

              </motion.div>

            ))}

          </div>

          

          <div className="mt-14 bg-[#2b1d18] text-[#f5ede3] rounded-[35px] p-8 shadow-2xl">

            <p className="uppercase tracking-[5px] text-sm text-[#d8b8a5]">

              Current Phase

            </p>

            <p className="mt-5 text-lg leading-relaxed text-[#efe2d8]">

              Learning Full Stack Development,
              improving problem solving skills,
              exploring creative UI systems and
              slowly entering the world of
              Game Development & Cyber Security.

            </p>

          </div>

        </motion.div>

      </div>

    </section>

  );
}

export default About;