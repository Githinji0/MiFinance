interface User {

  name: string;
}

export default function Dashboard() {
  const user: User = { name: "John Doe" };
  return (
    <div className="flex flex-col min-h-screen   bg-zinc-50 font-sans dark:bg-black w-full p-10 gap-5">
      <div className="">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">
          Dashboard{" "}
        </h1>
        <h3 className="text-xl text-gray-600 dark:text-gray-400">
          Welcome, {user.name}! here is your financial overview.
        </h3>
      </div>
      <div className="grid lg:grid-cols-2 place-items-center"></div>
    </div>
  );
}
