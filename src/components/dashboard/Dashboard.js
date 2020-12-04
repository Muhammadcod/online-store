import React from 'react'
import Filter from './Filter'
import Products from './Products'

function Dashboard() {
  return (
    <>
      <div className="container ">
        <div className="row">
          <Filter />
          <Products />
        </div>
      </div>
    </>
  )
}

export default Dashboard
