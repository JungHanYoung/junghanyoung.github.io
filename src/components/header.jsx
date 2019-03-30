import React from "react"
import { StaticQuery, graphql } from "gatsby"


const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => {
      return (
        <div
          className="feature"
          style={{
            backgroundImage: "url(../images/header.jpeg)",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div className="container typeset" >
            <h2 id="alembic">{data.site.siteMetadata.title}</h2>
            <p>{data.site.siteMetadata.description}</p>
          </div>
        </div>
      )
    }}
  />
)

export default Header
