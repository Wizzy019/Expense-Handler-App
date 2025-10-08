import React from 'react'

function ExpenseList({ expenses = [] }) {
  return (
    <div className='ExpenseList w-100% flex flex-col items-stretch p-5 mx-15 my-6'>
      <h3 className='font-medium text-3xl'>Expenses</h3>

      {expenses.length === 0 ? (
        <div className='text-sm text-gray-500'>No expenses yet 👀</div>
      ) : (
        <div className='flex flex-1 items-stretch'>
          <table className=''>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-4 py-3 text-left text-sm text-bold text-gray-700'>Category</th>
                <th className='px-4 py-3 text-left text-sm text-bold text-gray-700'>Note</th>
                <th className='px-4 py-3 text-left text-sm text-bold text-gray-700'>Date</th>
                <th className='px-4 py-3 text-right text-sm text-bold text-gray-700'>Amount</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-100'>
              {expenses.map((exp, idx) => {
                const key = exp.id ?? `${exp.date}-${exp.amount}-${idx}`
                // Format date (assume yyyy-mm-dd or ISO)
                let dateDisplay = exp.date || ''
                try {
                  const d = new Date(exp.date)
                  if (!Number.isNaN(d.getTime())) dateDisplay = d.toLocaleDateString()
                } catch {
                  // leave as-is
                }

                const amountDisplay = typeof exp.amount === 'number' ? exp.amount.toFixed(2) : exp.amount

                return (
                  <tr key={key} className='hover:bg-gray-50'>
                    <td className='px-4 py-3 text-sm text-gray-700'>{exp.category}</td>
                    <td className='px-4 py-3 text-sm text-gray-700'>{exp.note}</td>
                    <td className='px-4 py-3 text-sm text-gray-700'>{dateDisplay}</td>
                    <td className='px-4 py-3 text-sm text-gray-700 text-right'>${amountDisplay}</td>
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
