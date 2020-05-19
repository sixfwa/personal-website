import React from "react"
import Layout from "../components/layout"

import Head from "../components/head"
import ContactStack from "../components/ContactStack"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <ContactStack />
    </Layout>
  )
}

export default ContactPage
