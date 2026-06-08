import CreditCard from "@/components/CreditCard";
import Chart8 from "../components/Charts/Chart8";
import CardList from "../components/CardList";
import CardSettings from "../components/CardSettings";
import AddNewCard from "../components/Form/AddNewCard";

export default function CreditCards() {
  return (
    <main className="flex flex-col gap-6 xl:gap-10 items-center justify-center p-4 lg:p-10 w-full">
      <section className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-1 gap-10 items-stretch">
          <div className="">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>My Cards</h2>
            </header>
            <div className="flex gap-4 lg:gap-10 pr-8 md:pr-0 w-screen md:w-auto overflow-hidden overflow-x-auto">
              <CreditCard theme="main" />
              <CreditCard />
              <CreditCard />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-10 items-stretch">
          <div className="lex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Card Expense Statistics</h2>
            </header>

            <article className="bg-white rounded-2xl p-4 lg:px-10 py-3 flex-1">
              <Chart8 />
            </article>
          </div>

          <div className="h-full flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Card List</h2>
            </header>
            <CardList />
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10 items-stretch">
          <div className="flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Add New Card</h2>
            </header>

            <article className="bg-white rounded-2xl p-4 lg:p-10 flex-1">
              <p className="text-cstm-gray-200 mb-10">
                Credit Card generally means a plastic card issued by Scheduled
                Commercial Banks assigned to a Cardholder, with a credit limit,
                that can be used to purchase goods and services on credit or
                obtain cash advances.
              </p>
              <AddNewCard />
            </article>
          </div>

          <div className="h-full flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Card Setting</h2>
            </header>
            <CardSettings />
          </div>
        </div>
      </section>
    </main>
  );
}
