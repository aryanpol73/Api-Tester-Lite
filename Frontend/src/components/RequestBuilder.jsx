import { useEffect, useState } from "react"
import axios from "axios"
import { useHistoryStore } from "../store/historyStore"
import { useCollectionStore } from "../store/collectionStore"
import { useEnvironmentStore } from "../store/environmentStore"

export default function RequestBuilder({ setResponse }) {

  const [url, setUrl] = useState("")
  const [method, setMethod] = useState("GET")
  const [body, setBody] = useState("")

  const addHistory = useHistoryStore((state) => state.addHistory)
  const addCollection = useCollectionStore((state) => state.addCollection)
  const variables = useEnvironmentStore((state) => state.variables)

  // ✅ Replace environment variables
  const replaceEnv = (inputUrl) => {
    let finalUrl = inputUrl

    Object.keys(variables).forEach((key) => {
      finalUrl = finalUrl.replaceAll(`{{${key}}}`, variables[key])
    })

    return finalUrl
  }

  // ✅ Sidebar click → run request
  useEffect(() => {
    const handler = async (e) => {
      const item = e.detail || {}

      const newUrl = item.url || ""
      const newMethod = item.method || "GET"
      const newBody = item.body || null

      setUrl(newUrl)
      setMethod(newMethod)
      setBody(newBody ? JSON.stringify(newBody, null, 2) : "")

      try {
        const start = Date.now()

        const res = await axios.post("http://localhost:5000/api/request", {
          url: replaceEnv(newUrl), // ✅ FIXED
          method: newMethod,
          headers: {},
          body: newBody
        })

        const end = Date.now()

        setResponse({
          data: res.data?.data,
          status: res.data?.status,
          time: end - start
        })

      } catch (error) {
        setResponse({
          error: error.response?.data || error.message
        })
      }
    }

    window.addEventListener("loadRequest", handler)
    return () => window.removeEventListener("loadRequest", handler)
  }, [variables])

  // ✅ Send request
  const sendRequest = async () => {

    if (!url.trim()) {
      alert("Please enter a valid URL")
      return
    }

    let parsedBody = null

    try {
      parsedBody = body ? JSON.parse(body) : null
    } catch {
      alert("Invalid JSON body")
      return
    }

    try {
      const start = Date.now()

      const finalUrl = replaceEnv(url) // ✅ FIXED

      const res = await axios.post("https://api-tester-lite.onrender.com/api/request", {
        url: finalUrl,
        method,
        headers: {},
        body: parsedBody
      })

      const end = Date.now()

      setResponse({
        data: res.data?.data,
        status: res.data?.status,
        time: end - start
      })

      // ✅ Save history (store final URL)
      addHistory({
        method,
        url: finalUrl,
        body: parsedBody,
        status: res.data?.status || 200,
        time: new Date().toLocaleTimeString()
      })

    } catch (error) {

      setResponse({
        error: error.response?.data || error.message
      })

      addHistory({
        method,
        url: replaceEnv(url),
        body: parsedBody,
        status: "ERROR",
        time: new Date().toLocaleTimeString()
      })
    }
  }

  // ✅ Save to collections
  const saveToCollections = () => {

    if (!url.trim()) {
      alert("Enter URL before saving")
      return
    }

    let parsedBody = null

    try {
      parsedBody = body ? JSON.parse(body) : null
    } catch {
      alert("Invalid JSON body")
      return
    }

    const name = prompt("Enter collection name:")
    if (!name || !name.trim()) return

    addCollection({
      name: name.trim(),
      method,
      url,
      body: parsedBody
    })

    alert("Saved to collections")
  }

  return (
    <div className="p-4 border-b border-slate-700">

      <div className="flex gap-2 mb-3">

        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="bg-slate-800 p-2 rounded text-white"
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>

        <input
          type="text"
          placeholder="Enter API URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 p-2 rounded bg-slate-800 text-white"
        />

        <button
          onClick={sendRequest}
          className="bg-blue-600 px-4 py-2 rounded text-white"
        >
          Send
        </button>

        <button
          onClick={saveToCollections}
          className="bg-emerald-600 px-4 py-2 rounded text-white"
        >
          Save
        </button>

      </div>

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