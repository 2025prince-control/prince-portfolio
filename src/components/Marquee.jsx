function Marquee() {
  return (
    <section className="overflow-hidden py-10 bg-[#2b1d18] text-white">
      <div className="flex whitespace-nowrap animate-marquee gap-20">
        <h2 className="text-6xl heading-font">FRONTEND DEVELOPER</h2>
        <h2 className="text-6xl heading-font">REACT DEVELOPER</h2>
        <h2 className="text-6xl heading-font">CREATIVE THINKER</h2>
        <h2 className="text-6xl heading-font">UI ENTHUSIAST</h2>
      </div>
    </section>
  );
}

export default Marquee;