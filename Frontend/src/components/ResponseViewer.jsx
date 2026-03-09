export default function ResponseViewer({ response }) {

  if (!response) {
    return (
      <div className="flex-1 p-4">
        <div className="bg-slate-800 p-4 rounded">
          API response will be displayed here after sending a request.
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 p-4 overflow-auto">

      <div className="mb-4 flex gap-4 text-sm">

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

      <pre className="bg-slate-800 p-4 rounded text-sm overflow-auto">
        {JSON.stringify(response.data || response.error, null, 2)}
      </pre>

    </div>
  )
}