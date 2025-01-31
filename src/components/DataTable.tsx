import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: "completed" | "pending" | "failed";
}

const transactions: Transaction[] = [
  {
    id: "1",
    date: "2024-03-20",
    description: "Market Investment",
    amount: 2500,
    status: "completed",
  },
  {
    id: "2",
    date: "2024-03-19",
    description: "Stock Purchase",
    amount: -1200,
    status: "completed",
  },
  {
    id: "3",
    date: "2024-03-18",
    description: "Dividend Payment",
    amount: 350,
    status: "pending",
  },
];

export function DataTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} className="hover:bg-muted/50">
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}>
                ${Math.abs(transaction.amount).toLocaleString()}
              </TableCell>
              <TableCell>
                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  transaction.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : transaction.status === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}>
                  {transaction.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}