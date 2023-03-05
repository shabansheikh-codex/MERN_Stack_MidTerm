import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Cards = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3200/products").then((res) => {
      setData(res.data)
    })
  }, [])
  
  return (
    
    <div className='container d-flex' >
      {
        data.map((x) => {
          return (
            <>
            

              <div className="card" style={{ width: '18rem' }}>
                <Link to={`/page/${x._id}`}>
                <img src={x.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5  className="card-title">{x.name}</h5>
                  <p className="card-text">{x.desc}</p>
                  <p className="card-text">{x.price}</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
                </Link>
              </div>
            </>
          )
        })
      }


    </div>
  )
}

export default Cards
