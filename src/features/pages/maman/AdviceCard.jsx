import { useEffect, useState } from "react";
import api from "/src/services/api";

function AdviceCard({ pregnancy }) {

  const [advice, setAdvice] = useState(null);

  useEffect(() => {

    if (!pregnancy?.week) return;

    const fetchAdvice = async () => {

      try {

        const res = await api.get(
          `/advice/${pregnancy.week}`
        );

        setAdvice(res.data);

      } catch (err) {

        console.log(err);
      }
    };

    fetchAdvice();

  }, [pregnancy]);

  if (!advice) return null;

  return (
    <div className="bg-white p-5 rounded-2xl shadow">

      <h2 className="text-lg font-bold mb-3">
        💡 Conseils semaine {advice.week}
      </h2>

      <ul className="space-y-2">

        {advice.tips.map((tip, index) => (
          <li key={index}>
            • {tip}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default AdviceCard;