import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { formatProduct } from '../../util/helpers'

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
function mapStateToProps(state, { id }) {
  const product = state.products[id]

  return {
    product,
  }
}

Product.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  product: PropTypes.object,
}

export default connect(mapStateToProps)(Product)
