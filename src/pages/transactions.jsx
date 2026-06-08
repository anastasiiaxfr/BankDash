import CreditCard from "@/components/CreditCard";
import Chart4 from "@/components/Charts/Chart4";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Table1 from "@/components/Tables/Table1";

export default function Transactions() {
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
                + Add Card
              </a>
            </header>
            <div className="flex gap-4 lg:gap-10 pr-8 md:pr-0 w-screen md:w-auto overflow-hidden overflow-x-auto">
              <CreditCard theme="main" />
              <CreditCard />
            </div>
          </div>
          <div className="h-full flex flex-col">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>My Expense</h2>
            </header>
            <article className="bg-white rounded-2xl p-0">
              <Chart4 />
            </article>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="grid gap-10">
          <div className="">
            <header className="flex gap-3 justify-between items-center mb-3">
              <h2>Recent Transactions</h2>
            </header>

            <Tabs defaultValue="all-transactions">
              <TabsList variant="line">
                <TabsTrigger value="all-transactions">
                  All Transactions
                </TabsTrigger>
                <TabsTrigger value="income">Income</TabsTrigger>
                <TabsTrigger value="expense">Expense</TabsTrigger>
              </TabsList>

              <TabsContent value="all-transactions">
                <Table1 />
              </TabsContent>
              <TabsContent value="income">
                <Table1 />
              </TabsContent>
              <TabsContent value="expense">
                <Table1 />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
}
