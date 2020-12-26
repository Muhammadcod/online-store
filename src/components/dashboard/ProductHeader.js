import React from 'react'

function ProductHeader() {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="flex-grow-1">
          <h3 className="head mb-0 ">
            Men&#39;s Top ({products ? products.length : products})
          </h3>
        </div>
        <div className="d-flex align-items-center mr-4">
          Show products:{' '}
          <div className="btn-group ml-3" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn border dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              30
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a className="dropdown-item" href="/">
                30
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center">
          Sort:{' '}
          <div className="btn-group ml-3" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn border dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              POPULAR
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a className="dropdown-item" href="/">
                POPULAR
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductHeader
