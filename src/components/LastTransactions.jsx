export default function LastTransactions() {
  return (
    <article className="bg-white rounded-2xl p-4 xl:p-10 grid gap-6 flex-1 self-stretch">
      <div className="flex items-center gap-3">
        <div className="bg-[#DCFAF8] min-w-13.75 w-13.75 h-13.75 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i12"></use>
          </svg>
        </div>
        <div className="flex-2 sm:flex-1">
          <p className="text-base font-semibold text-cstm-gray-300">
            Spotify Subscription
          </p>
          <p className="text-cstm-gray-200 text-sm">25 Jan 2021</p>
        </div>
        <div className="flex-1 hidden lg:block">
          <p className="text-cstm-gray-200 text-base">Shopping</p>
        </div>
        <div className="flex-1 hidden lg:block">
          <p className="text-cstm-gray-200 text-base">1234 ****</p>
        </div>
        <div className="flex-1 hidden lg:block">
          <p className="text-cstm-gray-200 text-base">Pending</p>
        </div>
        <div>
          <span className="text-cstm-red-100 font-semibold">-$150</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-[#E7EDFF] min-w-13.75 w-13.75 h-13.75 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i13"></use>
          </svg>
        </div>
        <div className="flex-2 sm:flex-1">
          <p className="text-base font-semibold text-cstm-gray-300">
            Mobile Service
          </p>
          <p className="text-cstm-gray-200 text-sm">25 Jan 2021</p>
        </div>
        <div className="flex-1 hidden lg:block">
          <p className="text-cstm-gray-200 text-base">Service</p>
        </div>
        <div className="flex-1 hidden lg:block">
          <p className="text-cstm-gray-200 text-base">1234 ****</p>
        </div>
        <div className="flex-1 hidden lg:block">
          <p className="text-cstm-gray-200 text-base">Completed</p>
        </div>
        <div>
          <span className="text-cstm-red-100 font-semibold">-$340</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-[#FFE0EB] min-w-13.75 w-13.75 h-13.75 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i14"></use>
          </svg>
        </div>
        <div className="flex-2 sm:flex-1">
          <p className="text-base font-semibold text-cstm-gray-300">
            Emilly Wilson
          </p>
          <p className="text-cstm-gray-200 text-sm">25 Jan 2021</p>
        </div>
        <div className="flex-1 hidden lg:block">
          <p className="text-cstm-gray-200 text-base">Transfer</p>
        </div>
        <div className="flex-1 hidden lg:block">
          <p className="text-cstm-gray-200 text-base">1234 ****</p>
        </div>
        <div className="flex-1 hidden lg:block">
          <p className="text-cstm-gray-200 text-base">Completed</p>
        </div>
        <div>
          <span className="text-cstm-green-100 font-semibold">+$780</span>
        </div>
      </div>
    </article>
  );
}
