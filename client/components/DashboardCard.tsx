export default function DashboardCard({icon, title, value}: {icon: React.ReactNode, title: string, value: string}) {
    return(
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black w-full">
            <div className="text-4xl">{icon}</div>
            <div className="ml-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{title}</h2>
                <p className="text-2xl font-bold text-gray-600 dark:text-gray-400">KES {value}</p>
            </div>
        </div>
    )
}