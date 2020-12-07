import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
