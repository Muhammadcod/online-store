import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import Product from '../images/Product'
import ProductHeader from '../components/dashboard/ProductHeader'

const ProductsContainer = (props) => {
  const { products } = props

  return (
    <>
      <div className="col-md-9 product--wrapper">
        <ProductHeader products={products} />
        <br />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
          {products &&
            products.map((id) => (
              <Link to={`/product/${id}`} keys={id}>
                <Product id={id} />
              </Link>
            ))}
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
