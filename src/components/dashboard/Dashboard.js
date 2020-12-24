import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Filter from './Filter'
import Product from './Product'
// import VisibilityFilter from './VisibilityFilter'

function Dashboard(props) {
  const { products } = props

  return (
    <>
      <div className="container ">
        <div className="row">
          <Filter />
          <div className="col-md-9 product--wrapper">
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
                  <div
                    className="dropdown-menu"
                    aria-labelledby="btnGroupDrop1"
                  >
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
                  <div
                    className="dropdown-menu"
                    aria-labelledby="btnGroupDrop1"
                  >
                    <a className="dropdown-item" href="/">
                      POPULAR
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
              {products &&
                products.map((product) => (
                  <Product keys={product} id={product} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function mapStateToProps(state) {
  console.log('===', Object.keys(state.products))
  const products = state.products ? Object.keys(state.products) : null

  return {
    products,
  }
}

Dashboard.propTypes = {
  products: PropTypes.array,
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'products',
    },
  ]),
)(Dashboard)
