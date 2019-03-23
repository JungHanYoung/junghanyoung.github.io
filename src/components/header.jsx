import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    className="header"
  >
    <div
      className="container"
    >
      <Link
        to="/"
        className="logo"
      >
        hello
      </Link>
      <nav className="nav nav--header">
        <ul className="list list--nav">
          <li className="item item--nav item--current">
            <Link to="/">Home</Link>
          </li>
          <li className="item item--nav">
            <Link to="/about">About</Link>
          </li>
          <li className="item item--nav">
            <Link to="/category">Category</Link>
          </li>
          <li className="item item--nav">
            <Link to="/TIL">TIL</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="feature" style={{ backgroundImage: "url(https://picsum.photos/1300/400?image=989)" }}>
      <div className="container typeset">
        <h2 id="alembic">Alembic</h2>
        <p>A Jekyll boilerplate theme designed to be a starting point for any Jekyll website</p>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
