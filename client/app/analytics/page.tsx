import MonthlyOverviewBarChart from "@/components/MonthlySpendGraph";

export default function Analytics() {
  return (
    <div className="flex flex-col min-h-screen p-10 bg-zinc-50 font-sans dark:bg-gray w-full">
      <div className=" w-full flex flex-col gap-4 mb-5">
        <h1 className="text-4xl font-bold text-gray dark:text-surface">
          Analytics Page
        </h1>
        <p
          className="
text-lg text-gray-600 dark:text-surface

        ">
          Visualize your spending patterns and trends
        </p>
      </div>
      <div className=" w-full flex flex-col gap-4 p-4">
        <h1 className="text-xl font-semibold text-gray dark:text-surface">
          Monthly Overview
        </h1>
        <MonthlyOverviewBarChart />
      </div>
    </div>
  );
}
