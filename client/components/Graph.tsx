"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 6200, expenses: 4100 },
  { month: "Feb", income: 5900, expenses: 4300 },
  { month: "Mar", income: 7100, expenses: 3900 },
  { month: "Apr", income: 6900, expenses: 4600 },
  { month: "May", income: 7900, expenses: 4200 },
  { month: "Jun", income: 8500, expenses: 5200 },
];

export default function IncomeVsExpensesChart() {
  return (
    <div style={{ width: "100%", height: 340 }}>
      <h3 style={{ margin: "0 0 12px", fontWeight: 700 }}>Summary of Income and Expenses</h3>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
          <defs>
            {/* Green (Income) gradient */}
            <linearGradient id="incomeFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity={0.18} />
              <stop offset="80%" stopColor="#10B981" stopOpacity={0.04} />
              <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>

            {/* Red (Expenses) gradient */}
            <linearGradient id="expensesFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EF4444" stopOpacity={0.14} />
              <stop offset="80%" stopColor="#EF4444" stopOpacity={0.04} />
              <stop offset="100%" stopColor="#EF4444" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Light grid like your screenshot */}
          <CartesianGrid vertical={false} stroke="#EEF2F7" />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            width={40}
          />

          <Tooltip
            cursor={{ stroke: "#E5E7EB" }}
            contentStyle={{
              borderRadius: 10,
              border: "1px solid #E5E7EB",
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            }}
          />

          {/* Expenses (red) */}
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="#EF4444"
            strokeWidth={2}
            fill="url(#expensesFill)"
            dot={false}
            activeDot={{ r: 4 }}
          />

          {/* Income (green) */}
          <Area
            type="monotone"
            dataKey="income"
            stroke="#10B981"
            strokeWidth={2}
            fill="url(#incomeFill)"
            dot={false}
            activeDot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}