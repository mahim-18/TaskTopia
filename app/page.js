"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [todolist, setTodolist] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodolist([...todolist, { title, desc }])
    setDesc("")
    setTitle("")
    console.log(todolist);
  }

  const deleteHandler = (i) => {
    let copytodo = [...todolist]
    copytodo.splice(i,1)
    setTodolist(copytodo)
  }

  let renderTodo = <h2 className='text-center text-4xl'>No Todo Assigned...</h2>
  
  if (todolist.length>0) {
    renderTodo = todolist.map((todo,i)=>{
      return <li key={i} className='flex items-center justify-between mb-3'>
        <div className='flex justify-between w-2/3'>
        <h3 className='w-2/3 text-xl font-bold'>{todo.title}</h3>
        <h5 className='w-1/2 flex-wrap'>{todo.desc}</h5>
        <svg onClick={()=>{
          deleteHandler(i)
        }} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>  
      </div>
      </li>
    })
  }

  return (
    <div>
      <>
      <h1 className='text-5xl bg-cyan-300 text-white font-bold p-5 text-center'>Mahim's Todo List</h1>
      <form onSubmit={handleSubmit  }>
        <input className='border-2 rounded-xl border-black m-10 px-5 py-2' type="text" placeholder='Add Todo Title' value={title} 
        onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <input className='border-2 rounded-xl border-black m-10 px-5 py-2' type="text" placeholder='Add Todo Description' value={desc} onChange={(e)=>{
          setDesc(e.target.value)
        }}/>
        <button className='bg-blue-600 px-4 font-bold py-2 text-xl m-10 rounded-xl text-white hover:bg-blue-300'>Add</button>
      </form>
      <hr />
      <div className="p-8 bg-slate-400">
        {renderTodo}
      </div>
      </>
    </div>
  )
}

export default page
