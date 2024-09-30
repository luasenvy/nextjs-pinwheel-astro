"use client";

import { useEffect, useRef } from "react";

interface CounterProps {
  number: number;
  speed: number;
}

export default function Counter({ number, speed }: CounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;

    const animate = () => {
      const value = +Number(counter.getAttribute("aria-valuenow"));
      const data = +Number(counter.innerText);

      const time = value / speed;
      if (data >= value) return (counter.innerText = String(value));

      counter.innerText = String(Math.ceil(data + time));
      setTimeout(animate, 1);
    };

    animate();
  }, [counterRef]);

  return (
    <span ref={counterRef} className="count" aria-valuenow={number}>
      0
    </span>
  );
}
