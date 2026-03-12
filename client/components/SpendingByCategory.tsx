"use client";

import React from "react";
import type { ReactElement } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
} from "recharts";

interface CategoryDatum {
  name: string;
  value: number;
  color: string;
}

const data: CategoryDatum[] = [
  { name: "Housing", value: 1800, color: "#1FA187" },
  { name: "Food", value: 650, color: "#36C7A7" },
  { name: "Transport", value: 420, color: "#F59E0B" },
  { name: "Entertainment", value: 280, color: "#5B73A6" },
  { name: "Utilities", value: 350, color: "#EF4444" },
  { name: "Other", value: 740, color: "#A7B0C0" },
];

function formatMoney(n: number): string {
  return `$${n.toLocaleString()}`;
}


interface DonutTooltipContentProps {
  active?: boolean;
  payload?: Array<{
    name?: string;
    value?: number | string;
    payload?: CategoryDatum;
  }>;
  label?: string;
}

function DonutTooltipContent({
  active,
  payload,
}: DonutTooltipContentProps): ReactElement | null {
  if (!active || !payload?.length) return null;

  const first = payload[0];
  const name = String(first.name ?? first.payload?.name ?? "");
  const rawValue = first.value ?? first.payload?.value ?? 0;
  const value = typeof rawValue === "number" ? rawValue : Number(rawValue);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E5E7EB",
        borderRadius: 10,
        padding: "10px 12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 4 }}>{name}</div>
      <div style={{ color: "white" }}>{formatMoney(value)}</div>
    </div>
  );
}

interface LegendItemProps {
  item: CategoryDatum;
}

function LegendItem({ item }: LegendItemProps): ReactElement {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", width: "100%" }}> <div style={{ padding: "6px 8px", background: item.color, borderRadius: 6, flexShrink: 0 }} />
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: 999,
          marginTop: 6,
          background: item.color,
          flexShrink: 0,
        }}
      />
      <div style={{ lineHeight: 1.2 }}>
        <div style={{ fontWeight: 700 }}>{item.name}</div>
        <div style={{ color: "#6B7280", fontSize: 13 }}>{formatMoney(item.value)}</div>
      </div>
    </div>
  );
}

export default function SpendingByCategoryDonut(): ReactElement {
  return (
    <div style={{ width: "100%", height: 320 }}>
      <div style={{ fontWeight: 800, marginBottom: 12 }}>Spending by Category</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 24,
          alignItems: "center",
          height: "100%",
        }}
      >
        <div style={{ width: "100%", height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<DonutTooltipContent />} />
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={95}
                startAngle={90}
                endAngle={-270}
                paddingAngle={2}
                stroke="transparent"
                isAnimationActive={false}
              >
                {data.map((d) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={{ display: "grid", gap: 14 }}>
          {data.map((item) => (
            <LegendItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}