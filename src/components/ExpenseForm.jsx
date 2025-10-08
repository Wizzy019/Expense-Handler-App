import React, { useState } from 'react'

function ExpenseForm({ onAddExpense }) {
  // Manage each field with useState as requested in BuildFlow.md
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  const [note, setNote] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // setError('')

    const parsedAmount = parseFloat(amount)
    if (Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a valid amount greater than 0.')
      return
    }
    if (!date) {
      setError('Please select a date.')
      return
    }

    const expense = {
      amount: parsedAmount,
      category,
      note,
      date
    }

    if (typeof onAddExpense === 'function') {
      onAddExpense(expense)
    } else {
      // fallback: log to console for now
      console.log('New expense:', expense)
    }

    // clear form
    setAmount('')
    setCategory('Food')
    setNote('')
    setDate('')
    setError('')
  }

  return (
    <div className='ExpenseForm w-max flex flex-col p-5 mx-15 my-6'>
      <h3 className=' font-medium text-3xl'>Add Expense</h3>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <div className="form-row flex flex-1 flex-wrap items-stretch gap-4 mt-4">
             <div className=''>
                <label className='block mb-2 font-medium' htmlFor="amount">Amount</label>
                <input
                  className='p-2 border-2 border-solid rounded-2xl'
                  type="number"
                  id='amount'
                  placeholder='Enter Amount'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div className=''>
                <label className='block mb-2 font-medium' htmlFor="category">Category</label>
                <select
                  className='p-2 border-2 border-solid rounded-2xl'
                  id='category'
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
            <div className=''>
                <label className='block mb-2 font-medium' htmlFor="note">Note</label>
                <input
                  className='p-2 border-2 border-solid rounded-2xl'
                  type="text"
                  id='note'
                  placeholder='Enter Note'
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
            </div>
            <div className=''>
                <label className='block mb-2 font-medium' htmlFor="date">Date</label>
                <input
                  className='p-2 border-2 border-solid rounded-2xl'
                  type="date"
                  id='date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
            </div>
          </div>
         {error && <p className="error text-red-500 mt-2">{error}</p>}
          <button
            className='w-auto self-end mt-6 bg-green-500 text-white py-2 px-4 rounded-2xl hover:bg-green-600 transition-colors'
            type="submit"
          >
            Add Expense
          </button>
        </form>
    </div>
  )
}

export default ExpenseForm
