import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

function Product(props) {
  const location = useLocation()

  const { product, id } = props
  const { title, price, url } = product

  return (
    <>
      <div className="col product--item">
        <Link
          to={{
            pathname: `/product/${id}`,
            state: { background: location },
          }}
        >
          <div className="card">
            <div style={{ minHeight: `337px` }}>
              <img src={url} className="card-img-top" alt="..." />
            </div>

            <div className="card-body">
              <p className="card-title item__name">{title}</p>
              <span className="card-text item__price">
                {new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                  maximumFractionDigits: 2,
                }).format(price)}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

Product.propTypes = {
  product: PropTypes.object,
  id: PropTypes.string,
}

function mapStateToProps(state, { id }) {
  const product = state.products[id]

  return {
    product,
    id,
  }
}

export default connect(mapStateToProps)(Product)
