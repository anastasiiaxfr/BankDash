function MyInvestment() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center flex-wrap gap-4 bg-white p-4 rounded-2xl">
        <div className="bg-[#FFE0EB] text-[#FF82AC] min-w-15 w-15 h-15 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i22"></use>
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-base font-semibold text-cstm-gray-300">
            Apple Store
          </p>
          <p className="text-cstm-gray-200 text-sm">E-commerce, Marketplace</p>
        </div>
        <div className="flex-1 hidden md:block">
          <p className="text-base font-semibold text-cstm-gray-300">$54,000</p>
          <p className="text-cstm-gray-200 text-sm">Envestment Value</p>
        </div>
        <div className="flex-0 md:flex-1">
          <p className="text-base font-semibold text-cstm-green-100">+16%</p>
          <p className="text-cstm-gray-200 text-sm hidden md:block">
            Return Value
          </p>
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-4 bg-white p-4 rounded-2xl">
        <div className="bg-[#E7EDFF] min-w-15 w-15 h-15 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i23"></use>
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-base font-semibold text-cstm-gray-300">
            Samsung Mobile
          </p>
          <p className="text-cstm-gray-200 text-sm">E-commerce, Marketplace</p>
        </div>
        <div className="flex-1 hidden md:block">
          <p className="text-base font-semibold text-cstm-gray-300">$25,300</p>
          <p className="text-cstm-gray-200 text-sm">Envestment Value</p>
        </div>
        <div className="flex-0 md:flex-1">
          <p className="text-base font-semibold text-cstm-red-100">-4%</p>
          <p className="text-cstm-gray-200 text-sm hidden md:block">
            Return Value
          </p>
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-4 bg-white p-4 rounded-2xl">
        <div className="bg-[#FFF5D9] min-w-15 w-15 h-15 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i24"></use>
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-base font-semibold text-cstm-gray-300">
            Tesla Motors
          </p>
          <p className="text-cstm-gray-200 text-sm">Electric Vehicles</p>
        </div>
        <div className="flex-1 hidden md:block">
          <p className="text-base font-semibold text-cstm-gray-300">$8,200</p>
          <p className="text-cstm-gray-200 text-sm">Envestment Value</p>
        </div>
        <div className="flex-0 md:flex-1">
          <p className="text-base font-semibold text-cstm-green-100">+25%</p>
          <p className="text-cstm-gray-200 text-sm hidden md:block">
            Return Value
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyInvestment;
