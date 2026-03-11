"use client";



interface Transaction {
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  
}

import { AddTransactionModal } from '@/components/AddTransaction';
import { CirclePlus, Search, X } from 'lucide-react';
import { useState } from 'react';


export default function Transactions() {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  
  const handleAddTransaction = (transaction: Transaction) => {
    // Handle adding transaction logic here
    setDisplayModal(false);
  };
  
  return (
    <div className="flex gap-10 min-h-screen w-full p-10 bg-zinc-50 font-sans dark:bg-gray flex-col">
      <div className="w-full flex max-h-30 justify-between px-2">
        <div className="flex h-20 flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-wide text-gray-800 dark:text-gray-200">
            Transactions Page
          </h1>
          <p>
            Welcome to your transactions page! Track all your income and
            expenses.
          </p>
        </div>
        <div className="flex h-20 items-center">
          <button 
            onClick={() => setDisplayModal(true)}
            className="bg-accent rounded-sm text-surface p-3 hover:bg-primary transition-colors flex items-center"
          >
            Add Transaction 
            <CirclePlus size={20} className="ml-2" />
          </button>
        </div>
      </div>

      <div className="w-full relative">
        <input 
          type="text" 
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-surface focus:border-transparent dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400" 
          placeholder="Search transactions..." 
        />
        <Search size={20} className="absolute right-4 top-3 text-gray-500" />
      </div>

      {displayModal && (
        <AddTransactionModal 
          isOpen={displayModal}
          onClose={() => setDisplayModal(false)}
          onAdd={handleAddTransaction}
        />
      )}
    </div>
  );
}
