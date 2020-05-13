import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./styles/footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>A {data.site.siteMetadata.author} Production, © 2020</p>
    </footer>
  )
}

export default Footer
