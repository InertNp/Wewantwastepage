import { motion } from "framer-motion";
import type { MouseEvent as ReactMouseEvent } from "react";
import React, { useEffect, useRef, useState } from "react";
// Simple utility function to replace cn
const classNames = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(" ");
};

// CanvasRevealEffect component implementation
const CanvasRevealEffect = ({
  colors = [
    [59, 130, 246],
    [139, 92, 246],
  ],
  dotSize = 3,
  animationSpeed = 5,
  containerClassName = "",
}: {
  colors?: number[][];
  dotSize?: number;
  animationSpeed?: number;
  containerClassName?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeObserver = new ResizeObserver(() => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    });

    resizeObserver.observe(canvas);

    const dots: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: number[];
    }[] = [];

    const createDots = () => {
      dots.length = 0;
      const width = canvas.width;
      const height = canvas.height;
      const numDots = Math.floor((width * height) / 1000);

      for (let i = 0; i < numDots; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * animationSpeed,
          vy: (Math.random() - 0.5) * animationSpeed,
          color,
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dot.color[0]}, ${dot.color[1]}, ${dot.color[2]}, 0.7)`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    createDots();
    const animationId = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, [colors, dotSize, animationSpeed]);

  return (
    <div
      className={containerClassName}
      style={{ width: "100%", height: "100%" }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
};

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - left,
      y: clientY - top,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const maskStyle = {
    backgroundColor: color,
    WebkitMaskImage: `radial-gradient(
      ${radius}px circle at ${mousePosition.x}px ${mousePosition.y}px,
      white,
      transparent 80%
    )`,
    maskImage: `radial-gradient(
      ${radius}px circle at ${mousePosition.x}px ${mousePosition.y}px,
      white,
      transparent 80%
    )`,
  };

  return (
    <div
      className={classNames(
        "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={maskStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
      {children}
    </div>
  );
};
