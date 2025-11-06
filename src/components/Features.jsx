import { motion } from "framer-motion";
import { Radar, Route, Clock, Recycle } from "lucide-react";

const features = [
  {
    title: "Bin Level Monitoring",
    desc: "IoT-enabled sensors report fill levels to prioritize collections.",
    icon: Radar,
  },
  {
    title: "Route Optimization",
    desc: "AI suggests the most efficient pickup routes to reduce emissions.",
    icon: Route,
  },
  {
    title: "Smart Scheduling",
    desc: "Residents can request pickups and receive ETA updates.",
    icon: Clock,
  },
  {
    title: "Recycling Insights",
    desc: "Track diversion rates and educate communities with tips.",
    icon: Recycle,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Powerful, Sustainable Features</h2>
          <p className="text-slate-600 mt-2">Built to scale for municipalities, campuses, and communities.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <f.icon className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
