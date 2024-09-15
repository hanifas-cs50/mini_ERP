import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed w-72 min-h-screen flex flex-col bg-zinc-900 xl:border-l-4 border-zinc-600">
      <div className="h-16 px-4 flex items-center font-bold text-xl text-zinc-300 hover:text-white">
        MyMiniERP
      </div>
      <div className="flex flex-col divide-y divide-zinc-600">
        <Link href="#" className="p-4 font-bold rounded transition-colors hover:bg-zinc-700/50 hover:text-white">
          Income & Expenses
        </Link>
        <Link href="#" className="p-4 font-bold rounded transition-colors hover:bg-zinc-700/50 hover:text-white">
          Invoicing & Sales
        </Link>
        <Link href="#" className="p-4 font-bold rounded transition-colors hover:bg-zinc-700/50 hover:text-white">
          Inventory & Purchasing
        </Link>
        <Link href="#" className="p-4 font-bold rounded transition-colors hover:bg-zinc-700/50 hover:text-white">
          Reports & Graphs
        </Link>
      </div>
    </aside>
  )
}