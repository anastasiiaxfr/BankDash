export default function CardSettings() {
  return (
    <article className="bg-white rounded-2xl p-4 xl:p-10 flex flex-col gap-6 flex-1 items-start">
      <div className="flex items-center gap-3 w-full">
        <div className="bg-[#FFF5D9] min-w-15 w-15 h-15 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i26"></use>
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-base text-cstm-gray-300 font-medium">Block Card</p>
          <p className="text-cstm-gray-200 text-sm">
            Instantly block your card
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full">
        <div className="bg-[#E7EDFF] min-w-15 w-15 h-15 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i27"></use>
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-base text-cstm-gray-300 font-medium">
            Change Pin Code
          </p>
          <p className="text-cstm-gray-200 text-sm">Choose another pin code</p>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full">
        <div className="bg-[#FFE0EB] min-w-15 w-15 h-15 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i28"></use>
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-base text-cstm-gray-300 font-medium">
            Add to Google Pay
          </p>
          <p className="text-cstm-gray-200 text-sm">
            Withdraw without any card
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full mb-auto">
        <div className="bg-[#DCFAF8] min-w-15 w-15 h-15 rounded-2xl flex items-center justify-center">
          <img src="/img/icons/i29.png" alt="" width={24} height={24} />
        </div>
        <div className="flex-1">
          <p className="text-base text-cstm-gray-300 font-medium">
            Add to Apple Pay
          </p>
          <p className="text-cstm-gray-200 text-sm">
            Withdraw without any card
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full mb-auto">
        <div className="bg-[#DCFAF8] min-w-15 w-15 h-15 rounded-2xl flex items-center justify-center">
          <img src="/img/icons/i29.png" alt="" width={24} height={24} />
        </div>
        <div className="flex-1">
          <p className="text-base text-cstm-gray-300 font-medium">
            Add to Apple Store
          </p>
          <p className="text-cstm-gray-200 text-sm">
            Withdraw without any card
          </p>
        </div>
      </div>
    </article>
  );
}
