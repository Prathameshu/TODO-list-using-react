"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [Maintask, setMaintask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    setMaintask([...Maintask,{title,desc }])
    settitle("")
    setdesc("")
    console.log(Maintask)
  }

  const deleteHandler = (i) => {
    let copytask = [...Maintask]
    copytask.splice(i,1) 
    setMaintask(copytask)
  }
  const completeHandler = (i) => {
    let copytask = [...Maintask]
    copytask.splice(i,1) 
    setMaintask(copytask)
  }


  let renderTask =<h2>No Task Found</h2>;
if(Maintask.length>0){

  renderTask=Maintask.map((t,i)=>{
    return(  
      

      <div className='flex justify-between mb-5'>
      <h5 className=' font-semibold text-2xl'>{t.title}</h5>
      <h6 className='text-xl font-semibold'>{t.desc}</h6>
      <button onClick={()=>{
      completeHandler(i)
    }}
     className=' text-white rounded bg-blue-800 p-2 '>Done</button>
    <button onClick={()=>{
      deleteHandler(i)
    }}
     className=' text-white rounded bg-red-500 p-2 '>Delete</button>

      
    </div>
    
  );
});
}
  return (
    <>
    <h2 className='text-center bg-emerald-500 p-4 text-3xl font-bold text-white'>Pratham TO DO List</h2>
   
    <form onSubmit={submitHandler}> 
      <input type='text'
       className='text-blue m-3 p-3 text-lg w-2/5 text-black' 
       placeholder='Enter Your Task' 
       value={title}
       onChange={(e)=>{
       settitle(e.target.value)
       }} 
       />
      <input type='text'  
      className='text-blue m-3 p-3 text-lg w-2/5 text-black' placeholder='Enter Task Description' 
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
        }}
      />
       
      <button className=' text-white bg-lime-950 p-2 rounded-lg'>Submit Task</button>
    </form>
    <div className='p-8 bg-slate-200 text-black' >
      {renderTask}
    </div>
    </>
  )
}

export default page