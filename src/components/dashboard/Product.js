import React from 'react'

function Product(props) {
  return (
    <>
      <div className="col product--item">
        <img src="/boy.png" alt="item" className="w-100" />
        <p className="item__name">{props.title}</p>
        <span className="item__price">{props.price}</span>
      </div>
    </>
  )
}

export default Product
