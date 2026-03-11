interface User {
  name: string;
}
import { HandCoins, CreditCard, TrendingDown, TrendingUp } from "lucide-react";
import DashboardCard from "@/components/DashboardCard";
import IncomeVsExpensesChart from "@/components/Graph";
import TransactionCard from "@/components/TransactionCard";
export default function Dashboard() {
  const user: User = { name: "John Doe" };

  return (
    <div className="flex flex-col min-h-screen   bg-zinc-50 font-sans dark:bg-gray w-full p-10 gap-10 overflow-auto">
      <div className=" gap-5 flex flex-col">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">
          Dashboard{" "}
        </h1>
        <h3 className="text-xl text-gray-600 dark:text-gray-400">
          Welcome, {user.name}! here is your financial overview.
        </h3>
      </div>
      <div className="grid lg:grid-cols-2 place-items-center gap-10">
        <DashboardCard
          icon={<HandCoins size={30} />}
          title="Total Balance"
          value="150,000"
        />
        <DashboardCard
          icon={<CreditCard size={30} />}
          title="Monthly Expenses"
          value="50,000"
        />
        <DashboardCard
          icon={<TrendingUp size={30} />}
          title="Income"
          value="200,000"
        />
        <DashboardCard
          icon={<TrendingDown size={30} />}
          title="Savings"
          value="100,000"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="lg:text-4xl font-semibold text-surface tracking-wide">
          Income vs Expenses
        </h1>
        <IncomeVsExpensesChart />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="lg:text-4xl font-semibold text-surface tracking-wide">
          Recent Transactions
        </h1>
        <div className="w-full flex flex-col gap-4">
          <TransactionCard
            title="Grocery Shopping"
            amount={150.75}
            date="2024-06-15"
          />
          <TransactionCard title="Salary" amount={5000} date="2024-06-01" />
          <TransactionCard
            title="Electricity Bill"
            amount={75.5}
            date="2024-06-10"
          />
        </div>
      </div>
    </div>
  );
}
