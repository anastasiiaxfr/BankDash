function CreditCard({ theme = "light" }) {
  return (
    <article
      className={`flex flex-col justify-between rounded-2xl overflow-hidden min-w-75 w-full flex-1 ${theme === "main" ? "bg-main bg-[linear-gradient(125deg,#123288,#295EEC)] text-white" : "border border-gray-200 bg-white"}  `}
    >
      <div
        className={`p-4 xl:p-10 grid gap-4 xl:gap-10 ${theme === "main" ? "" : " border-b border-gray-200"}`}
      >
        <div className="flex justify-between items-start gap-3">
          <div>
            <p className="text-sm text-cstm-gray-200">Balance</p>
            <p
              className={`text-2xl ${theme === "main" ? "text-white" : "text-cstm-primary"}`}
            >
              $5,756
            </p>
          </div>
          {theme === "main" ? (
            <img src="/img/icons/chip.png" alt="chip" width={29} height={29} />
          ) : (
            <img
              src="/img/icons/chip-dark.png"
              alt="chip"
              width={29}
              height={29}
            />
          )}
        </div>
        <div className="grid grid-cols-2 items-start gap-3">
          <div>
            <p className="uppercase text-sm text-cstm-gray-200">CARD HOLDER</p>
            <p
              className={`text-base ${theme === "main" ? "text-white" : "text-cstm-primary"}`}
            >
              Eddy Cusuma
            </p>
          </div>
          <div>
            <p className="uppercase text-sm text-cstm-gray-200">VALID THRU</p>
            <p
              className={`text-base ${theme === "main" ? "text-white" : "text-cstm-primary"}`}
            >
              12/22
            </p>
          </div>
        </div>
      </div>
      <div
        className={`mt-auto p-4 xl:px-10 py-4 flex justify-between items-center gap-3 ${theme === "main" ? " bg-[linear-gradient(125deg,_rgba(255,255,255,0.15),_rgba(255,255,255,0))]" : ""}`}
      >
        <p
          className={`text-lg lg:text-2xl ${theme === "main" ? "text-white" : "text-cstm-primary"}`}
        >
          3778 **** **** 1234
        </p>
        <svg
          className="icon"
          width={36}
          height={24}
          className={`${theme === "main" ? "text-white" : "text-[#9199AF]"}`}
        >
          <use href="#mc"></use>
        </svg>
      </div>
    </article>
  );
}

export default CreditCard;
