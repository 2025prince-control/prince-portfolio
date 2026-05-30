import { motion } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
  FaCode,
  FaFire,
} from "react-icons/fa";

function OpenSource() {

  return (

    <section
      id="opensource"
      className="py-40 px-[5%] bg-[#d8c8bb]"
    >

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-20 items-start">

        

        <div className="sticky top-32">

          <p className="uppercase tracking-[6px] text-[#8d6e63] text-sm">
            Open Source
          </p>

          <h2 className="heading-font text-7xl md:text-8xl leading-[0.95] mt-8 text-[#241612]">
            GitHub
            <br />
            Journey
          </h2>

          <p className="mt-10 text-[#5f4a43] text-lg leading-relaxed max-w-md">

            Learning through building, experimenting
            with projects and continuously improving
            development skills through GitHub and
            open source exploration.

          </p>

        </div>

        

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >

          <a
            href="https://github.com/2025prince-control"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#f5ede3] rounded-[45px] p-12 shadow-xl border border-[#ceb8aa] transition duration-500 hover:bg-[#2b1d18] hover:text-[#f5ede3] group"
          >

           

            <div className="flex items-center gap-5">

              <div className="w-20 h-20 rounded-full bg-[#2b1d18] text-[#f5ede3] flex items-center justify-center text-4xl group-hover:bg-[#f5ede3] group-hover:text-[#2b1d18] transition duration-500">

                <FaGithub />

              </div>

              <div>

                <p className="uppercase tracking-[5px] text-sm text-[#8d6e63] group-hover:text-[#d7c1b4]">
                  GitHub Profile
                </p>

                <h3 className="heading-font text-5xl mt-3">
                  2025prince-control
                </h3>

              </div>

            </div>

            

            <p className="mt-12 text-lg leading-relaxed text-[#5f4a43] group-hover:text-[#e7d7cd]">

              Building frontend projects, exploring
              open source and consistently learning
              modern technologies while improving
              problem solving and development skills.

            </p>

            

            <div className="grid md:grid-cols-3 gap-6 mt-14">

              

              <div className="bg-[#eadfd4] group-hover:bg-[#3a2923] rounded-[30px] p-8 transition duration-500">

                <FaCode className="text-3xl mb-6 text-[#6f4e45] group-hover:text-[#e7d7cd]" />

                <h4 className="heading-font text-4xl">
                  5+
                </h4>

                <p className="mt-3 text-sm tracking-[3px] uppercase text-[#7a5c52] group-hover:text-[#d7c1b4]">
                  Projects Built
                </p>

              </div>

              

              <div className="bg-[#eadfd4] group-hover:bg-[#3a2923] rounded-[30px] p-8 transition duration-500">

                <FaFire className="text-3xl mb-6 text-[#6f4e45] group-hover:text-[#e7d7cd]" />

                <h4 className="heading-font text-4xl">
                  107
                </h4>

                <p className="mt-3 text-sm tracking-[3px] uppercase text-[#7a5c52] group-hover:text-[#d7c1b4]">
                  Contributions
                </p>

              </div>

             

              <div className="bg-[#eadfd4] group-hover:bg-[#3a2923] rounded-[30px] p-8 transition duration-500">

                <FaCodeBranch className="text-3xl mb-6 text-[#6f4e45] group-hover:text-[#e7d7cd]" />

                <h4 className="heading-font text-4xl">
                  Growing
                </h4>

                <p className="mt-3 text-sm tracking-[3px] uppercase text-[#7a5c52] group-hover:text-[#d7c1b4]">
                  Developer Journey
                </p>

              </div>

            </div>

          </a>

        </motion.div>

      </div>

    </section>

  );
}

export default OpenSource;