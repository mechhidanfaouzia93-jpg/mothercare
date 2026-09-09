import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from "recharts";

function GrowthChart({ data, pregnancyStart }) {
  console.log("GrowthChart render");
  console.log("Data:", data);
  console.log("Pregnancy start:", pregnancyStart);

  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-5 rounded-2xl shadow">
        <h2 className="text-lg font-bold mb-4">
          📈 Croissance
        </h2>

        <p className="text-gray-500">
          Aucune donnée de croissance.
        </p>
      </div>
    );
  }

  // Calcul de la semaine actuelle de grossesse
  let currentWeek = 1;

  if (pregnancyStart) {
    const startDate = new Date(pregnancyStart);
    const today = new Date();

    const diffTime = today - startDate;
    const diffDays = Math.floor(
      diffTime / (1000 * 60 * 60 * 24)
    );

    currentWeek = Math.max(
      1,
      Math.floor(diffDays / 7)
    );
  }

  // Les données de croissance restent indépendantes
  // de la semaine actuelle.
  const growthData = data.map((item, index) => ({
    ...item,
    week: index + 1,
  }));

  return (
    <div className="bg-white p-5 rounded-2xl shadow w-full">
      <h2 className="text-lg font-bold mb-4">
        📈 Croissance semaine par semaine
      </h2>

      <p className="text-sm text-pink-500 font-semibold mb-3">
        🤰 Semaine actuelle : S{currentWeek}
      </p>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="week"
              tickFormatter={(week) => `S${week}`}
            />

            <YAxis />

            <Tooltip
              labelFormatter={(week) => `Semaine ${week}`}
              formatter={(value, name) => {
                if (name === "weight") {
                  return [`${value} kg`, "Poids"];
                }

                if (name === "height") {
                  return [`${value} cm`, "Taille"];
                }

                return [value, name];
              }}
            />

            {/* ⭐ Ligne indiquant la semaine actuelle */}
            <ReferenceLine
              x={currentWeek}
              stroke="#ec4899"
              strokeWidth={3}
              label={{
                value: `S${currentWeek}`,
                position: "top",
              }}
            />

            {/* Poids */}
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#ec4899"
              strokeWidth={3}
              dot={{ r: 5 }}
              name="Poids"
            />

            {/* Taille */}
            <Line
              type="monotone"
              dataKey="height"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ r: 5 }}
              name="Taille"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-6 mt-4 text-sm">
        <span className="text-pink-500">
          ● Poids
        </span>

        <span className="text-purple-500">
          ● Taille
        </span>
      </div>
    </div>
  );
}

export default GrowthChart;