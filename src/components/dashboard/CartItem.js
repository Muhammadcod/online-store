import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ title, cost, quantity }) => (
  <>
    <div className="CartItem">
      <div>{title}</div>
      <div className="CartItem-details">
        <div className="CartItem-quantity">Qty: {quantity}</div>
        <div>${cost.toFixed(2)}</div>
      </div>
    </div>
  </>
)

CartItem.propTypes = {
  title: PropTypes.string,
  cost: PropTypes.number,
  quantity: PropTypes.number,
}
export default CartItem
