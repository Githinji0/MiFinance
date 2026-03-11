interface TransactionCardProps {
    title: string;
    amount: number;
    date: string;
}

export default function TransactionCard({ title, amount, date }: TransactionCardProps) {
    return (
        <div className="flex space-x-4">
            <div className="shrink-0">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{date}</p>
            </div>
            <div className="ml-auto">
                <p className="text-lg font-bold text-green-500">KES {amount.toFixed(2)}</p>
            </div>
        </div>
    )
}