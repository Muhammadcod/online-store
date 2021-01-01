import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <div className=" border">footer</div>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
