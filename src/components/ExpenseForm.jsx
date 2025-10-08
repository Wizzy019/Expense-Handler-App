import React, { useState } from 'react'

function ExpenseForm({ onAddExpense }) {
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  const [note, setNote] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const parsedAmount = parseFloat(amount)
    if (Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a valid amount greater than 0.')
      return
    }
    if (!date) {
      setError('Please select a date.')
      return
    }

    const expense = { amount: parsedAmount, category, note, date }
    if (typeof onAddExpense === 'function') onAddExpense(expense)

    setAmount('')
    setCategory('Food')
    setNote('')
    setDate('')
    setError('')
  }

  return (
    <div className="w-full flex flex-col mb-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add Expense</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="amount">
              Amount
            </label>
            <input
              className="w-full p-2 border rounded-xl"
              type="number"
              id="amount"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="category">
              Category
            </label>
            <select
              className="w-full p-2 border rounded-xl"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Health">Health</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="note">
              Note
            </label>
            <input
              className="w-full p-2 border rounded-xl"
              type="text"
              id="note"
              placeholder="Enter Note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="date">
              Date
            </label>
            <input
              className="w-full p-2 border rounded-xl"
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          className="self-end mt-2 bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600 transition-colors"
          type="submit"
        >
          Add Expense
        </button>
      </form>
    </div>
  )
}

export default ExpenseForm
