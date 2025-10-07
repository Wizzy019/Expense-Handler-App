import React from 'react'

function ExpenseForm() {
  return (
    <div className='ExpenseForm w-max flex flex-col p-5 mx-15 my-6'>
      <h3 className='font-medium text-3xl'>Add Expense</h3>
        <form className='flex flex-1 flex-wrap items-stretch gap-4 mt-4'>
            <div className=''>
                <label className='block mb-2 font-medium' htmlFor="Amount">Amount</label>
                <input className='p-2 border-2 border-solid rounded-2xl' type="number" id='Amount' placeholder='Enter Amount'/>
            </div>
            <div className=''>
                <label className='block mb-2 font-medium' htmlFor="Amount">Category</label>
                <select className='p-2 border-2 border-solid rounded-2xl' id='Category'>
                  <option value="Food">Food</option>
                  <option value="Transport">Transport</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Health">Health</option>
                  <option value="Other">Other</option>
                </select>
            </div>
            <div className=''>
                <label className='block mb-2 font-medium' htmlFor="Amount">Note</label>
                <input className='p-2 border-2 border-solid rounded-2xl' type="text" id='Amount' placeholder='Enter Note'/>
            </div>
            <div className=''>
                <label className='block mb-2 font-medium' htmlFor="Amount">Date</label>
                <input className='p-2 border-2 border-solid rounded-2xl' type="date" id='Amount' />
            </div>
        </form>
        <button className='border-2 border-solid rounded-3xl bg-green-500 w-20 p-2 self-end mt-2.5'>Add</button>
    </div>
  )
}

export default ExpenseForm
