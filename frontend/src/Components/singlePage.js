import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'
const SinglePage = () => {
  const [data, setData] = useState([])

  
  useEffect(() => {
    axios.get("http://localhost:3200/products").then((res) => {
      setData(res.data)
    })
  }, [])
  const {id}=useParams()
  
  try {
   
    const filterData = data.find(x=>{
      return x._id==id
    })
    
    console.log(filterData);
  return (
    <div>
<div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{filterData.name}</h5>
    <h5 className="card-title">{filterData.desc}</h5>
    <h5 className="card-title">{filterData.price}</h5>
      <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </div>
  )
} catch (error) {
    console.log(error)
}
}

export default SinglePage
