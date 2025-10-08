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
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-200 p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
        Expense Handler
      </h1>

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow p-5">
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      </div>
    </div>
  )
}

export default App