import { useHistoryStore } from "../store/historyStore"
import { useCollectionStore } from "../store/collectionStore"
import { useEnvironmentStore } from "../store/environmentStore"

export default function Sidebar() {

  const history = useHistoryStore((state) => state.history) || []

  const collections = useCollectionStore((state) => state.collections) || []
  const deleteCollection = useCollectionStore((state) => state.deleteCollection)

  const variables = useEnvironmentStore((state) => state.variables)
  const addVariable = useEnvironmentStore((state) => state.addVariable)
  const deleteVariable = useEnvironmentStore((state) => state.deleteVariable)

  return (
    <div className="w-64 bg-slate-800 p-4 border-r border-slate-700 h-screen overflow-y-auto">

      <h1 className="text-xl font-bold text-blue-400 mb-6">
        API Tester
      </h1>

      {/*COLLECTIONS*/}
      <div className="mb-8">

        <h2 className="text-sm text-slate-400 mb-3">
          Collections
        </h2>

        <div className="space-y-2">

          {collections.length === 0 ? (
            <p className="text-xs text-slate-500">
              No saved collections
            </p>
          ) : (
            collections.map((item, index) => (
              <div key={index} className="bg-slate-700 p-2 rounded">

                <div
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent("loadRequest", { detail: item })
                    )
                  }}
                  className="text-xs text-slate-200 cursor-pointer hover:text-blue-400 truncate"
                >
                  <div className="font-semibold">
                    {item.name || `Request ${index + 1}`}
                  </div>

                  <div>
                    {item.method} {item.url}
                  </div>
                </div>

                <button
                  onClick={() => deleteCollection(index)}
                  className="text-[10px] text-red-400 mt-1 hover:text-red-300"
                >
                  Delete
                </button>

              </div>
            ))
          )}

        </div>

      </div>

      {/* ENVIRONMENT */}
      <div className="mb-8">

        <h2 className="text-sm text-slate-400 mb-3">
          Environment
        </h2>

        <button
          onClick={() => {
            const key = prompt("Enter variable name:")
            const value = prompt("Enter value:")

            if (!key || !value) return

            addVariable(key.trim(), value.trim())
          }}
          className="text-xs bg-blue-600 px-2 py-1 rounded mb-2 hover:bg-blue-500"
        >
          + Add Variable
        </button>

        <div className="space-y-2">

          {Object.keys(variables).length === 0 ? (
            <p className="text-xs text-slate-500">
              No variables
            </p>
          ) : (
            Object.entries(variables).map(([key, value]) => (
              <div key={key} className="bg-slate-700 p-2 rounded text-xs">

                <div className="flex justify-between items-center">
                  <span className="text-blue-400">
                    {key}
                  </span>

                  <button
                    onClick={() => deleteVariable(key)}
                    className="text-red-400 hover:text-red-300"
                  >
                    x
                  </button>
                </div>

                <div className="text-slate-300 break-words">
                  {value}
                </div>

              </div>
            ))
          )}

        </div>

      </div>

      {/* HISTORY */}
      <div>

        <h2 className="text-sm text-slate-400 mb-3">
          History
        </h2>

        <div className="space-y-2 max-h-60 overflow-y-auto">

          {history.length === 0 ? (
            <p className="text-xs text-slate-500">
              No requests yet
            </p>
          ) : (
            history.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("loadRequest", { detail: item })
                  )
                }}
                className="text-xs text-slate-300 truncate cursor-pointer hover:text-blue-400"
              >
                {item.method} {item.url}
              </div>
            ))
          )}

        </div>

      </div>

    </div>
  )
}