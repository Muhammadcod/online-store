import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="py-3">
        <div className="container">All Products</div>
      </div>
      {children}
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
