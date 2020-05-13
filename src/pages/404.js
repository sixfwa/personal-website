import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"

import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <Head title="OOPS Page Not Found" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
