import { useState } from "react"
import Sidebar from "./components/Sidebar"
import RequestBuilder from "./components/RequestBuilder"
import ResponseViewer from "./components/ResponseViewer"

export default function App() {

  const [response, setResponse] = useState(null)

  return (
    <div className="flex h-screen bg-slate-900 text-white overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex flex-col flex-1">

        {/* Request Builder (top) */}
        <div className="border-b border-slate-700">
          <RequestBuilder setResponse={setResponse} />
        </div>

        {/* Response Viewer (bottom, scrollable) */}
        <div className="flex-1 overflow-auto">
          <ResponseViewer response={response} />
        </div>

      </div>

    </div>
  )
}
