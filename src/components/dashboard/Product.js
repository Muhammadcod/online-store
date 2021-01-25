import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Product(props) {
  const { product, id } = props
  const { title, price } = product

  return (
    <>
      <div className="col product--item">
        <div className="card">
          <Link to={`/product/${id}`} keys={id}>
            <img src="/boy.png" className="card-img-top" alt="item" />
          </Link>

          <div className="card-body">
            <Link to={`/product/${id}`} keys={id}>
              <p className="card-title item__name">{title}</p>
            </Link>

            <span className="card-text item__price">
              {new Intl.NumberFormat('en-NG', {
                style: 'currency',
                currency: 'NGN',
                maximumFractionDigits: 2,
              }).format(price)}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

Product.propTypes = {
  product: PropTypes.object,
  id: PropTypes.number,
}

function mapStateToProps(state, { id }) {
  const product = state.products[id]

  return {
    product,
    id,
  }
}

export default connect(mapStateToProps)(Product)
