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


function GrowthChart({ data }) {
  console.log("GrowthChart render");
  console.log("Data:", data);

  if (!data || data.length === 0) {
    return <p>Aucune donnée</p>;
  }

  return (
    <div className="bg-white p-5 rounded-2xl shadow w-full">
      <h2 className="text-lg font-bold mb-4">
        📈 Croissance
      </h2>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />
            <Line dataKey="weight" />
            <Line dataKey="height" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="weight"
              stroke="#ec4899"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default GrowthChart;