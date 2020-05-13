import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../images/favicon.ico"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./styles/layout.module.scss"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>

      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
