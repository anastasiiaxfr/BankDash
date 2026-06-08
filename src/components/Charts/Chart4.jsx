import Chart from "react-apexcharts";

export default function MonthlyRevenueChart() {
	const series = [
		{
			name: "Revenue",
			data: [3200, 5400, 2800, 9100, 3500, 10500],
		},
	];

	const options = {
		chart: {
			type: "bar",
			toolbar: {
				show: false,
			},
		},

		colors: ["#16DBCC"],

		plotOptions: {
			bar: {
				borderRadius: 8,
				columnWidth: "45%",
				dataLabels: {
					position: "top",
				},
			},
		},

		dataLabels: {
			enabled: true,
			offsetY: -20,
			style: {
				fontSize: "12px",
				fontWeight: 600,
				colors: ["#718EBF"],
			},
			formatter: (val) => `$${val.toLocaleString()}`,
		},

		xaxis: {
			categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				style: {
					colors: "#718EBF",
				},
			},
		},

		yaxis: {
			min: 0,
			max: 12500,
			show: false,
		},

		grid: {
			show: false,
		},

		legend: {
			show: false,
		},

		tooltip: {
			y: {
				formatter: (val) => `$${val.toLocaleString()}`,
			},
		},
	};

	return (
		<div className="w-full">
			<Chart options={options} series={series} type="bar" height={266} />
		</div>
	);
}
