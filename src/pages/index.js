import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const HomeWrapper = styled.section`
  display: block;
  margin-top: 50px;

  div {
    margin-bottom: 10px;

    span {
      font-weight: 700;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="The Dirty Dozen | Fantasy Football League" />
    <h1>The Dirty Dozen - Fantasy Football League</h1>
    <HomeWrapper>
      <div>
        Reigning Champion: <span>Josh Allen</span>
      </div>
      <div>
        Teams: <span>12</span>
      </div>
      <div>
        Platform: <span>Yahoo</span>
      </div>
      <div>
        Roster Positions:{" "}
        <span>
          QB, WR, WR, RB, RB, TE, W / R / T, K, DEF, BN, BN, BN, BN, BN, IR
        </span>
      </div>
      <div>
        Playoffs: <span>Week 14, 15, and 16 (6 teams)</span>
      </div>
      <div>
        Playoff Tie-Breaker:{" "}
        <span>Best regular season record vs opponent wins</span>
      </div>
      <div>
        Regular Season Tie-Breaker:{" "}
        <span>Defense points, followed by kicker</span>
      </div>
      <div>
        Divisions: <span>None</span>
      </div>
    </HomeWrapper>
  </Layout>
)

export default IndexPage
