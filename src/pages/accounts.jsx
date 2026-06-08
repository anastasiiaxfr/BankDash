import CreditCard from "@/components/CreditCard";
import AccountsHero from "@/components/AccountsHero";
import LastTransactions from "@/components/LastTransactions";
import Chart5 from "@/components/Charts/Chart5";
import InvoicesSent from "@/components/InvoicesSent";

export default function Accounts() {
  return (
    <main className="flex flex-col gap-6 xl:gap-10 items-center justify-center p-4 lg:p-10 w-full">
      <section className="w-full">
        <AccountsHero />
      </section>

      <section className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10 items-stretch">
          <div className="flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Last Transaction</h2>
            </header>

            <LastTransactions />
          </div>

          <div className="h-full flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>My Card</h2>
              <a
                href="#"
                className="text-cstm-primary text-[15px] font-semibold hover:underline"
              >
                See All
              </a>
            </header>
            <CreditCard theme="main" />
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10 items-stretch">
          <div className="flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Debit & Credit Overview</h2>
            </header>

            <article className="bg-white rounded-2xl p-4 lg:p-10">
              <Chart5 />
            </article>
          </div>
          <div className="h-full flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Invoices Sent</h2>
            </header>
            <InvoicesSent />
          </div>
        </div>
      </section>
    </main>
  );
}
