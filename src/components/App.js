import React from 'react'
import Dashboard from './dashboard/Dashboard'
import Layout from './layout/Layout'
// import { useForm } from 'react-hook-form'

function App() {
  // const { register, handleSubmit, watch, errors } = useForm()
  // const onSubmit = (data) => console.log(data)

  // console.log(watch('example'))
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}

export default App
