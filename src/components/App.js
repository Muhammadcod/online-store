import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Dashboard from './dashboard/Dashboard'
import Layout from './layout/Layout'
import Login from './login/Login'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['poppins', 'sans-serif'].join(','),
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  )
}

export default App
