import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import HeaderStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={HeaderStyles.header}>
      <h1>
        <Link className={HeaderStyles.title} to="/">
          Francis Ali
        </Link>
      </h1>
      <nav className={HeaderStyles.navList}>
        <li>
          <Link
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
            to="/blogs"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            className={HeaderStyles.navItem}
            activeClassName={HeaderStyles.activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </nav>
    </header>
  )
}

export default Header
