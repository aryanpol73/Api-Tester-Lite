export default function ResponseViewer({ response }) {

  if (!response) {
    return (
      <div className="h-full p-4">
        <div className="bg-slate-800 p-4 rounded text-slate-400">
          API response will be displayed here after sending a request.
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col p-4">

      {/* Top Info */}
      <div className="mb-3 flex gap-4 text-sm">

        {response.status && (
          <span className="text-green-400">
            Status: {response.status}
          </span>
        )}

        {response.time && (
          <span className="text-yellow-400">
            Time: {response.time} ms
          </span>
        )}

      </div>

      {/* Response Body (SCROLLABLE) */}
      <div className="flex-1 overflow-auto bg-slate-800 p-4 rounded">

        <pre className="text-sm whitespace-pre-wrap break-words">
          {JSON.stringify(response.data || response.error, null, 2)}
        </pre>

      </div>

    </div>
  )
}