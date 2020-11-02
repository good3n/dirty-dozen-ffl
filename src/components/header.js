import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../components/image"

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 70px 1fr;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 50px;
  border-bottom: 1px solid #edf2f7;

  @media (max-width: 700px) {
    grid-template-columns: 60px 1fr;
  }

  nav {
    justify-self: end;

    a {
      color: var(--color-text-dark);
      text-decoration: none;
      font-weight: 600;
      margin-left: 40px;
    }
  }
`

const LogoLink = styled(Link)`
  display: block;

  @media (max-width: 700px) {
    .gatsby-image-wrapper {
      max-width: 60px;
      height: 60px !important;
    }
  }
`

const Header = () => (
  <StyledHeader>
    <LogoLink to="/">
      <Logo />
    </LogoLink>
    <nav>
      <Link to="/scoring/">Scoring</Link>
      <Link to="/rules/">Rules</Link>
      <Link to="/history/">History</Link>
    </nav>
  </StyledHeader>
)

export default Header
