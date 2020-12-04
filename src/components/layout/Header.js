import React from 'react'

function Header() {
  return (
    <>
      <div className="header border">
        <nav className="navbar navbar-expand-lg navbar-light  d-flex justify-content-between container space">
          <a className="navbar-brand" href="/">
            Navbar
          </a>

          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Men<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                tabIndex="-1"
                aria-disabled="true"
              >
                Kids
              </a>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    </>
  )
}

export default Header
