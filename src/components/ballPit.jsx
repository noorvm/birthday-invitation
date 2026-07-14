import { useRef, useEffect } from "react";

export default function Ballpit({
  count = 120,
  background = "#0b0a13",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: 120,
    };

   const colors = [
  "purple",
  "white",
  "purple",
  "purple",
  "white",
  "purple",
];

    const balls = [];

    class Ball {
      constructor() {
        this.radius = Math.random() * 20 + 30;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = (Math.random() - 0.5) * 3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < this.radius || this.x > width - this.radius)
          this.vx *= -1;

        if (this.y < this.radius || this.y > height - this.radius)
          this.vy *= -1;

        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          this.vx += dx / dist;
          this.vy += dy / dist;
        }

        this.vx *= 0.995;
        this.vy *= 0.995;
      }

      draw() {
  // Main gradient
  const gradient = ctx.createRadialGradient(
    this.x - this.radius * 0.35,
    this.y - this.radius * 0.35,
    this.radius * 0.2,
    this.x,
    this.y,
    this.radius
  );

  if (this.color === "purple") {
    gradient.addColorStop(0, "#ffffff");
    gradient.addColorStop(0.15, "#bfa8ff");
    gradient.addColorStop(0.5, "#7c4dff");
    gradient.addColorStop(1, "#2d1b8f");
  } else {
    gradient.addColorStop(0, "#ffffff");
    gradient.addColorStop(0.4, "#f2f2f2");
    gradient.addColorStop(1, "#9b9b9b");
  }

  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = gradient;

  // Glow
  ctx.shadowBlur = 20;
  ctx.shadowColor = "rgba(255,255,255,0.35)";
  ctx.fill();

  ctx.shadowBlur = 0;

  // Gloss highlight
  ctx.beginPath();
  ctx.arc(
    this.x - this.radius * 0.3,
    this.y - this.radius * 0.35,
    this.radius * 0.35,
    0,
    Math.PI * 2
  );

  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.fill();
}
    }

    for (let i = 0; i < count; i++) {
      balls.push(new Ball());
    }

    function animate() {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      balls.forEach((ball) => {
        ball.update();
        ball.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
    };
  }, [count, background]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}