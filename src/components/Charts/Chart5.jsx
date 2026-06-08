import Chart from "react-apexcharts";

export default function Chart5() {
  const series = [
    {
      name: "Deposit",
      data: [420, 380, 500, 460, 520, 410, 300],
    },
    {
      name: "Withdraw",
      data: [300, 490, 410, 370, 450, 480, 300],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },

    colors: ["#1A16F3", "#FCAA0B"],

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 6,
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },

    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },

    yaxis: {
      min: 100,
      max: 600,
      tickAmount: 5,
    },

    legend: {
      position: "top",
      horizontalAlign: "left",
    },

    fill: {
      opacity: 1,
    },

    tooltip: {
      y: {
        formatter: (val) => `${val}`,
      },
    },
  };

  return (
    <div className="w-full bg-white">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
}
