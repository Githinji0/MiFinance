"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Birdhouse,
  ChartNoAxesCombined,
  ArrowRightLeft,
  BadgeDollarSign,
  LogOut,
  ChevronLeft,
} from "lucide-react";

interface NavItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems: NavItem[] = [
    { href: "/dashboard", icon: <Birdhouse size={20} />, label: "Dashboard" },
    { href: "/analytics", icon: <ChartNoAxesCombined size={20} />, label: "Analytics" },
    { href: "/transactions", icon: <ArrowRightLeft size={20} />, label: "Transactions" },
    { href: "/budgets", icon: <BadgeDollarSign size={20} />, label: "Budgets" },
  ];

  return (
    <aside className={`flex flex-col h-screen bg-hover text-gray-100 transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"} sticky top-0`}>
  
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && <h1 className="text-xl font-bold text-accent">MiFinance</h1>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 hover:text-accent rounded-lg transition-colors"
          aria-label="Toggle sidebar"
        >
          <ChevronLeft size={20} className={`transition-transform ${isCollapsed ? "rotate-180" : ""}`} />
        </button>
      </div>

  
      <nav className="flex-1 px-3 py-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-gray hover:text-accent transition-colors group"
          >
            <span className="flex-shrink-0">{item.icon}</span>
            {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-gray-700">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-red-900/30 hover:text-red-400 transition-colors"
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="text-sm font-medium">Log out</span>}
        </Link>
      </div>
    </aside>
  );
}
