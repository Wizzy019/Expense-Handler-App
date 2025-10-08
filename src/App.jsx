import React from 'react'
import ExpenseForm from './components/ExpenseForm'


function App() {
  return (
    < div className="App h-screen w-auto mx-auto p-4 max-w-2xlm bg-gray-300">
      <h1 className="heading text-5xl font-bold mb-2.5 mx-15 my-10">
        Expense Handler
      </h1>
      <div className="ExpenseCard w-max p-5 mt-5 rounded-2xl bg-white">
      <ExpenseForm/>
      </div>
    </div>
  )
}

export default App
