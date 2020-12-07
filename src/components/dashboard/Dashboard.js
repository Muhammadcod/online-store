import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

// import { makeStyles } from '@material-ui/core/styles'

import Filter from './Filter'
import Product from './Product'

// import Products from './Products'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }))
function Dashboard(props) {
  const { products } = props
  // const classes = useStyles()

  return (
    <Container maxWidth="l" className="border">
      <div className="py-3">
        <div className="container">All Products</div>
      </div>
      <Grid container spacing={4}>
        <Filter />
        <Grid item xs={9}>
          <h3 className="head">Men&#39;s Top</h3>
          <br />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
            {products &&
              products.map((productId) => (
                <Product keys={productId} id={productId} />
              ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

function mapStateToProps(state) {
  console.log('===', Object.values(state.firestore))
  const products = state.firestore.data.products
    ? Object.keys(state.firestore.data.products)
    : null

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
