import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { handleCartData } from '../../store/actions/cart'

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

const Modal = (props) => {
  // const { state, setState } = useState()
  useEffect(() => {
    console.log('i am ready')
    props.dispatch(handleCartData())
  })

  if (!props.show) {
    return null
  }
  return ReactDOM.createPortal(
    <>
      <ModalView className="">
        <ModalContent className="">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">...</div>
        </ModalContent>
      </ModalView>
    </>,
    document.getElementById('root'),
  )
}

Modal.propTypes = {
  show: PropTypes.bool,
  dispatch: PropTypes.func,
}

/* function mapStateToProps(state, props) {
  const { id } = props.match.params
  const { products } = state

  const product = products[id]

  return {
    product,
  }
} */

export default connect()(Modal)
