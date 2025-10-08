import React from 'react'

function ExpenseList({ expenses = [], onDelete }) {
  return (
    <div className="flex flex-col w-full mt-6 overflow-x-auto">
      <h3 className="text-2xl font-semibold mb-4">Expenses</h3>

      {expenses.length === 0 ? (
        <p className="text-sm text-gray-500">No expenses yet 👀</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">Category</th>
                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">Note</th>
                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">Date</th>
                <th className="px-4 py-2 text-right text-sm font-bold text-gray-700">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {expenses.map((exp, idx) => {
                const key = exp.id ?? `${exp.date}-${exp.amount}-${idx}`
                const d = new Date(exp.date)
                const dateDisplay = !Number.isNaN(d.getTime())
                  ? d.toLocaleDateString()
                  : exp.date
                const amountDisplay =
                  typeof exp.amount === 'number' ? exp.amount.toFixed(2) : exp.amount

                return (
                  <tr key={key} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm">{exp.category}</td>
                    <td className="px-4 py-2 text-sm">{exp.note}</td>
                    <td className="px-4 py-2 text-sm">{dateDisplay}</td>
                    <td className="px-4 py-2 text-sm text-right">${amountDisplay}</td>
                    <td className="px-4 py-2 text-sm text-right">
                      <button
                        type="button"
                        onClick={() => onDelete?.(exp.id)}
                        className="text-red-600 hover:text-red-800 px-2 py-1 rounded"
                      >
                        🚮
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ExpenseList
