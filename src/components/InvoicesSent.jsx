export default function InvoicesSent() {
  return (
    <article className="bg-white rounded-2xl p-4 xl:p-10 flex flex-col gap-6 flex-1 items-start">
      <div className="flex items-center gap-3 w-full">
        <div className="bg-[#DCFAF8] min-w-15 w-15 h-15 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i15"></use>
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-base text-[#B1B1B1]">Apple Store</p>
          <p className="text-cstm-gray-200 text-sm">5h ago</p>
        </div>
        <div>
          <span className="text-cstm-gray-200  font-semibold">$450</span>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full">
        <div className="bg-[#FFF5D9] min-w-15 w-15 h-15 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i16"></use>
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-base text-[#B1B1B1]">Michael</p>
          <p className="text-cstm-gray-200 text-sm">2 days ago</p>
        </div>
        <div>
          <span className="text-cstm-gray-200  font-semibold">$160</span>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full">
        <div className="bg-[#E7EDFF] min-w-15 w-15 h-15 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i17"></use>
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-base text-[#B1B1B1]">Playstation</p>
          <p className="text-cstm-gray-200 text-sm">5 days ago</p>
        </div>
        <div>
          <span className="text-cstm-gray-200  font-semibold">$1085</span>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full mb-auto">
        <div className="bg-[#FFE0EB] min-w-15 w-15 h-15 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i18"></use>
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-base text-[#B1B1B1]">William</p>
          <p className="text-cstm-gray-200 text-sm">10 days ago</p>
        </div>
        <div>
          <span className="text-cstm-gray-200  font-semibold">$90</span>
        </div>
      </div>
    </article>
  );
}
