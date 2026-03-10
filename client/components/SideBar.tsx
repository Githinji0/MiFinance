"use client";

import Link from "next/link";

import {
  Birdhouse,
  ChartNoAxesCombined,
  ArrowRightLeft,
  BadgeDollarSign,
  LogOut,
  ChevronsRightLeft,
} from "lucide-react";

import { useState } from "react";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <nav
      className={[
        "bg-gray p-4 relative h-screen transition-all duration-200 overflow-hidden",
        isCollapsed ? "w-16" : "w-64",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={() => setIsCollapsed((v) => !v)}
        className="absolute top-4 right-[0] p-2 rounded-full hover:text-accent transition-colors cursor-pointer"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <ChevronsRightLeft
          size={24}
          className="text-gray-300 hover:text-accent transition-colors cursor-pointer"
        />
      </button>

      <div className="container mx-auto flex items-center justify-between flex-col gap-10">
        {/* Brand */}
        <div className="text-white text-lg font-semibold tracking-wide w-full">
          <Link
            href="/"
            className={[
              "text-accent tracking-wider text-2xl flex items-center gap-2",
              isCollapsed ? "justify-center" : "",
            ].join(" ")}
          >
            {!isCollapsed ? "MiFinance" : "Mi"}
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-5 w-full">
          <Link
            href="/dashboard"
            className={[
              "text-gray-300 hover:bg-hover px-3 py-2 rounded-md text-lg font-medium w-full flex gap-2 items-center",
              isCollapsed ? "justify-center px-0" : "",
            ].join(" ")}
          >
            <Birdhouse className={isCollapsed ? "" : "ml-1"} size={24} />
            {!isCollapsed && "Dashboard"}
          </Link>

          <Link
            href="/analytics"
            className={[
              "text-gray-300 hover:bg-hover px-3 py-2 rounded-md text-lg font-medium w-full flex gap-2 items-center",
              isCollapsed ? "justify-center px-0" : "",
            ].join(" ")}
          >
            <ChartNoAxesCombined className={isCollapsed ? "" : "ml-1"} size={24} />
            {!isCollapsed && "Analytics"}
          </Link>

          <Link
            href="/transactions"
            className={[
              "text-gray-300 hover:bg-hover px-3 py-2 rounded-md text-lg font-medium w-full flex gap-2 items-center",
              isCollapsed ? "justify-center px-0" : "",
            ].join(" ")}
          >
            <ArrowRightLeft className={isCollapsed ? "" : "ml-1"} size={24} />
            {!isCollapsed && "Transactions"}
          </Link>

          <Link
            href="/budgets"
            className={[
              "text-gray-300 hover:bg-hover px-3 py-2 rounded-md text-lg font-medium w-full flex gap-2 items-center",
              isCollapsed ? "justify-center px-0" : "",
            ].join(" ")}
          >
            <BadgeDollarSign className={isCollapsed ? "" : "ml-1"} size={24} />
            {!isCollapsed && "Budgets"}
          </Link>
        </div>

        {/* Logout */}
        <div className="w-full">
          <Link
            href="/settings"
            className={[
              "text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-lg font-medium w-full flex gap-2 items-center border",
              isCollapsed ? "justify-center px-0" : "",
            ].join(" ")}
          >
            <LogOut className={isCollapsed ? "" : "ml-1"} size={24} />
            {!isCollapsed && "Log out"}
          </Link>
        </div>
      </div>
    </nav>
  );
}