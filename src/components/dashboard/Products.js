import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

function Products({ products }) {
  return (
    <>
      <div className="col-md-9 product--wrapper">
        <h3 className="head">Men&#39;s Top</h3>
        <br />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
          {products &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  )
}

Products.propTypes = {
  products: PropTypes.array,
}

export default Products
