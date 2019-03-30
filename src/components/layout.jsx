/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "../styles/main.scss"

import Footer from "./footer";
import NavBar from "./common/NavBar";
import Header from "./header";

const Layout = ({ children, isHome }) => (
  <>
    <NavBar
      active="home"
    />
    {isHome && <Header />}
    {/* <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      /> */}
    <main className="main container">{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
