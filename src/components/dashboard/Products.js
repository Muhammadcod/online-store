import React from 'react'

function Products() {
  return (
    <>
      <div className="col-md-9 product--wrapper">
        <h3 className="head">Men&#39;s Top</h3>
        <br />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
          <div className="col product--item">
            <img src="/boy.png" alt="item" className="w-100" />
            <p className="item__name">T-Shirt Summer Vibes</p>
            <span className="item__price">#800</span>
          </div>
          <div className="col product--item">
            <img src="/boy-2.png" alt="item" className="w-100" />
            <p className="item__name">T-Shirt Summer Vibes</p>
            <span className="item__price">#800</span>
          </div>
          <div className="col product--item">
            <img src="/boy.png" alt="item" className="w-100" />
            <p className="item__name">T-Shirt Summer Vibes</p>
            <span className="item__price">#800</span>
          </div>
          <div className="col product--item">
            <img src="/boy.png" alt="item" className="w-100" />
            <p className="item__name">T-Shirt Summer Vibes</p>
            <span className="item__price">#800</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
