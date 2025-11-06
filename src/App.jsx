import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ScheduleForm from "./components/ScheduleForm";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ScheduleForm />
      </main>
      <footer className="border-t border-slate-200 mt-10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} EcoSmart Waste. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-emerald-700">Features</a>
            <a href="#schedule" className="hover:text-emerald-700">Schedule</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
