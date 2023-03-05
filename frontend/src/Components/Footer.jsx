import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
  <footer className="text-center text-white" style={{backgroundColor: '#3f51b5'}}>
    <div className="container">
      <section className="mt-5 py-3">
        <h2>Usefull Links</h2>
        <div className="row text-center d-flex justify-content-center pt-2">
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
             <Link to="/" className="text-white">Home</Link>

            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
            <Link to="/aboutus" className="text-white">Products</Link>
            </h6>
          </div>
        </div>
      </section>
    </div>
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2020 Copyright: MidTerm Project
    </div>
  </footer>
  )
}

export default Footer
