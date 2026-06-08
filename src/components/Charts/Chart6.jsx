import Chart from "react-apexcharts";

export default function SyncingChart() {
  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "inherit",
    },

    colors: ["#EDA10D"],

    stroke: {
      curve: "straight", // 🔥 "ломаная" (angular line)
      width: 3,
    },

    markers: {
      size: 4,
      colors: ["#EDA10D"],
      strokeColors: "#fff",
      strokeWidth: 2,
    },

    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 5,
    },

    xaxis: {
      categories: ["2021", "2022", "2023", "2024", "2025"],
    },

    yaxis: {
      labels: {
        formatter: (val) => `$${val / 1000}k`,
      },
    },

    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [10000, 30000, 20000, 40000, 25000],
    },
  ];

  return (
    <div className="bg-white">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}
