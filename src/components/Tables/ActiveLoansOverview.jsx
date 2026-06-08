import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const data = [
  {
    c1: "01",
    c2: "$100,000",
    c3: "$40,500",
    c4: "8 Months",
    c5: "12%",
    c6: "$2,000 / month",
  },
  {
    c1: "02",
    c2: "$500,000",
    c3: "$250,000",
    c4: "36 Months",
    c5: "10%",
    c6: "$8,000 / month",
  },
  {
    c1: "03",
    c2: "$900,000",
    c3: "$40,500",
    c4: "12 Months",
    c5: "12%",
    c6: "$5,000 / month",
  },
  {
    c1: "04",
    c2: "$50,000",
    c3: "$40,500",
    c4: "25 Months",
    c5: "5%",
    c6: "$2,000 / month",
  },
  {
    c1: "05",
    c2: "$50,000",
    c3: "$40,500",
    c4: "5 Months",
    c5: "16%",
    c6: "$10,000 / month",
  },
  {
    c1: "06",
    c2: "$80,000",
    c3: "$25,500",
    c4: "14 Months",
    c5: "8%",
    c6: "$2,000 / month",
  },
  {
    c1: "07",
    c2: "$12,000",
    c3: "$5,500",
    c4: "9 Months",
    c5: "13%",
    c6: "$500 / month",
  },
  {
    c1: "08",
    c2: "$160,000",
    c3: "$100,800",
    c4: "3 Months",
    c5: "12%",
    c6: "$900 / month",
  },
];

export default function ActiveLoansOverview() {
  const [page, setPage] = useState(0);

  const pageSize = 5;
  const pageCount = Math.ceil(data.length / pageSize);

  const paginatedData = data.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-cstm-gray-200 w-[100px]">
              SL No
            </TableHead>
            <TableHead className="text-cstm-gray-200">Loan Money</TableHead>
            <TableHead className="text-cstm-gray-200">Left to repay</TableHead>
            <TableHead className="text-cstm-gray-200">Duration</TableHead>
            <TableHead className="text-cstm-gray-200">Interest rate</TableHead>
            <TableHead className="text-cstm-gray-200">Installment</TableHead>
            <TableHead className="text-cstm-gray-200 text-right">
              Repay
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedData.map((cell) => (
            <TableRow key={cell.c1}>
              <TableCell className="font-medium">{cell.c1}</TableCell>

              <TableCell>{cell.c2}</TableCell>

              <TableCell>{cell.c3}</TableCell>

              <TableCell>{cell.c4}</TableCell>

              <TableCell>{cell.c5}</TableCell>

              <TableCell>{cell.c6}</TableCell>

              <TableCell className="text-right">
                <Button
                  variant="outline"
                  className="text-[#123288] border-[#123288] rounded-full cursor-pointer hover:text-main hover:border-main"
                >
                  Repay
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow className="bg-white">
            <TableCell className="text-cstm-red-100">Total</TableCell>

            <TableCell className="text-cstm-red-100">$1,250,000</TableCell>

            <TableCell className="text-cstm-red-100">$750,000</TableCell>

            <TableCell>&nbsp;</TableCell>

            <TableCell>&nbsp;</TableCell>

            <TableCell className="text-cstm-red-100">$50,000 / month</TableCell>

            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-2 mt-6">
        <Button
          variant="ghost"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 0}
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        {Array.from({ length: pageCount }).map((_, index) => (
          <Button
            key={index}
            variant="outline"
            className={`w-9 h-9 p-0 ${
              page === index
                ? "bg-main text-white border-main hover:bg-main hover:text-white"
                : ""
            }`}
            onClick={() => setPage(index)}
          >
            {index + 1}
          </Button>
        ))}

        <Button
          variant="ghost"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === pageCount - 1}
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
