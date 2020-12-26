import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Color from './Color'

function ProductSingle(props) {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const { product } = props
  const { title, price, colors } = product
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex">
              <div style={{ width: `50px` }} className="mr-3">
                <img src="/boy.png" alt="item" className="w-100" />
              </div>
              <div style={{ width: `250px` }}>
                <img src="/boy.png" alt="item" className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6>
              <span className="badge badge-secondary">sale</span>
            </h6>
            <p className="item__name">{title}</p>
            <div className="item__price">
              {new Intl.NumberFormat('en-NG', {
                style: 'currency',
                currency: 'NGN',
                maximumFractionDigits: 2,
              }).format(price)}
            </div>
            <div>
              <p>Color:</p>
              <Color colors={colors} />
            </div>
            <div>
              <p>Size:</p>
              <Color colors={colors} />
            </div>
            <div>
              <p>Quantity:</p>
              <div
                className="btn-toolbar"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div
                  className="btn-group mr-3 border"
                  style={{ borderRadius: `5px` }}
                  role="group"
                  aria-label="First group"
                >
                  <button type="button" className="btn " onClick={decrease}>
                    -
                  </button>
                  <span className="border py-2 px-3">{count}</span>
                  <button type="button" className="btn" onClick={increase}>
                    +
                  </button>
                </div>
                <div
                  className="btn-group mr-2"
                  role="group"
                  aria-label="Second group"
                >
                  <button
                    type="button"
                    className="btn px-4"
                    style={{ background: `#FBB03B`, borderRadius: `40px` }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ProductSingle.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  product: PropTypes.object,
}

function mapStateToProps(state, props) {
  const { id } = props.match.params
  const { products } = state

  const product = products[id]

  return {
    product,
  }
}

export default withRouter(connect(mapStateToProps)(ProductSingle))
