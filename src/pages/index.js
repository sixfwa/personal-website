import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import ItemList from "../components/itemList"
import TechStack from "../components/TechStack"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.typewriter}>
        <h1>Hello World.</h1>
      </div>
      <p className={indexStyles.description}>
        Welcome to my website. You can find my projects and blog posts by
        following the links above. Below you will find the tech stack I am most
        familiar with along with a bit of professional information about myself.
      </p>
      <TechStack />
      <ItemList />
    </Layout>
  )
}

export default IndexPage
