import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Phone, User, Server } from "lucide-react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export default function ScheduleForm() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", date: "" });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [requests, setRequests] = useState([]);
  const [backendStatus, setBackendStatus] = useState(null);

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  async function checkBackend() {
    try {
      const res = await fetch(`${API_BASE}/api/hello`);
      const data = await res.json();
      setBackendStatus(data?.message || "Connected");
    } catch (e) {
      setBackendStatus("Unable to reach backend");
    }
  }

  async function submit(e) {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    try {
      // In this sandbox, we demo connectivity with /api/hello and store requests locally.
      await checkBackend();
      setRequests((prev) => [
        { id: crypto.randomUUID(), ...form },
        ...prev,
      ]);
      setMessage("Pickup scheduled successfully!");
      setForm({ name: "", phone: "", address: "", date: "" });
    } catch (err) {
      setMessage("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    checkBackend();
  }, []);

  return (
    <section id="schedule" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md p-3 mb-4">
            <Server className="h-4 w-4" />
            <p className="text-sm">Backend status: {backendStatus ?? "Checking..."}</p>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Schedule a Pickup</h2>
          <p className="text-slate-600 mb-6">Fill in your details and we’ll arrange a convenient collection.</p>

          <form onSubmit={submit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  placeholder="Full name"
                  className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  required
                  placeholder="Phone number"
                  className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                name="address"
                value={form.address}
                onChange={onChange}
                required
                placeholder="Pickup address"
                className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={onChange}
                required
                className="w-full rounded-lg border border-slate-300 pl-9 pr-2 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              disabled={submitting}
              className="w-full rounded-lg bg-emerald-600 text-white px-6 py-3 font-medium shadow hover:bg-emerald-700 transition-colors disabled:opacity-60"
            >
              {submitting ? "Scheduling..." : "Schedule Pickup"}
            </motion.button>
            {message && (
              <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md p-3">
                {message}
              </p>
            )}
          </form>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
          <h3 className="font-semibold text-slate-900 mb-3">Recent Requests</h3>
          <div className="space-y-2 max-h-[360px] overflow-auto">
            {requests.length === 0 && (
              <p className="text-sm text-slate-500">No requests yet.</p>
            )}
            {requests.map((r) => (
              <div key={r.id} className="rounded-lg border border-slate-200 p-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-slate-800">{r.name}</span>
                  <span className="text-slate-500">{new Date(r.date).toLocaleDateString()}</span>
                </div>
                <div className="text-slate-600">{r.address}</div>
                <div className="text-slate-500">{r.phone}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
