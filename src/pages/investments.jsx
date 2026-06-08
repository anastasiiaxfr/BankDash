import InvestmentsHero from "../components/InvestmentsHero";
import Chart6 from "../components/Charts/Chart6";
import Chart7 from "../components/Charts/Chart7";
import MyInvestment from "../components/MyInvestment";
import TrendingStock from "../components/Tables/TrendingStock";

export default function Investments() {
  return (
    <main className="flex flex-col gap-6 xl:gap-10 items-center justify-center p-4 lg:p-10 w-full">
      <section className="w-full">
        <InvestmentsHero />
      </section>

      <section className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Yearly Total Investment</h2>
            </header>
            <article className="bg-white rounded-2xl p-4 lg:p-10">
              <Chart6 />
            </article>
          </div>

          <div className="h-full flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Monthly Revenue</h2>
            </header>
            <article className="bg-white rounded-2xl p-4 lg:p-10">
              <Chart7 />
            </article>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10 items-stretch">
          <div className="lex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>My Investment</h2>
            </header>
            <MyInvestment />
          </div>

          <div className="h-full flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Trending Stock</h2>
            </header>
            <article className="bg-white rounded-2xl p-4 lg:p-10 flex-1 flex flex-col justify-start items-center">
              <TrendingStock />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
