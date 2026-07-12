"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
};

export default function TextReveal({
  children,
  as: Tag = "p",
  className,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.textContent?.split("");
    if (!chars) return;

    el.textContent = "";

    const wrapper = document.createElement("span");
    wrapper.style.display = "inline";
    wrapper.style.whiteSpace = "pre-wrap";

    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? " " : char;
      span.style.display = "inline";
      if (char !== " ") {
        span.style.opacity = "0";
      }
      wrapper.appendChild(span);
    });

    el.appendChild(wrapper);

    const charSpans = wrapper.querySelectorAll("span:not(:empty)");

    gsap.fromTo(
      charSpans,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.03,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [children]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
