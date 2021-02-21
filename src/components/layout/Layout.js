import React from 'react'
import PropTypes from 'prop-types'
// import Header from './Header'

function Layout({ children }) {
  return (
    <div
      className="layout d-flex justify-content-between flex-column"
      style={{ minHeight: `100vh` }}
    >
      {/* <Header /> */}
      <main>{children}</main>
      <div className=" border">footer</div>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
