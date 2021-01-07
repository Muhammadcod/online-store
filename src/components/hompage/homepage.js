import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import adult from '../../images/adult.png'
import sales from '../../images/sales.png'
import beach from '../../images/beach.png'
import Product from '../../images/Product'

function Homepage(props) {
  const { products } = props

  return (
    <>
      <section
        id="carouselExampleInterval"
        className="carousel slide carousel-fade hero"
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
          <span className="carousel-control-prev-icon" aria-hidden="true">
            c
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            c
          </span>
          <span className="sr-only">Next</span>
        </a>
      </section>

      <section className="info border">A</section>

      <section className="container">
        <div className="row ">
          <div className="col-6 mb-4">
            <div className="card bg-dark text-white">
              <img src={adult} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a</p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div className="col-3 mb-4">
            <div className="card bg-dark text-white">
              <img
                src={beach}
                className="card-img"
                alt="..."
                style={{ height: `330px` }}
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a</p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div className="col-3 mb-4">
            <div className="card bg-dark text-white">
              <img
                src={sales}
                className="card-img"
                alt="..."
                style={{ height: `330px` }}
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a</p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="latest--product--title text-center mb-5">
          Why Should You Choose
        </div>
      </section>
      <section className="container latest-product mb-5">
        <div className="latest--product--title text-center mb-5">
          Latest Product
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
          {products &&
            products.slice(Math.max(products.length - 4, 0)).map((id) => (
              <Link to={`/product/${id}`} keys={id}>
                <Product id={id} />
              </Link>
            ))}
        </div>
      </section>

      <section className="newsletter-wrap container mb-5">
        <div className="newsletter--inner--wrap row ">
          <div className="col-md-12 col-lg-6 newsletter--title">
            <h4>
              Subscribe to our newsletter and <br /> recieve exclusive offers
              every week
            </h4>
          </div>
          <div className="col-md-12 col-lg-6 newsletter--form">
            <form className="d-flex justify-content-center px-5">
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
    </>
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
