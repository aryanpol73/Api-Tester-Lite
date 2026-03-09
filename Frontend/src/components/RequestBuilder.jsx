import { useState } from "react"
import axios from "axios"
import { useHistoryStore } from "../store/historyStore"

export default function RequestBuilder({ setResponse }) {

  const [url, setUrl] = useState("")
  const [method, setMethod] = useState("GET")
  const [body, setBody] = useState("")

  const addHistory = useHistoryStore((state) => state.addHistory)

  const sendRequest = async () => {

    let parsedBody = null

    // Validate JSON body
    try {
      parsedBody = body ? JSON.parse(body) : null
    } catch {
      alert("Invalid JSON body")
      return
    }

    try {

      const start = Date.now()

      // Send request through backend proxy
      const res = await axios.post("http://localhost:5000/api/request", {
        url,
        method,
        headers: {},
        body: parsedBody
      })

      const end = Date.now()

      // Display response
      setResponse({
        data: res.data.data,
        status: res.data.status,
        time: end - start
      })

      // Save to history
      addHistory({
        method,
        url,
        time: new Date().toLocaleTimeString()
      })

    } catch (error) {

      setResponse({
        error: error.message
      })

    }

  }

  return (
    <div className="p-4 border-b border-slate-700">

      <div className="flex gap-2 mb-3">

        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="bg-slate-800 p-2 rounded text-white outline-none"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>

        <input
          type="text"
          placeholder="Enter API URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 p-2 rounded bg-slate-800 text-white placeholder-gray-400 outline-none"
        />

        <button
          onClick={sendRequest}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
        >
          Send
        </button>

      </div>

      {/* Body editor */}
      {(method === "POST" || method === "PUT") && (
        <textarea
          placeholder="Enter JSON body..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full h-32 bg-slate-800 text-white p-3 rounded"
        />
      )}

    </div>
  )
}