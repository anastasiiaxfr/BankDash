function LoansHero() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-[repeat(4,minmax(300px,1fr))] gap-4 xl:gap-10 overflow-hidden overflow-x-auto">
      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#E7EDFF] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i30"></use>
          </svg>
        </div>
        <div>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">
            Personal Loans
          </p>
          <p className="text-sm sm:text-xl xl:text-2xl text-xstm-gray-300 font-semibold">
            $50,000
          </p>
        </div>
      </article>

      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#FFF5D9] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i31"></use>
          </svg>
        </div>
        <div>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">
            Corporate Loans
          </p>
          <p className="text-sm sm:text-xl xl:text-2xl text-xstm-gray-300 font-semibold">
            $100,000
          </p>
        </div>
      </article>

      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#FFE0EB] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i32"></use>
          </svg>
        </div>
        <div>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">
            Business Loans
          </p>
          <p className="text-sm sm:text-xl xl:text-2xl text-xstm-gray-300 font-semibold">
            $500,000
          </p>
        </div>
      </article>

      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#DCFAF8] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i33"></use>
          </svg>
        </div>
        <div>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">Custom Loans</p>
          <p className="text-sm sm:text-xl xl:text-2xl text-xstm-gray-300 font-semibold">
            Choose Money
          </p>
        </div>
      </article>
    </div>
  );
}

export default LoansHero;
