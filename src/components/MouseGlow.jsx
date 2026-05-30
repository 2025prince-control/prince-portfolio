import { useEffect, useState } from "react";

function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-[-10] blur-3xl opacity-20"
      style={{
        left: position.x - 200,
        top: position.y - 200,
        background: "radial-gradient(circle, #8b6b5c 0%, transparent 70%)",
      }}
    />
  );
}

export default MouseGlow;