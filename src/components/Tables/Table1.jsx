import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";



const data = [
  {
    id: "1",
    description: "Spotify Subscription",
    "transaction-id": "#12548796",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12.30 AM",
    amount: "-$2,500",
    receipt: "Download",
  },
  {
    id: "2",
    description: "Freepik Sales",
    "transaction-id": "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "25 Jan, 10.40 PM",
    amount: "+$750",
    receipt: "Download",
  },
  {
    id: "3",
    description: "Mobile Service",
    "transaction-id": "#12548796",
    type: "Service",
    card: "1234 ****",
    date: "20 Jan, 10.40 PM",
    amount: "-$150",
    receipt: "Download",
  },
  {
    id: "4",
    description: "Wilson",
    "transaction-id": "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "15 Jan, 03.29 PM",
    amount: "-$1050",
    receipt: "Download",
  },
  {
    id: "5",
    description: "Emilly",
    "transaction-id": "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "14 Jan, 10.40 PM",
    amount: "+$840",
    receipt: "Download",
  },
  {
    id: "6",
    description: "Wilson",
    "transaction-id": "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "15 Jan, 03.29 PM",
    amount: "-$1050",
    receipt: "Download",
  },
];

const columns = [
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const isIncome = !row.original.amount.includes("-");

      return (
        <div className="flex items-center gap-2">
          {isIncome ? (
            <div className="border border-cstm-gray-200 text-cstm-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
              <ArrowUp className="w-4 h-4 " />
            </div>
          ) : (
            <div className="border border-cstm-gray-200 text-cstm-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
              <ArrowDown className="w-4 h-4 " />
            </div>
          )}
          <span>{row.original.description}</span>
        </div>
      );
    },
  },

  {
    accessorKey: "transaction-id",
    header: "Transaction ID",
  },

  {
    accessorKey: "type",
    header: "Type",
  },

  {
    accessorKey: "card",
    header: "Card",
  },

  {
    accessorKey: "date",
    header: "Date",
  },

  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const value = row.original.amount;
      const isNegative = value.includes("-");

      return (
        <span
          className={isNegative ? "text-cstm-red-100" : "text-cstm-green-100"}
        >
          {value}
        </span>
      );
    },
  },

  {
    accessorKey: "receipt",
    header: "Receipt",
    cell: () => {
      return (
        <Button
          variant="outline"
          className="text-[#123288] border-[#123288] rounded-full cursor-pointer hover:text-main hover:border-main w-full"
        >
          Download
        </Button>
      );
    },
  },
];

export default function PaginatedTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <div className="space-y-4 w-full overflow-hidden">
      <div className="bg-white rounded-2xl p-4 w-screen md:w-[calc(100vw-290px)] xl:w-auto ">
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-md text-cstm-gray-200"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="text-cstm-gray-300 py-3"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>No results.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-2 ml-auto mr-4 xl:mr-0">
        {/* Prev */}
        <Button
          variant="ghost"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className="w-4 h-4 " />
          Previous
        </Button>

        {/* Page numbers */}
        {Array.from({ length: table.getPageCount() }).map((_, index) => {
          const page = index;

          return (
            <Button
              key={page}
              variant="outline"
              className={`w-9 h-9 p-0 ${
                table.getState().pagination.pageIndex === page
                  ? "bg-main text-white border-main hover:bg-main hover:text-white"
                  : ""
              }`}
              onClick={() => table.setPageIndex(page)}
            >
              {page + 1}
            </Button>
          );
        })}

        {/* Next */}
        <Button
          variant="ghost"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next <ChevronRight className="w-4 h-4 " />
        </Button>
      </div>
    </div>
  );
}
