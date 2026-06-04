"use client";

import { useEffect, useRef, useState } from "react";
export function Reveal({ children, delay = 0, as: As = "div", className = "", style, }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    setTimeout(() => setVisible(true), delay);
                    io.disconnect();
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
        io.observe(el);
        return () => io.disconnect();
    }, [delay]);
    return (<As ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={style}>
      {children}
    </As>);
}
