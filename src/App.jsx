import React, { useEffect, useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses, setExpenses] = useState(() => {
    try {
      const raw = localStorage.getItem('expenses')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('expenses', JSON.stringify(expenses))
    } catch {
      // ignore storage errors
    }
  }, [expenses])

  function addExpense(exp) {
    const newExpense = { id: Date.now().toString(), ...exp }
    setExpenses((prev) => [newExpense, ...prev])
  }

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id))
  }

  return (
    <div className='App min-h-9/10 w-auto mx-auto p-4 bg-gray-300'>
      <h1 className='heading text-5xl font-bold mb-2.5 mx-15 my-10'>
        Expense Handler
      </h1>
      <div className='ExpenseCard h-3/4 w-max p-5 mt-5 rounded-2xl bg-white'>
  <ExpenseForm onAddExpense={addExpense} />
  <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      </div>
    </div>
  )
}

export default App
