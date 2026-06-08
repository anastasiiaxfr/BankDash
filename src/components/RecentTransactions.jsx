export default function RecentTransactions() {
	return (
		<article className="bg-white rounded-2xl p-4 xl:p-10 grid gap-6 flex-1 self-stretch">
			<div className="flex items-center gap-3">
				<div className="bg-[#FFF5D9] min-w-10 w-10 h-10 rounded-full flex items-center justify-center">
					<svg className="icon" width={24} height={24}>
						<use href="#i4"></use>
					</svg>
				</div>
				<div className="flex-1">
					<p className="text-base font-semibold text-cstm-gray-300">
						Deposit from my
					</p>
					<p className="text-cstm-gray-200 text-sm">
						28 January 2021
					</p>
				</div>
				<div>
					<span className="text-cstm-red-100 font-semibold">
						-$850
					</span>
				</div>
			</div>

			<div className="flex items-center gap-3">
				<div className="bg-[#E7EDFF] min-w-10 w-10 h-10 rounded-full flex items-center justify-center">
					<svg className="icon" width={24} height={24}>
						<use href="#i5"></use>
					</svg>
				</div>
				<div className="flex-1">
					<p className="text-base font-semibold text-cstm-gray-300">
						Deposit Paypal
					</p>
					<p className="text-cstm-gray-200 text-sm">
						25 January 2021
					</p>
				</div>
				<div>
					<span className="text-cstm-green-100 font-semibold">
						+$2,500
					</span>
				</div>
			</div>

			<div className="flex items-center gap-3">
				<div className="bg-[#DCFAF8] min-w-10 w-10 h-10 rounded-full flex items-center justify-center">
					<svg className="icon" width={24} height={24}>
						<use href="#i6"></use>
					</svg>
				</div>
				<div className="flex-1">
					<p className="text-base font-semibold text-cstm-gray-300">
						Jemi Wilson
					</p>
					<p className="text-cstm-gray-200 text-sm">
						21 January 2021
					</p>
				</div>
				<div>
					<span className="text-cstm-green-100 font-semibold">
						+$5,400
					</span>
				</div>
			</div>
		</article>
	);
}
