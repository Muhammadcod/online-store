import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { handleInitialData } from '../store/actions/product'
import Dashboard from '../components/dashboard/Dashboard'
import Layout from '../components/layout/Layout'
import Login from '../components/login/Login'
import Homepage from '../components/hompage/homepage'
import Signup from '../components/login/Signup'
import ProductSingle from '../components/dashboard/ProductSingle'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['poppins', 'sans-serif'].join(','),
  },
})

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData())
  })

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/product" exact component={Dashboard} />
            <Route path="/product/:id" exact component={ProductSingle} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  )
}

App.propTypes = {
  dispatch: PropTypes.func,
}

export default connect()(App)
