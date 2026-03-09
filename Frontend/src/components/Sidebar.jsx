export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-800 p-4 border-r border-slate-700">

      <h1 className="text-xl font-bold text-blue-400 mb-6">
        API Tester
      </h1>

      <ul className="space-y-3 text-slate-300">

        <li className="hover:text-white cursor-pointer">
          Collections
        </li>

        <li className="hover:text-white cursor-pointer">
          History
        </li>

        <li className="hover:text-white cursor-pointer">
          Environment
        </li>

      </ul>

    </div>
  )
}