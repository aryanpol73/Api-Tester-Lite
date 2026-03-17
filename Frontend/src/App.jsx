import { useState } from "react"
import Sidebar from "./components/Sidebar"
import RequestBuilder from "./components/RequestBuilder"
import ResponseViewer from "./components/ResponseViewer"

export default function App() {

  const [response, setResponse] = useState(null)
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-900 text-white">

      {/* 🔹 Mobile Top Bar */}
      <div className="md:hidden p-3 border-b border-slate-700 flex justify-between items-center">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-xl"
        >
          ☰
        </button>
        <span className="font-semibold">API Tester</span>
      </div>

      {/* 🔹 Sidebar */}
      <div
        className={`
          ${showSidebar ? "block" : "hidden"} 
          md:block 
          w-full md:w-64 
          border-r border-slate-700
        `}
      >
        <Sidebar />
      </div>

      {/* 🔹 Main Section */}
      <div className="flex flex-col flex-1">

        {/* Request Builder */}
        <div className="border-b border-slate-700 p-2">
          <RequestBuilder setResponse={setResponse} />
        </div>

        {/* Response Viewer */}
        <div className="flex-1 overflow-auto p-2">
          <ResponseViewer response={response} />
        </div>

      </div>

    </div>
  )
}
