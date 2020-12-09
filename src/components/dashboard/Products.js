import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

function Products({ products }) {
  return (
    <>
        import React, { useState } from 'react'
        import InputRange from 'react-input-range'

        function Filter() {
        const { input, setInput } = useState({ min: 2, max: 10 })
        return (
        <>
        <div className="col-md-3  ">
        <div className="sidebar">
        <div className="accordion mb-3" id="accordionExample">
        <div className="card">
        <div className="card-header" id="headingOne">
        <h6 className="mb-0 d-flex justify-content-between">
        <span>PRODUCT TYPE</span>
        <span
        className="btn  p-0"
        type="button"
        data-toggle="collapse"
        data-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        >
        #1
        </span>
        </h6>
        </div>

        <div
        id="collapseOne"
        className="collapse "
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
        >
        <div className="card-body">
        <div className="form-check">
        <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
        T-Shirt
        </label>
        </div>
        <div className="form-check">
        <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck2"
        />
        <label className="form-check-label" htmlFor="defaultCheck2">
        Trouser
        </label>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="accordion" id="accordionExample">
        <div className="card">
        <div className="card-header" id="headingOne">
        <h6 className="mb-0 d-flex justify-content-between">
        <span>PRICE</span>
        <span
        className="btn  p-0"
        type="button"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
        >
        #1
        </span>
        </h6>
        </div>

        <div
        id="collapseTwo"
        className="collapse "
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
        >
        <div className="card-body">
        <form className="form">
        <InputRange
        // maxValue={20}
        // minValue={0}
        value={input}
        onChange={(value) => setInput({ input: value })}
        />
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
        )
    }

        export default Filter

        <div className="col-md-9 product--wrapper">
        <h3 className="head">Men&#39;s Top</h3>
        <br />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
          {products &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  )
}

Products.propTypes = {
  products: PropTypes.array,
}

export default Products
{colors.map((color) => (
    <button type="button" className="btn btn-secondary">
        <div
            className="color"
            style={{
                backgroundColor: `${color}`,
                width: '15px',
                height: '15px',
            }}
        ></div>
    </button>
))}
