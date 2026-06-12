import { useState } from "react";
import { createAppointment } from "../../services/appointment.service";

function RendezVous() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    doctor: "",
    location: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // 🎨 STYLE INPUT (clean + rose)
  const inputStyle =
    "w-full bg-pink-50 border border-pink-100 rounded-xl p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createAppointment(form);

      setSuccess("Rendez-vous enregistré avec succès 💕");

      setForm({
        title: "",
        date: "",
        time: "",
        doctor: "",
        location: "",
        notes: "",
      });

    } catch (error) {
      console.error(error);
      setSuccess("Erreur lors de l'ajout ❌");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-rose-50 p-4">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 border border-pink-100">

        {/* HEADER */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-pink-500">
             Mes rendez-vous
          </h2>

          <p className="text-sm text-gray-500">
            Gère tes consultations et suivis de grossesse
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Type de rendez-vous (ex: échographie)"
            className={inputStyle}
            required
          />

          <div className="grid grid-cols-2 gap-3">

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={inputStyle}
              required
            />

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className={inputStyle}
            />

          </div>

          <input
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            placeholder="Médecin / Sage-femme"
            className={inputStyle}
          />

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Lieu (hôpital / cabinet)"
            className={inputStyle}
          />

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Notes importantes..."
            rows="3"
            className={inputStyle}
          />

          {/* BUTTON */}
          <button
            disabled={loading}
            className="
              w-full bg-pink-500 hover:bg-pink-600
              text-white font-semibold py-3 rounded-xl
              transition shadow-md
            "
          >
            {loading
              ? "Enregistrement..."
              : "Ajouter le rendez-vous 💕"}
          </button>

          {/* SUCCESS MESSAGE */}
          {success && (
            <p className="text-center text-sm text-pink-500 mt-2">
              {success}
            </p>
          )}

        </form>
      </div>
    </div>
  );
}

export default RendezVous;