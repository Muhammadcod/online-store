import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { handleCartData } from '../store/actions/cart'
import CartItem from '../components/dashboard/CartItem'

const ModalView = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const ModalContent = styled.div`
  width: 500px;
  height: 100%;
  background-color: #fff;
`

const CartContainer = (props) => {
  useEffect(() => {
    console.log('i am ready')
    props.dispatch(handleCartData())
  })

  if (!props.show) {
    return null
  }
  const totalCost = props.itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )
  return ReactDOM.createPortal(
    <>
      <ModalView className="">
        <ModalContent className="">
          <div className="modal-header">
            <h5 className="modal-title">Cart</h5>
          </div>
          <div className="modal-body">
            {props.itemsInCart.length > 0 ? (
              <div>
                {props.itemsInCart.map((item) => (
                  <CartItem
                    key={item.id}
                    title={item.title}
                    cost={item.price * item.quantity}
                    quantity={item.quantity}
                  />
                ))}
                <div className="Cart-total-cost">
                  Total cost: #{totalCost.toFixed(2)}
                </div>
              </div>
            ) : (
              <div>Your cart is empty</div>
            )}
          </div>
          <div className="modal-footer">...</div>
        </ModalContent>
      </ModalView>
    </>,
    document.getElementById('root'),
  )
}

CartContainer.propTypes = {
  show: PropTypes.bool,
  dispatch: PropTypes.func,
}

function mapStateToProps(state) {
  const { cart } = state

  const itemsInCart = Object.values(cart).map((c) => c)

  return {
    itemsInCart,
  }
}

export default connect(mapStateToProps)(CartContainer)
