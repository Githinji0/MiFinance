import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-red-400 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold">MiFinance</div>
        <div>
          <Link
            href="/dashboard"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Dashboard
          </Link>
          <Link
            href="/analytics"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Analytics
          </Link>
          <Link
            href="/transactions"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Transactions
          </Link>
          <Link
            href="/budgets"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Budgets
          </Link>
        </div>
      </div>
    </nav>
  );
}
