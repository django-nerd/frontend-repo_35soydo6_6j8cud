import { motion } from "framer-motion";
import { Leaf, Trash2, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 font-semibold text-slate-800"
       >
          <Leaf className="h-6 w-6 text-emerald-600" />
          <span>EcoSmart Waste</span>
        </motion.a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#features" className="hover:text-emerald-700 transition-colors">Features</a>
          <a href="#schedule" className="hover:text-emerald-700 transition-colors">Schedule</a>
          <a href="#map" className="hover:text-emerald-700 transition-colors flex items-center gap-1">
            <MapPin className="h-4 w-4" /> Map
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#schedule"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-emerald-700 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
            Schedule Pickup
          </a>
        </div>
      </div>
    </header>
  );
}
