import Chart from "react-apexcharts";

export default function Chart2() {
	const series = [30, 15, 35, 20];

	const options = {
		chart: {
			type: "pie",
		},

		labels: ["Entertainment", "Bill Expense", "Others", "Investment"],

		colors: ["#343C6A", "#FC7900", "#1814F3", "#FA00FF"],

		legend: {
			position: "bottom",
		},

		tooltip: {
			y: {
				formatter: (val) => `${val}%`,
			},
		},

		dataLabels: {
			enabled: true,
			style: {
				colors: ["#fff"],
			},
			formatter(val, opts) {
				const name = opts.w.globals.labels[opts.seriesIndex];
				return [val.toFixed(1) + "%", name];
			},
			textAnchor: "middle",
			dropShadow: {
				enabled: false,
			},
		},
	};

	return (
		<div className="w-full max-w-md">
			<Chart options={options} series={series} type="pie" height={320} />
		</div>
	);
}
