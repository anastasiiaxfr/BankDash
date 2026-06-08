function AccountsHero() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-10">
      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#FFF5D9] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i8"></use>
          </svg>
        </div>
        <div>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">My Balance</p>
          <p className="text-xl md:text-2xl text-xstm-gray-300 font-semibold">
            $12,750
          </p>
        </div>
      </article>

      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#E7EDFF] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i9"></use>
          </svg>
        </div>
        <div>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">Income</p>
          <p className="text-xl md:text-2xl text-xstm-gray-300 font-semibold">
            $5,600
          </p>
        </div>
      </article>

      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#FFE0EB] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i10"></use>
          </svg>
        </div>
        <div>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">Expense</p>
          <p className="text-xl md:text-2xl text-xstm-gray-300 font-semibold">
            $3,460
          </p>
        </div>
      </article>

      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#DCFAF8] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i11"></use>
          </svg>
        </div>
        <div>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">Total Saving</p>
          <p className="text-xl md:text-2xl text-xstm-gray-300 font-semibold">
            $7,920
          </p>
        </div>
      </article>
    </div>
  );
}

export default AccountsHero;
