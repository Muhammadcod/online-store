import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

function Layout({ children }) {
  return (
    <div className="layout d-flex flex-column">
      <Header />
      <div className="py-3 flex-grow-1">
        <div className="container">All Products</div>
      </div>
      {children}
      <div className=" border">footer</div>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
