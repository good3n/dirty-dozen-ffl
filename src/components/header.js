import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../components/image"

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 170px 1fr;
  align-items: center;
  padding-top: 30px;

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
  max-width: 170px;
  display: block;

  @media (max-width: 700px) {
    max-width: 60px;
  }
`;

const Header = () => (
  <StyledHeader>
    <LogoLink to="/">
      <Logo />
    </LogoLink>
    <nav>
      <Link to="/scoring/">Scoring</Link>
      <Link to="/history/">History</Link>
    </nav>
  </StyledHeader>
)

export default Header
