function Footer() {
  return (
    <footer className="bg-[#1e1411] text-white py-12 px-[5%]">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">

        <div>

          <h2 className="heading-font text-4xl">
            Prince Rajesh Yadav
          </h2>

          <p className="text-[#b89f91] mt-3">
            Frontend Developer • React Developer • Creative Thinker
          </p>

        </div>

        <div className="text-center lg:text-right">

          <p className="text-[#b89f91]">
            Built with React + Vite + Tailwind CSS
          </p>

          <p className="mt-2 text-sm text-[#8f7568]">
            © 2026 All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;