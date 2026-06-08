import Chart from "react-apexcharts";

export default function BankDonutChart() {
  const options = {
    chart: {
      type: "donut",
      toolbar: { show: false },
    },

    labels: ["BRC Bank", "MCP Bank", "DBL Bank", "ABM Bank"],

    // 🎨 Updated colors
    colors: ["#FF82AC", "#FFBB38", "#4C78FF", "#16DBCC"],

    stroke: {
      colors: ["#fff"],
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      position: "bottom",
      fontSize: "14px",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "14px",
            },
            value: {
              show: true,
              fontSize: "16px",
              formatter: (val) => `${val}`,
            },
            total: {
              show: true,
              label: "Total",
              formatter: (w) => {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              },
            },
          },
        },
      },
    },

    tooltip: {
      y: {
        formatter: (val) => `${val}%`,
      },
    },
  };

  const series = [30, 25, 20, 25];

  return (
    <div className="bg-white  w-full">
      <Chart options={options} series={series} type="donut" height={300} />
    </div>
  );
}
