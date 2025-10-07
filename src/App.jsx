import React from 'react'
import ExpenseForm from './components/ExpenseForm'

function App() {
  return (
    < div className="App mx-auto p-4 max-w-2xl">
      <h1 className='heading text-4xl mx-15 my-10'>
        Expense Handler
        </h1>
    <ExpenseForm/>
    </div>
  )
}

export default App
