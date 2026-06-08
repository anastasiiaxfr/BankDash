import Chart from "react-apexcharts";

export default function () {
  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: {
        enabled: true,
      },
    },

    colors: ["#16DBCC"],

    stroke: {
      curve: "smooth",
      width: 3,
    },

    markers: {
      size: 5,
      colors: ["#16DBCC"],
      strokeColors: "#fff",
      strokeWidth: 2,
    },

    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 5,
    },

    xaxis: {
      categories: ["2021", "2023", "2024", "2025", "2026"],
    },

    yaxis: {
      labels: {
        formatter: (val) => `$${val / 1000}k`,
      },
    },

    tooltip: {
      enabled: true,
      shared: true,
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [20000, 28000, 25000, 30000, 25000],
    },
  ];

  return (
    <div className="bg-white w-full">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}
