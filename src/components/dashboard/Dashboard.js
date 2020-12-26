import React from 'react'
import Filter from './Filter'
import ProductsContainer from '../../containers/ProductsContainer'

function Dashboard() {
  return (
    <>
      <div className="container ">
        <div className="row">
          <Filter />
          <ProductsContainer />
        </div>
      </div>
    </>
  )
}

export default Dashboard
