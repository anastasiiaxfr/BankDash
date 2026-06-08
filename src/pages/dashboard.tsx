import CreditCard from "@/components/CreditCard";
import RecentTransactions from "@/components/RecentTransactions";
import Chart1 from "@/components/Charts/Chart1";
import Chart2 from "@/components/Charts/Chart2";
import Chart3 from "@/components/Charts/Chart3";
import QuickTransfer from "@/components/QuickTransfer";

export default function Dashboard() {
  return (
    <main className="flex flex-col gap-6 xl:gap-10 items-center justify-center p-4 lg:p-10 w-full">
      <section className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10 items-stretch">
          <div className="">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>My Cards</h2>
              <a
                href="#"
                className="text-cstm-primary text-[15px] font-semibold hover:underline"
              >
                See All
              </a>
            </header>
            <div className="flex gap-4 lg:gap-10 pr-8 md:pr-0 w-screen md:w-auto overflow-hidden overflow-x-auto">
              <CreditCard theme="main" />
              <CreditCard />
            </div>
          </div>
          <div className="h-full flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Recent Transaction</h2>
            </header>
            <RecentTransactions />
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10 items-stretch">
          <div>
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Weekly Activity</h2>
            </header>

            <article className="bg-white rounded-2xl p-4 lg:p-10">
              <Chart1 />
            </article>
          </div>

          <div className="h-full flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Expense Statistics</h2>
            </header>
            <article className="bg-white rounded-2xl p-4 lg:p-10 flex-1 flex flex-col justify-center items-center">
              <Chart2 />
            </article>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-10 items-stretch">
          <div className="lex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Quick Transfer</h2>
            </header>

            <article className="bg-white rounded-2xl p-4 lg:p-10 flex-1">
              <QuickTransfer />
            </article>
          </div>

          <div className="h-full flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Balance History</h2>
            </header>
            <article className="bg-white rounded-2xl p-4 lg:px-10 py-0 flex-1 flex flex-col justify-center items-center">
              <Chart3 />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
