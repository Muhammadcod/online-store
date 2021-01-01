import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Product from '../dashboard/Product'

function Homepage(props) {
  const { products } = props

  return (
    <div>
      <section
        id="carouselExampleInterval"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="10000">
            <img src="/joao-silas-2.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Sale of the summer collection</h5>
            </div>
          </div>
          <div className="carousel-item" data-interval="2000">
            <img
              src="/beautiful-beauty-casual-(1).png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="beautiful-beauty-casual-(3).png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </section>

      <section className="info border">A</section>
      <section className="container border">
        <div className="row">
          <div className="col-6 border">A</div>
          <div className="col-3 border">B</div>
          <div className="col-3 border">C</div>
        </div>
      </section>
      <section className="">ss</section>
      <section className="container latest-product">
        <div className="latest--product--title text-center">Latest Product</div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
          {products &&
            products.slice(Math.max(products.length - 3, 0)).map((id) => (
              <Link to={`/product/${id}`} keys={id}>
                <Product id={id} />
              </Link>
            ))}
        </div>
      </section>
      <section className="newsletter-wrap container border">
        <div className="newsletter--inner--wrap row ">
          <div className="col-md-12 col-lg-6 newsletter--title">
            Subscribe to our newsletter and <br /> recieve exclusive offers
            every week
          </div>
          <div className="col-md-12 col-lg-6 newsletter--form">
            <form className="d-flex border ">
              <input
                type="email"
                className="form-control form-control__subscribe__custom mr-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />

              <button type="submit" className="btn btn__subscribe">
                subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

Homepage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

function mapStateToProps(state) {
  const products = state.products ? Object.keys(state.products) : null

  return {
    products,
  }
}

export default connect(mapStateToProps)(Homepage)
