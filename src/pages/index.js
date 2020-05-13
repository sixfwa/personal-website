import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import ItemList from "../components/itemList"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>
        Hello <span role="img">👋</span>
      </h1>
      <h2>I am a full-stack developer.</h2>
      <ItemList />
    </Layout>
  )
}

export default IndexPage
