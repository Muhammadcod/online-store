import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
}

export default Modal
