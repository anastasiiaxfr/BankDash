import { Button } from "@/components/ui/button";

function CardList() {
  return (
    <div className="grid gap-6">
      <div className="flex-wrap flex items-center flex-wrap gap-4 bg-white p-2 lg:p-4 rounded-2xl">
        <div className="bg-[#E7EDFF] text-[#396AFF] w-10 h-10 lg:min-w-15 lg:w-15 lg:h-15 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i25"></use>
          </svg>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-cstm-gray-300 text-sm">Card Type</p>
          <p className="text-cstm-gray-200 text-xs lg:text-sm">Secondary</p>
        </div>
        <div className="flex-1 ">
          <p className="font-semibold text-cstm-gray-300 text-sm">Bank</p>
          <p className="text-cstm-gray-200 text-xs lg:text-sm">DBL Bank</p>
        </div>
        <div className="flex-1 shrink-0 hidden md:block">
          <p className="font-semibold text-cstm-gray-300 text-sm">
            Card Number
          </p>
          <p className="text-cstm-gray-200 text-xs lg:text-sm">
            **** **** 5600
          </p>
        </div>
        <div className="flex-1 hidden md:block">
          <p className="font-semibold text-cstm-gray-300 text-sm">
            Namain Card
          </p>
          <p className="text-cstm-gray-200 text-xs lg:text-sm">William </p>
        </div>
        <div className="flex-0">
          <Button variant="ghost" className="text-main">
            View Details
          </Button>
        </div>
      </div>

      <div className="flex-wrap flex items-center flex-wrap gap-4 bg-white p-2 lg:p-4 rounded-2xl">
        <div className="bg-[#FFE0EB] text-[#FF82AC] w-10 h-10 lg:min-w-15 lg:w-15 lg:h-15 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i25"></use>
          </svg>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-cstm-gray-300 text-sm">Card Type</p>
          <p className="text-cstm-gray-200 text-xs lg:text-sm">Secondary</p>
        </div>
        <div className="flex-1 ">
          <p className="font-semibold text-cstm-gray-300 text-sm">Bank</p>
          <p className="text-cstm-gray-200 text-xs lg:text-sm">BRC Bank</p>
        </div>
        <div className="flex-1 hidden md:block">
          <p className="font-semibold text-cstm-gray-300 text-sm">
            Card Number
          </p>
          <p className="text-cstm-gray-200 text-xs lg:text-sm">
            **** **** 4300
          </p>
        </div>
        <div className="flex-1 hidden md:block">
          <p className="font-semibold text-cstm-gray-300 text-sm">
            Namain Card
          </p>
          <p className="text-cstm-gray-200 text-xs lg:text-sm">Michel </p>
        </div>
        <div className="flex-0">
          <Button variant="ghost" className="text-main">
            View Details
          </Button>
        </div>
      </div>

      <div className="flex-wrap flex items-center flex-wrap gap-4 bg-white p-2 lg:p-4 rounded-2xl">
        <div className="bg-[#FFF5D9] text-[#FFBB38] w-10 h-10 lg:min-w-15 lg:w-15 lg:h-15 rounded-2xl flex items-center justify-center">
          <svg className="icon" width={24} height={24}>
            <use href="#i25"></use>
          </svg>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-cstm-gray-300 text-sm">Card Type</p>
          <p className="text-cstm-gray-200 text-xs lg:text-sm">Secondary</p>
        </div>
        <div className="flex-1 ">
          <p className="font-semibold text-cstm-gray-300 text-sm">Bank</p>
          <p className="text-cstm-gray-200 text-xs lg:text-sm">ABM Bank</p>
        </div>
        <div className="flex-1 hidden md:block">
          <p className="font-semibold text-cstm-gray-300 text-sm">
            Card Number
          </p>
          <p className="text-cstm-gray-200 text-xs lg:text-sm">
            **** **** 7560
          </p>
        </div>
        <div className="flex-1 hidden md:block">
          <p className="font-semibold text-cstm-gray-300 text-sm">
            Namain Card
          </p>
          <p className="text-cstm-gray-200 text-xs lg:text-sm">Edward</p>
        </div>
        <div className="flex-0">
          <Button variant="ghost" className="text-main">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardList;
