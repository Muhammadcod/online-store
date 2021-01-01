import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function Product(props) {
  const { product } = props
  const { title, price } = product
  return (
    <>
      <div className="col product--item">
        <img src="/boy.png" alt="item" className="w-100" />
        <p className="item__name">{title}</p>
        <span className="item__price">
          {new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            maximumFractionDigits: 2,
          }).format(price)}
        </span>
      </div>
    </>
  )
}

Product.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

function mapStateToProps(state, { id }) {
  const product = state.products[id]

  return {
    product,
  }
}

export default connect(mapStateToProps)(Product)
