import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const HomeWrapper = styled.section`

  div {
    margin-bottom: 20px;
    display: none;

    span {
      font-weight: 700;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="The Dirty Dozen | Fantasy Football League" />
    <h1>The Dirty Dozen - Fantasy Football League</h1>
    <p>Under construction.</p>
    <HomeWrapper>
      <div>Reigning Champion: <span>Lenny Baily</span></div>
      <div>Teams: <span>12</span></div>
      <div>Platform: <span>Yahoo</span></div>
      <div>Roster Positions: <span>QB, WR, WR, RB, RB, TE, W / R / T, K, DEF, BN, BN, BN, BN, BN, IR</span></div>
      <div>Playoffs: <span>Week 14, 15, and 16 (6 teams)</span></div>
      <div>Playoff Tie-Breaker:	<span>Best regular season record vs opponent wins</span></div>
      <div>Regular Season Tie-Breaker: <span>None</span></div>
      <div>Divisions:	<span>Hello No</span></div>
      <div>Trade Review: <span>Commissioner Veto</span></div>
    </HomeWrapper>
  </Layout>
)

export default IndexPage
