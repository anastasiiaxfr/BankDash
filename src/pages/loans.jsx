import LoansHero from "../components/LoansHero";
import ActiveLoansOverview from "../components/Tables/ActiveLoansOverview";

export default function Loans() {
  return (
    <main className="flex flex-col gap-6 xl:gap-10 items-center justify-center p-4 lg:p-10 w-full">
      <section className="w-full">
        <LoansHero />
      </section>
      <section className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-1fr gap-10 items-stretch">
          <div className="lex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Active Loans Overview</h2>
            </header>
            <article className="bg-white rounded-2xl p-4 lg:p-10">
              <ActiveLoansOverview />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
