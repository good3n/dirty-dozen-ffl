import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="The Dirty Dozen | Fantasy Football League" />
    <div>Teams: 12</div>
    <div>Current Champ: Blah</div>
    <div>Platform: Yahoo</div >
    <div>Roster Positions: QB, WR, WR, RB, RB, TE, W / R / T, K, DEF, BN, BN, BN, BN, BN, IR</div>
    <div>Playoffs: Week 14, 15, and 16 (6 teams)</div>
    <div>Playoff Tie-Breaker:	Best regular season record vs opponent wins</div>
    <div>Regular Season Tie-Breaker: None</div>
    <div>Divisions:	Hello No</div>
    <div>Trade Review: Commissioner Veto</div>
  </Layout>
)

export default IndexPage
