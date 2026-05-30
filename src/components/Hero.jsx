import { motion } from "framer-motion";
import { Link } from "react-scroll";
import prince from "../assets/prince.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-[5%] pt-32"
    >

      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="uppercase tracking-[5px] text-[#7b5e57] text-sm">
            Personal Portfolio
          </p>

          <h1 className="heading-font big-heading mt-6">
            Prince
            <br />
            Rajesh
            <br />
            Yadav
          </h1>

          <p className="mt-10 text-lg text-[#5b463f] leading-relaxed max-w-xl">
            Frontend developer passionate about
            modern aesthetics, smooth digital experiences
            and creative web interfaces.
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">

            <a
              href="#projects"
              className="premium-btn cursor-pointer"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-[#2c1f1a] px-8 py-4 rounded-full hover:bg-[#2c1f1a] hover:text-white transition duration-500 cursor-pointer"
            >
              Contact Me
            </a>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          <div className="image-hover glow">

            <img
              src={prince}
              className="rounded-[40px] h-[700px] object-cover"
            />

          </div>

          <div className="absolute -bottom-10 -left-10 glass p-8 rounded-[30px] max-w-xs">

            <h3 className="text-3xl heading-font">
              Creative
              Developer
            </h3>

            <p className="mt-4 text-sm text-[#5b463f]">
              Building modern and aesthetic
              digital experiences.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;