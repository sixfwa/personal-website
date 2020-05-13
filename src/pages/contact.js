import React from "react"
import Layout from "../components/layout"

import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via my Twitter{" "}
        <a
          href="https://twitter.com/sixfwa"
          target="_blank"
          rel="noopener noreferrer"
        >
          @sixfwa
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
