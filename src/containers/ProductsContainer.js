import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import Product from '../components/dashboard/Product'
// import ProductHeader from '../components/dashboard/ProductHeader'

const ProductsContainer = (props) => {
  const { products } = props

  return (
    <>
      <div className="col product--wrapper">
        {/* <ProductHeader products={products} /> */}
        <br />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {products && products.map((id) => <Product id={id} />)}
        </div>
      </div>
    </>
  )
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

function mapStateToProps(state) {
  const products = state.products ? Object.keys(state.products) : null

  return {
    products,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'products',
    },
  ]),
)(ProductsContainer)
