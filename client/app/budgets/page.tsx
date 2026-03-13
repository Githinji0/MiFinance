
    export default function Budgets(){
        return(
            <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black p-8">
                <div className="max-w-6xl mx-auto w-full">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">Budgets</h1>
                    
                    {/* Budget Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-24 bg-white dark:bg-zinc-900 rounded-lg animate-pulse"></div>
                        ))}
                    </div>

                    {/* Budget List */}
                    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow">
                        <div className="p-6 border-b border-gray-200 dark:border-zinc-800">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Active Budgets</h2>
                        </div>
                        <div className="divide-y divide-gray-200 dark:divide-zinc-800">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="p-6 h-20 bg-white dark:bg-zinc-900 animate-pulse"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }