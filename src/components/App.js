import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Dashboard from './dashboard/Dashboard'
import Layout from './layout/Layout'

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
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  )
}

export default App
