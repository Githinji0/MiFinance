"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", income: 6200, expenses: 4100 },
  { month: "Feb", income: 5800, expenses: 4300 },
  { month: "Mar", income: 7200, expenses: 3900 },
  { month: "Apr", income: 6900, expenses: 4600 },
  { month: "May", income: 7900, expenses: 4200 },
  { month: "Jun", income: 8500, expenses: 5200 },
];

interface PayloadItem {
  dataKey: string;
  value: number;
}

interface HighlightCursorProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface CustomTooltipProps {
  active: boolean;
  payload: PayloadItem[];
  label: string;
}

// Gray vertical highlight (like your screenshot)
function HighlightCursor(props: HighlightCursorProps) {
  const { x, y, width, height } = props;
  if (x == null) return null;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill="#D1D5DB"
      opacity={0.9}
      rx={6}
    />
  );
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;

  const income = payload.find((p: PayloadItem) => p.dataKey === "income")?.value;
  const expenses = payload.find((p: PayloadItem) => p.dataKey === "expenses")?.value;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E5E7EB",
        borderRadius: 10,
        padding: "10px 12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
        minWidth: 140,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 6 }}>{label}</div>
      <div style={{ color: "#16A34A" }}>income : {income}</div>
      <div style={{ color: "#EF4444", marginTop: 4 }}>expenses : {expenses}</div>
    </div>
  );
}

export default function MonthlyOverviewBarChart() {
  return (
    <div style={{ width: "100%", height: 320 }}>
      <h3 style={{ margin: "0 0 12px", fontWeight: 700 }}>Monthly Overview</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap={14} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
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
            content={<CustomTooltip active={false} payload={[]} label="" />}
            cursor={<HighlightCursor x={0} y={0} width={0} height={0} />}
          />

          <Bar
            dataKey="income"
            fill="#1FA187"      // teal/green
            barSize={26}
            radius={[8, 8, 0, 0]}
          />
          <Bar
            dataKey="expenses"
            fill="#E86B6B"      // soft red
            barSize={26}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}