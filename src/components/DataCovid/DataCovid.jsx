import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const JenisOlahraga = ({ olahragaRef }) => {
  const [covidData, setCovidData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/indonesia?lastdays=all")
      .then((res) => res.json())
      .then((data) => {
        const { cases, deaths, recovered } = data.timeline;
        //data terakhir
        const lastDate = Object.keys(cases).pop();

        setCovidData({
          date: lastDate,
          cases: cases[lastDate],
          deaths: deaths[lastDate],
          recovered: recovered[lastDate],
        });

        // Ubah jadi format array untuk chart
        const dates = Object.keys(cases);
        const formattedData = dates.map((date, i) => {
          const prevDate = dates[i - 1];
          return {
            date,
            kasusHarian: prevDate ? cases[date] - cases[prevDate] : cases[date],
            kematianHarian: prevDate ? deaths[date] - deaths[prevDate] : deaths[date],
            sembuhHarian: prevDate ? recovered[date] - recovered[prevDate] : recovered[date],
          };
        });

        setChartData(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div ref={olahragaRef} className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Data COVID-19 Indonesia
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Update Terbaru
          </h1>
        </div>

        {loading ? (
          <p className="text-center">Loading data...</p>
        ) : covidData ? (
          <>
            {/* Card Ringkasan */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 place-items-center mb-10">
              <div className="space-y-2 text-center p-4 shadow-md rounded-md bg-white">
                <h3 className="font-semibold">Kasus</h3>
                <p className="text-xl font-bold text-blue-600">
                  {covidData.cases.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">Per {covidData.date}</p>
              </div>

              <div className="space-y-2 text-center p-4 shadow-md rounded-md bg-white">
                <h3 className="font-semibold">Kematian</h3>
                <p className="text-xl font-bold text-red-600">
                  {covidData.deaths.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">Per {covidData.date}</p>
              </div>

              <div className="space-y-2 text-center p-4 shadow-md rounded-md bg-white">
                <h3 className="font-semibold">Sembuh</h3>
                <p className="text-xl font-bold text-green-600">
                  {covidData.recovered.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">Per {covidData.date}</p>
              </div>
            </div>

            {/* Chart */}
            <div className="w-full h-96 bg-white shadow-md rounded-md p-4">
              <h2 className="text-center font-bold mb-4">
                Tren Harian COVID-19
              </h2>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="date" hide /> {/* hide biar gak kepanjangan */}
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="kasusHarian"
                    stroke="#2563eb"
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="kematianHarian"
                    stroke="#dc2626"
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="sembuhHarian"
                    stroke="#16a34a"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        ) : (
          <p className="text-center text-red-500">Gagal memuat data</p>
        )}
      </div>
    </div>
  );
};

export default JenisOlahraga;
