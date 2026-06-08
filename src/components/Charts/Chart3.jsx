import Chart from "react-apexcharts";

export default function Chart3() {
	const series = [
		{
			name: "Value",
			data: [120, 300, 450, 380, 600, 720, 500, 850, 920, 780, 1100, 950],
		},
	];

	const options = {
		chart: {
			type: "area",
			toolbar: {
				show: false,
			},
		},

		stroke: {
			curve: "smooth",
			width: 3,
		},

		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.05,
			},
		},

		xaxis: {
			categories: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
		},

		yaxis: {
			min: 0,
			max: 1200,
			tickAmount: 6,
		},

		dataLabels: {
			enabled: false,
		},

		tooltip: {
			y: {
				formatter: (val) => `${val}`,
			},
		},

		colors: ["#1814F3"],
	};

	return (
		<div className="w-full">
			<Chart options={options} series={series} type="area" height={250} />
		</div>
	);
}
