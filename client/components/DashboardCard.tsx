export default function DashboardCard({icon, title, value}: {icon: React.ReactNode, title: string, value: string}) {
    return(
        <div className="flex border  rounded-lg p-4 items-center justify-center bg-zinc-50 font-sans dark:bg-hover w-full gap-4 flex-col shadow-md ">
            <div className="text-4xl w-full text-accent flex items-end justify-end ">{icon}</div>
            <div className="ml-4 w-full gap-4">
                <h2 className="lg:text-2xl tracking-wide font-bold text-gray-800 dark:text-gray-200">{title}</h2>
                <p className="lg:text-3xl font-bold text-gray-600 dark:text-text-muted">KES {value}</p>
            </div>
        </div>
    )
}