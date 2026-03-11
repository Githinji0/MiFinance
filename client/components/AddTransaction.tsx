import React, { useState } from 'react';

interface Transaction {
    id: string;
    description: string;
    amount: number;
    type: 'income' | 'expense';
    date: string;
    category: string;
}

interface AddTransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (transaction: Transaction) => void;
}

export const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
    isOpen,
    onClose,
    onAdd,
}) => {
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        type: 'expense' as const,
        date: new Date().toISOString().split('T')[0],
        category: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd({
            id: Date.now().toString(),
            ...formData,
            amount: parseFloat(formData.amount),
        });
        setFormData({
            description: '',
            amount: '',
            type: 'expense',
            date: new Date().toISOString().split('T')[0],
            category: '',
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center">
            <div className="bg-hover rounded-lg p-6 w-96">
                <h2 className="text-xl text-surface font-bold mb-4">Add Transaction</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md
                        
                        placeholder:text-surface"
                    />
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                        step="0.01"
                        className="w-full px-3 py-2 border rounded-md placeholder:text-surface"
                    />
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md placeholder:text-gray text-surface"
                    >
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className=" text-surface w-full px-3 py-2 border rounded-md placeholder:text-surface"
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md placeholder:text-surface"
                    />
                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="flex-1 bg-accent text-white py-2 rounded-md hover:bg-primary transition-colors"
                        >
                            Add
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-transparent py-2 rounded-md hover:bg-red-400 text-surface transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};