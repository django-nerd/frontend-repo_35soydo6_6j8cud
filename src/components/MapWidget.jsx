import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function MapWidget() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    // Simple animated dots to mimic bin locations
    const count = 20;
    const dots = Array.from({ length: count }).map((_, i) => {
      const d = document.createElement("div");
      d.className = "absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600/80 shadow";
      d.style.left = Math.random() * 100 + "%";
      d.style.top = Math.random() * 100 + "%";
      el.appendChild(d);
      return d;
    });
    return () => dots.forEach((d) => d.remove());
  }, []);

  return (
    <section id="map" className="py-20 bg-gradient-to-t from-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-slate-900">Live Bin Map</h2>
          <p className="text-slate-600">A lightweight preview of bin hotspots. Integrate with any map provider later.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="relative h-80 rounded-xl border border-slate-200 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center overflow-hidden"
        >
          <div ref={ref} className="absolute inset-0" />
        </motion.div>
      </div>
    </section>
  );
}
