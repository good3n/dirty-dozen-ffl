/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "../styles/normalize.css"
import "../styles/global.css"
import Header from "./header"

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer style={{ margin: `70px 0 30px` }}>
          © {new Date().getFullYear()} by
          {` `}
          <a href="https://tomgooden.net">@good3n</a>
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
