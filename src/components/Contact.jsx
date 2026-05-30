import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="py-40 px-[5%] bg-[#2b1d18] text-white"
    >

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[6px] text-[#c6a992] text-sm">
              Contact
            </p>

            <h2 className="heading-font text-6xl md:text-8xl leading-none mt-8">
              Let's
              <br />
              Connect
            </h2>

          </div>

          <div className="space-y-8">

            <a
              href="https://github.com/2025prince-control"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 bg-[#3b2a24] hover:bg-[#4b352d] transition duration-500 p-8 rounded-[30px]"
            >

              <FaGithub className="text-4xl" />

              <div>
                <p className="text-sm text-[#c6a992] uppercase tracking-[4px]">
                  GitHub
                </p>

                <h3 className="text-2xl mt-2">
                  @2025prince-control
                </h3>
              </div>

            </a>

            <a
              href="https://www.instagram.com/__cheeku.__04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 bg-[#3b2a24] hover:bg-[#4b352d] transition duration-500 p-8 rounded-[30px]"
            >

              <FaInstagram className="text-4xl" />

              <div>
                <p className="text-sm text-[#c6a992] uppercase tracking-[4px]">
                  Instagram
                </p>

                <h3 className="text-2xl mt-2">
                  @__cheeku.__04
                </h3>
              </div>

            </a>

            <a
              href="mailto:princerajeshyadav11@gmail.com"
              className="flex items-center gap-6 bg-[#3b2a24] hover:bg-[#4b352d] transition duration-500 p-8 rounded-[30px]"
            >

              <div className="text-4xl">
                ✉️
              </div>

              <div>
                <p className="text-sm text-[#c6a992] uppercase tracking-[4px]">
                  Email
                </p>

                <h3 className="text-2xl mt-2 break-all">
                  princerajeshyadav11@gmail.com
                </h3>
              </div>

            </a>

            <a
              href="https://www.linkedin.com/in/prince-yadav-b04644370"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 bg-[#3b2a24] hover:bg-[#4b352d] transition duration-500 p-8 rounded-[30px]"
            >

              <FaLinkedin className="text-4xl" />

              <div>
                <p className="text-sm text-[#c6a992] uppercase tracking-[4px]">
                  LinkedIn
                </p>

                <h3 className="text-2xl mt-2">
                  Prince Yadav
                </h3>
              </div>

            </a>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;