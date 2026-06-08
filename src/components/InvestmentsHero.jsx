function InvestmentsHero() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-10">
      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#DCFAF8] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i19"></use>
          </svg>
        </div>
        <div>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">
            Total Invested Amount
          </p>
          <p className="text-base sm:text-xl md:text-2xl text-cstm-gray-300 font-semibold">
            $150,000
          </p>
        </div>
      </article>

      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#FFE0EB] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i20"></use>
          </svg>
        </div>
        <div>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">
            Number of Investments
          </p>
          <p className="text-base sm:text-xl md:text-2xl text-cstm-gray-300 font-semibold">
            1,250
          </p>
        </div>
      </article>

      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#E7EDFF] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i21"></use>
          </svg>
        </div>
        <div>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">
            Rate of Return
          </p>
          <p className="text-base sm:text-xl md:text-2xl text-cstm-gray-300 font-semibold">
            +5.80%
          </p>
        </div>
      </article>
    </div>
  );
}

export default InvestmentsHero;
