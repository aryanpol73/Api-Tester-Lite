import { useState } from "react"
import Sidebar from "./components/Sidebar"
import RequestBuilder from "./components/RequestBuilder"
import ResponseViewer from "./components/ResponseViewer"

export default function App() {
  const [response, setResponse] = useState(null);

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <RequestBuilder setResponse={setResponse} />
        <ResponseViewer response={response} />
      </div>
    </div>
  );
}
