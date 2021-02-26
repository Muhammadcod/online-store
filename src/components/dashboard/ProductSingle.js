import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  handleAddProductToCart,
  handleUpdateToCart,
} from '../../store/actions/cart'
import Modal from './Cart'

function ProductSingle(props) {
  const [show, setShow] = useState(false)
  const [text, setText] = useState('ADD TO CART')
  const [itemQuantity, setItemQuantity] = useState(0)
  const { product, cartId } = props
  const { url, id, price, title } = product

  const handleOptionChange = (e) => {
    const selectedQuantity = e.target.value
    setItemQuantity(selectedQuantity)
  }

  const submit = () => {
    setText('ADD TO CART...')
    if (!cartId.includes(id)) {
      props.addToCart({
        itemQuantity,
        id,
        price,
        title,
      })
    } else {
      props.updateCart({
        itemQuantity,
        id,
      })
    }
    setText('ADD TO CART')
    setShow(true)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex">
              <div style={{ width: `20%` }} className="mr-5">
                <img src={url} alt="item" className="w-100" />
              </div>
              <div style={{ width: `50%` }}>
                <img src={url} alt="item" className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <span className="badge badge-secondary">sale</span>

              <p className="item__name">{title}</p>
              <div className="item__price">
                {new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                  maximumFractionDigits: 2,
                }).format(price)}
              </div>
              <form>
                <label htmlFor="exampleInputEmail1">Quantity:</label>

                <input
                  type="number"
                  id="qty"
                  min={itemQuantity}
                  defaultValue={itemQuantity}
                  name="quantity"
                  onChange={handleOptionChange}
                />

                <button
                  type="button"
                  className="btn px-4"
                  style={{ background: `#FBB03B`, borderRadius: `40px` }}
                  onClick={submit}
                >
                  {text}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} />
    </>
  )
}

ProductSingle.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  addToCart: PropTypes.func,
  product: PropTypes.object,
  cartId: PropTypes.string,
  updateCart: PropTypes.func,
}

function mapStateToProps(state, props) {
  const { id } = props.match.params
  const { products, cart } = state
  const cartId = Object.values(cart).map((c) => c.id)

  console.log(
    '...',
    Object.values(cart).map((c) => c.id),
  )
  const product = products[id]

  return {
    product,
    cartId,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => dispatch(handleAddProductToCart(product)),
    updateCart: (item) => dispatch(handleUpdateToCart(item)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductSingle),
)
