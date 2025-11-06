import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8fV3x9oQ2Xq4l3mN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-white/30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Smart Waste Management
          </h1>
          <p className="text-lg text-slate-700 max-w-xl">
            Optimize collection routes, schedule pickups, and monitor bin levels in real time. Make your city cleaner and greener with data-driven insights.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#schedule" className="rounded-lg bg-emerald-600 text-white px-6 py-3 font-medium shadow hover:bg-emerald-700 transition-colors">Schedule a Pickup</a>
            <a href="#features" className="rounded-lg bg-white text-slate-900 px-6 py-3 font-medium shadow border border-slate-200 hover:bg-slate-50 transition-colors">Explore Features</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
