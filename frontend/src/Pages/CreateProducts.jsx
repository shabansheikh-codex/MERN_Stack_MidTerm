import React, { useState } from 'react'
import { json } from 'react-router-dom'

function CreateProducts() {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [data,setData] = useState({})
  const saveData =(e)=>{
    e.preventDefault();
    // console.log(name,desc,price)
    // setData(name,desc,price)
    // console.log(data)

    const dbConnect = fetch("http://localhost:3200/create-Products", {
      method:'POST',
      body: JSON.stringify({name,desc,price}),
      headers:{
        "Content-Type":"application/json",
      }

        })
        
        setData(dbConnect)
        console.log(data)

  }

  return (
    <div className='container w-25'>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">name</label>
    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">description</label>
    <input value={desc} onChange={(e)=>setDesc(e.target.value)} type="text" className="form-control" id="desc" />
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input value={price} onChange={(e)=>setPrice(e.target.value)} type="text" className="form-control" id="price" />
  </div>
  
  <button onClick={saveData} type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default CreateProducts
