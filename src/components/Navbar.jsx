import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {

  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "#home" },
    { name: "About", to: "#about" },
    { name: "Skills", to: "#skills" },
    { name: "Projects", to: "#projects" },
    { name: "Open Source", to: "#opensource" },
    { name: "Timeline", to: "#timeline" },
    { name: "Contact", to: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 nav-blur border-b border-[#d8c8bf]">

      <div className="max-w-7xl mx-auto px-[5%] py-5 flex justify-between items-center">

        <h1 className="heading-font text-3xl">
          Prince.
        </h1>

        <ul className="hidden md:flex gap-10">

          {navLinks.map((item) => (

            <li key={item.to}>

              <a
                href={item.to}
                className="hover:text-[#7a5c52] transition duration-300"
              >
                {item.name}
              </a>

            </li>

          ))}

        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {open && (

        <div className="md:hidden px-[5%] pb-6 bg-[#f5ede3]">

          {navLinks.map((item) => (

            <a
              key={item.to}
              href={item.to}
              className="block py-3"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>

          ))}

        </div>

      )}

    </nav>
  );
}

export default Navbar;