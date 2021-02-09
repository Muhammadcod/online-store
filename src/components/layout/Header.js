import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { FaRegUser } from 'react-icons/fa'

function Header() {
  return (
    <>
      <div className="header nav-bar border">
        <nav className="navbar navbar-expand-lg  navbar-light  d-flex justify-content-between container space">
          <a className="navbar-brand " href="/">
            <img src="/noun_cloth.svg" alt="" />
            <span> Navbar</span>
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
          <div className="d-flex">
            <form className="form-inline my-2 my-lg-0 mr-4">
              <AiOutlineSearch />
            </form>
            <span className=" align-self-center mr-4">
              <HiOutlineShoppingCart />
            </span>
            <span className=" align-self-center">
              <FaRegUser />
            </span>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
