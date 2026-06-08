function ServicesHero() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-10">
      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#E7EDFF] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i34"></use>
          </svg>
        </div>
        <div>
          <p className="text-xl md:text-2xl text-xstm-gray-300 font-semibold">
            Life Insurance
          </p>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">
            Unlimited protection
          </p>
        </div>
      </article>

      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#FFF5D9] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i35"></use>
          </svg>
        </div>
        <div>
          <p className="text-xl md:text-2xl text-xstm-gray-300 font-semibold">
            Shopping
          </p>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">
            Buy. Think. Grow
          </p>
        </div>
      </article>

      <article className="bg-white rounded-2xl p-4 lg:p-10 grid grid-cols-[45px_1fr] md:grid-cols-[70px_1fr] items-center gap-4">
        <div className="bg-full flex items-center justify-center bg-[#DCFAF8] w-11.25 h-11.25 lg:h-17.5 lg:w-17.5 rounded-full">
          <svg className="icon w-6 h-6 sm:h-9 sm:w-9" width={30} height={30}>
            <use href="#i36"></use>
          </svg>
        </div>
        <div>
          <p className="text-xl md:text-2xl text-xstm-gray-300 font-semibold">
            Safety
          </p>
          <p className="text-xs sm:text-sm  text-cstm-gray-200">
            We are your allies
          </p>
        </div>
      </article>
    </div>
  );
}

export default ServicesHero;
