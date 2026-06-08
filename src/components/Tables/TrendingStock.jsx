import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    c1: "01",
    c2: "Trivago",
    c3: "$520",
    c4: "+5%",
  },
  {
    c1: "02",
    c2: "Canon",
    c3: "$480",
    c4: "+10%",
  },
  {
    c1: "03",
    c2: "Uber Food",
    c3: "$350",
    c4: "-3%",
  },
  {
    c1: "04",
    c2: "Nokia",
    c3: "$940",
    c4: "+2%",
  },
  {
    c1: "05",
    c2: "Tiktok",
    c3: "$670",
    c4: "-12%",
  },
];

export default function TrendingStock() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-cstm-gray-200 w-[100px]">SL No</TableHead>
          <TableHead className="text-cstm-gray-200">Name</TableHead>
          <TableHead className="text-cstm-gray-200">Price</TableHead>
          <TableHead className="text-cstm-gray-200 text-right">
            Return
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((c1) => (
          <TableRow key={c1.c1}>
            <TableCell className="font-medium">{c1.c1}</TableCell>
            <TableCell>{c1.c2}</TableCell>
            <TableCell>{c1.c3}</TableCell>
            <TableCell className="text-right">
              <span
                className={
                  c1.c4.startsWith("+")
                    ? "text-cstm-green-100 font-semibold"
                    : "text-cstm-red-100 font-semibold"
                }
              >
                {c1.c4}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
