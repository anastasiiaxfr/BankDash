import ServicesHero from "../components/ServicesHero";
import BankServicesList from "../components/BankServicesList";

export default function Services() {
  return (
    <main className="flex flex-col gap-6 xl:gap-10 items-center justify-center p-4 lg:p-10 w-full">
      <section className="w-full">
        <ServicesHero />
      </section>

      <section className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-1 gap-10 items-stretch">
          <div className="flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Bank Services List</h2>
            </header>
            <BankServicesList />
          </div>
        </div>
      </section>
    </main>
  );
}
