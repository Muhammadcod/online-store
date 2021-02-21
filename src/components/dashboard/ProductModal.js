import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { useHistory, withRouter, Redirect, Link } from 'react-router-dom'
import { handleAddProductToCart } from '../../store/actions/cart'
// import PropTypes from 'prop-types'

function ProductModal(props) {
  const history = useHistory()
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)

  const addToCart = () => {
    history.goBack()
    console.log('successful')
    setOpen(true)
  }

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  // to={{
  //   pathname: `/product/${id}`,
  //       state: { background: location },
  // }}

  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  const { product } = props

  if (open) {
    return <Redirect to="/cart" />
  }
  if (product === null) return null
  const { title, url, price } = product

  return ReactDOM.createPortal(
    <>
      <div
        onClick={back}
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.15)',
        }}
      >
        <div className="modal">
          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
            aria-hidden="true"
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
            </div>
            <div className="modal-body">
              <div className="row">
                <img src={url} alt="item" className="w-100 col" />
                <div className="col">
                  <div className="mb-3">{title}</div>
                  <div className="mb-5">
                    {new Intl.NumberFormat('en-NG', {
                      style: 'currency',
                      currency: 'NGN',
                      maximumFractionDigits: 2,
                    }).format(price)}
                  </div>
                  <div>
                    <p>Quantity:</p>
                    <div
                      className="btn-group mr-3 mb-3 border"
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
                  </div>

                  <div className="mb-3 mt-5">
                    <button
                      type="button"
                      className="btn px-4"
                      style={{ background: `#FBB03B`, borderRadius: `40px` }}
                      onClick={addToCart}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('root'),
  )
}

ProductModal.propTypes = {}

function mapStateToProps(state, props) {
  const { id } = props.match.params

  const product = state.products[parseInt(id, 10)]

  return {
    product: !product ? null : product,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => dispatch(handleAddProductToCart(product)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductModal),
)
