import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Filter from './Filter'
import Product from './Product'
// import Products from './Products'

function Dashboard(props) {
  const { products } = props

  return (
    <>
      <div className="container ">
        <div className="row">
          <Filter />
          <div className="col-md-9 product--wrapper">
            <h3 className="head">Men&#39;s Top</h3>
            <br />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
              {products &&
                products.map((productId) => (
                  <Product keys={productId} id={productId} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function mapStateToProps(state) {
  console.log('===', Object.values(state.firestore))
  const products = state.firestore.data.products
    ? Object.keys(state.firestore.data.products)
    : null

  return {
    products,
  }
}

Dashboard.propTypes = {
  products: PropTypes.array,
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'products',
    },
  ]),
)(Dashboard)
