
import { useEffect, useState } from "react";
import {
  createAppointment,
  getAppointments,
  deleteAppointment,
} from "../../services/appointment.service";

function RendezVous() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    doctor: "",
    location: "",
    notes: "",
  });

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingAppointments, setLoadingAppointments] = useState(true);
  const [message, setMessage] = useState("");

  const inputStyle =
    "w-full bg-pink-50 border border-pink-100 rounded-xl p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition";

  // =========================
  // CHARGER LES RENDEZ-VOUS
  // =========================
  const loadAppointments = async () => {
    try {
      setLoadingAppointments(true);

      const res = await getAppointments();

      console.log("RENDEZ-VOUS:", res.data);

      setAppointments(res.data.data || []);
    } catch (error) {
      console.error("GET APPOINTMENTS ERROR:", error);

      setMessage("Impossible de charger les rendez-vous ❌");
    } finally {
      setLoadingAppointments(false);
    }
  };

  // Charger au démarrage
  useEffect(() => {
    loadAppointments();
  }, []);

  // =========================
  // MODIFIER LE FORMULAIRE
  // =========================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // AJOUTER UN RENDEZ-VOUS
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      await createAppointment(form);

      setMessage("Rendez-vous enregistré avec succès 💕");

      // Vider le formulaire
      setForm({
        title: "",
        date: "",
        time: "",
        doctor: "",
        location: "",
        notes: "",
      });

      // Recharger la liste
      await loadAppointments();
    } catch (error) {
      console.error("CREATE APPOINTMENT ERROR:", error);

      setMessage("Erreur lors de l'ajout du rendez-vous ❌");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // SUPPRIMER UN RENDEZ-VOUS
  // =========================
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Voulez-vous vraiment supprimer ce rendez-vous ?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteAppointment(id);

      setMessage("Rendez-vous supprimé avec succès 🗑️");

      // Recharger la liste
      await loadAppointments();
    } catch (error) {
      console.error("DELETE APPOINTMENT ERROR:", error);

      setMessage("Erreur lors de la suppression ❌");
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-rose-50 p-4">

      <div className="max-w-4xl mx-auto space-y-6">

        {/* =========================
            FORMULAIRE
        ========================= */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-pink-100">

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-pink-500">
              📅 Mes rendez-vous
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Gère tes consultations et suivis de grossesse
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* TYPE */}
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Type de rendez-vous (ex: échographie)"
              className={inputStyle}
              required
            />

            {/* DATE + HEURE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

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

            {/* MEDECIN */}
            <input
              name="doctor"
              value={form.doctor}
              onChange={handleChange}
              placeholder="Médecin / Sage-femme"
              className={inputStyle}
            />

            {/* LIEU */}
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Lieu (hôpital / cabinet)"
              className={inputStyle}
            />

            {/* NOTES */}
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Notes importantes..."
              rows="3"
              className={inputStyle}
            />

            {/* BOUTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full bg-pink-500 hover:bg-pink-600
                disabled:opacity-50
                text-white font-semibold py-3 rounded-xl
                transition shadow-md
              "
            >
              {loading
                ? "Enregistrement..."
                : "Ajouter le rendez-vous 💕"}
            </button>

            {/* MESSAGE */}
            {message && (
              <p className="text-center text-sm text-pink-500 mt-2">
                {message}
              </p>
            )}

          </form>
        </div>

        {/* =========================
            LISTE DES RENDEZ-VOUS
        ========================= */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-pink-100">

          <h3 className="text-xl font-bold text-pink-500 mb-4">
            📋 Mes rendez-vous enregistrés
          </h3>

          {/* CHARGEMENT */}
          {loadingAppointments && (
            <p className="text-center text-gray-500 py-6">
              Chargement des rendez-vous...
            </p>
          )}

          {/* AUCUN RENDEZ-VOUS */}
          {!loadingAppointments && appointments.length === 0 && (
            <div className="text-center py-8">
              <p className="text-4xl mb-3">📅</p>

              <p className="text-gray-500">
                Aucun rendez-vous enregistré.
              </p>

              <p className="text-sm text-gray-400 mt-1">
                Ajoute ton premier rendez-vous ci-dessus.
              </p>
            </div>
          )}

          {/* LISTE */}
          {!loadingAppointments && appointments.length > 0 && (
            <div className="space-y-4">

              {appointments.map((appointment) => (
                <div
                  key={appointment._id}
                  className="
                    border border-pink-100
                    bg-pink-50
                    rounded-2xl
                    p-5
                  "
                >

                  <div className="flex justify-between items-start gap-4">

                    <div className="flex-1">

                      {/* TITRE */}
                      <h4 className="text-lg font-bold text-pink-600">
                        {appointment.title}
                      </h4>

                      {/* DATE */}
                      <p className="text-gray-700 mt-2">
                        📅{" "}
                        {appointment.date
                          ? new Date(
                              appointment.date
                            ).toLocaleDateString("fr-FR")
                          : "Date non précisée"}
                      </p>

                      {/* HEURE */}
                      {appointment.time && (
                        <p className="text-gray-700">
                          🕐 {appointment.time}
                        </p>
                      )}

                      {/* MEDECIN */}
                      {appointment.doctor && (
                        <p className="text-gray-700">
                          👩‍⚕️ {appointment.doctor}
                        </p>
                      )}

                      {/* LIEU */}
                      {appointment.location && (
                        <p className="text-gray-700">
                          📍 {appointment.location}
                        </p>
                      )}

                      {/* NOTES */}
                      {appointment.notes && (
                        <p className="text-gray-600 mt-3">
                          📝 {appointment.notes}
                        </p>
                      )}

                    </div>

                    {/* SUPPRIMER */}
                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(appointment._id)
                      }
                      className="
                        px-3 py-2
                        bg-red-100
                        text-red-500
                        rounded-xl
                        hover:bg-red-200
                        transition
                      "
                    >
                      🗑️
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default RendezVous;