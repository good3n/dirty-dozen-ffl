import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ScoringRow from "../components/scoringRow"

const Table = styled.section`

  section {
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
  }

  h3 {
    margin-top: 30px;

    svg {
      width: 30px;
      margin-right: 10px;
      position: relative;
    }
  }

  .head {
    display: grid;
    grid-template-columns: 35% 20% 45%;
    background: #e2e8f0;
    color: #4a5568;
    font-weight: 600;

    span {
      padding: 8px;
      display: block;

      &:nth-of-type(1),
      &:nth-of-type(2) {
        border-right: 1px solid #e2e8f0;
      }
    }
  }
`

const ScoringPage = () => (
  <Layout>
    <SEO title="Scoring" />
    <h1>Scoring</h1>
    <Table>

      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.01 460.01" style={{ top: `9px`, fill: `#4299e1`, width: `30px` }}>
          <path d="M400.67 100.36c-29.73-23.86-69.1-37.17-110.88-37.52-39.63-.34-77.73 10.9-107.24 31.62-16.01 11.25-28.84 24.76-38.23 40.11-5.5 9.01-9.36 16.37-10.33 15.77a12.27 12.27 0 0 0-17.88 5.76c-.4.93-3.8 9.3-6.16 18.1-.51 1.88-1 3.85-1.4 5.85-.67 3.26-4.25 6.83-6.76 9.88a12.33 12.33 0 0 0 8.2 20.06c8 .85 15.17 2.21 21.48 4.05 10.14 2.96 16.98 8.86 16.42 10.33l-1.01 2.66c-4.46 11.64-9.43 24.65-14.96 37.96-4.04 9.77-9.4 17.19-11.68 16.7-1.32-.29-2.68-.57-4.1-.89-12.58-2.74-29.81-6.47-60-11.86l-.6-.1c-11.48-1.45-20.83-2.11-27.89 3.58-4.54 3.67-6.32 8.62-7.09 12.91l-.16 1.13c-.07.62-2.23 9.41-4.72 19.68A1891.5 1891.5 0 0 0 .18 374.8a12.3 12.3 0 0 0 6.48 13.08c20.32 10.46 40.29 12.1 59.29 4.83 26.14-9.97 46.83-35.35 63.74-65.54 5.18-9.2 13.66-16.15 19.56-15.4 5.9.75 10.12 7.76 10.62 15.8.5 8.02 3.3 22.96 8.32 32.27 6.27 11.6 15.12 20.2 26.44 25.76 33.33 16.43 80.13 3.56 113.54-10.1 7.7-3.91 20.49-8.58 35.54-6.65 10.48 1.36 18.48 5.86 18.8 6.2.33.34 7.43 5.4 16.93 9.2 7.06 2.84 14.1 5.05 17.47 6.12 7.48 2.26 12.77 2.17 17.6-5.17 1.74-2.74 3.12-5.66 6.61-14.27a65.6 65.6 0 0 0 1.09-2.91c.55-1.61 1-3.23 1.13-3.56l.23-.6c1.04-2.88 2.68-6.77 4.73-11.7 11.63-27.8 35.8-85.66 31.1-136.5-4.5-48.2-24.8-88.09-58.73-115.3zM104.12 322.13c-13.5 22.57-29.1 40.81-46.95 47.63a42.13 42.13 0 0 1-15.4 2.8c-8.7-.1-13.64-11.24-11.34-21.56 6.8-30.24 13.76-57.6 13.85-57.97l.06-.26c.04-.15 1.82-.19 3.96.04 1.1.1 2.39.25 3.85.44a1424.5 1424.5 0 0 1 58.76 11.62c.42.1.84.17 1.25.26.69.16-2.61 7.94-8.04 17zm62.12-56.42c-.13 1.37-.3 2.72-.48 4.06-1.44 10.48-6.56 18.44-10.05 18.03s-2.9-8.64 1.07-18.44c.67-1.63 1.32-3.26 1.97-4.88 3.9-9.81 8.53-9.28 7.5 1.23z" />
        </svg>
        Offense
      </h3>
      <section>
        <div className="head" style={{ background: `#ebf8ff`, color: `#4299e1` }}>
          <span>Play</span>
          <span>Points</span>
          <span>Bonus</span>
        </div>
        <ScoringRow title="Passing Yards" value="25 yards per point" bonus="1 points at 300 yards; 2 points at 400 yards; 3 points at 500 yards" />
        <ScoringRow title="Passing Touchdowns" value="6" />
        <ScoringRow title="Interceptions" value="-2" />
        <ScoringRow title="Sacks" value="-1" />
        <ScoringRow title="Rushing Yards" value="10 yards per point" bonus="1 points at 100 yards; 2 points at 200 yards; 3 points at 300 yards" />
        <ScoringRow title="Receptions" value="1" />
        <ScoringRow title="Receiving Yards" value="10 yards per point" bonus="1 points at 100 yards; 2 points at 200 yards; 3 points at 300 yards" />
        <ScoringRow title="Receiving Touchdowns" value="6" />
        <ScoringRow title="2-Point Conversions" value="2" />
        <ScoringRow title="Fumbles Lost" value="-2" />
        <ScoringRow title="Offensive Fumble Return TD" value="6" />
        <ScoringRow title="40+ Yard Passing Touchdowns" value="1" />
        <ScoringRow title="40+ Yard Rushing Touchdowns" value="1" />
        <ScoringRow title="40+ Yard Receiving Touchdowns" value="1" />
      </section>

      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 396.33 396.33" style={{ top: `7px`, fill: `#38b2ac`, width: `30px` }}>
          <path d="M387.33 169.9c4.97 0 9-4.03 9-9v-30.17c0-4.96-4.03-9-9-9h-28.17V61.06c0-3.42-1.65-7.75-3.93-10.3L342.2 36.11a8.6 8.6 0 0 0-6.4-2.9 8.6 8.6 0 0 0-6.39 2.9l-13.04 14.63a17.12 17.12 0 0 0-3.93 10.32v60.66h-45.02V61.06c0-3.42-1.66-7.75-3.93-10.3l-13.04-14.64a8.6 8.6 0 0 0-6.4-2.9 8.6 8.6 0 0 0-6.4 2.9l-13.03 14.63a17.13 17.13 0 0 0-3.93 10.32v60.66h-45.03V61.06c0-3.42-1.65-7.75-3.93-10.3l-13.04-14.64a8.6 8.6 0 0 0-6.4-2.9 8.6 8.6 0 0 0-6.39 2.9l-13.04 14.63a17.12 17.12 0 0 0-3.93 10.32v60.66H83.9V61.06c0-3.42-1.66-7.75-3.93-10.3L66.93 36.11a8.6 8.6 0 0 0-6.4-2.9 8.6 8.6 0 0 0-6.4 2.9L41.1 50.75a17.12 17.12 0 0 0-3.93 10.32v60.66H9c-4.96 0-9 4.04-9 9v30.18c0 4.96 4.04 9 9 9h28.17v76.18H9c-4.96 0-9 4.04-9 9v30.17c0 4.96 4.04 9 9 9h28.17v59.86c0 4.96 4.04 9 9 9H74.9c4.96 0 9-4.04 9-9v-59.86h45.02v59.86c0 4.96 4.04 9 9 9h28.73c4.97 0 9-4.04 9-9v-59.86h45.03v59.86c0 4.96 4.04 9 9 9h28.73c4.96 0 9-4.04 9-9v-59.86h45.02v59.86c0 4.96 4.04 9 9 9h28.73c4.96 0 9-4.04 9-9v-59.86h28.17c4.96 0 9-4.04 9-9V255.1c0-4.96-4.04-9-9-9h-28.17V169.9h28.17zm-258.4 76.19H83.9V169.9h45.02v76.19zm46.72-76.19h45.03v76.19h-45.03V169.9zm91.76 0h45.02v76.19h-45.02V169.9z" />
        </svg>
        Defense / Special Teams
      </h3>
      <section>
        <div className="head" style={{ background: `#e6fffa`, color: `#38b2ac` }}>
          <span>Play</span>
          <span>Points</span>
          <span>Bonus</span>
        </div>
        <ScoringRow title="Sack" value="1" />
        <ScoringRow title="Interception" value="2" />
        <ScoringRow title="Fumble Recovery" value="2" />
        <ScoringRow title="Touchdown" value="6" />
        <ScoringRow title="Safety" value="2" />
        <ScoringRow title="Block Kick" value="3" />
        <ScoringRow title="Kickoff and Punt Return Touchdowns" value="6" />
        <ScoringRow title="Points Allowed 0 points" value="10" />
        <ScoringRow title="Points Allowed 1-6 points" value="8" />
        <ScoringRow title="Points Allowed 7-13 points" value="6" />
        <ScoringRow title="Points Allowed 14-20 points" value="4" />
        <ScoringRow title="Points Allowed 21-27 points" value="2" />
        <ScoringRow title="Points Allowed 28-34 points" value="0" />
        <ScoringRow title="Points Allowed 35+ points" value="-2" />
        <ScoringRow title="Defensive Yards Allowed 0-99" value="10" />
        <ScoringRow title="Defensive Yards Allowed 100-199" value="7" />
        <ScoringRow title="Defensive Yards Allowed 200-299" value="5" />
        <ScoringRow title="Defensive Yards Allowed 300-399" value="3" />
        <ScoringRow title="Defensive Yards Allowed 400-499" value="1" />
        <ScoringRow title="Defensive Yards Allowed 500+" value="-2" />
        <ScoringRow title="Extra Point Returned" value="2" />
      </section>

      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" style={{ top: `17px`, fill: `#f56565`, width: `30px` }}>
          <path d="M86.67 36.22A6.24 6.24 0 0 0 81.88 34c-5.58.01-7.38 5.15-8.13 8.05-.16.62-.64 2.12-.78 2.6a3.64 3.64 0 0 1-3.45 2.46c-1 0-3.38.16-6.52-3-7.35-7.42-10.2-10.65-10.23-10.68a2 2 0 0 0-2.26-.5l-3.73 1.56 4.6 6.27a2 2 0 1 1-3.22 2.37l-5.17-7.04-3.29 1.38 4.77 6.51a2 2 0 1 1-3.22 2.37l-5.34-7.28-3.38 1.43 4.76 6.48a2 2 0 0 1-3.23 2.37l-5.32-7.26-6.38 2.7c-1.57.52-12.2 4.32-12.66 10.78a6.2 6.2 0 0 0 1.63 4.8c2.56 2.75 7.42 3.12 9.58 3.13v1.73a2 2 0 0 0 4 0V63.5h7.75v1.74a2 2 0 0 0 4 0V63.5l8.7.01v1.72a2 2 0 0 0 4 0v-1.71l27.74.02v1.69a2 2 0 0 0 4 0v-1.68h6.66a2 2 0 0 0 1.98-1.75C90 59.82 92 42.24 86.67 36.2z" />
        </svg>
        Kicking
      </h3>
      <section>
        <div className="head" style={{ background: `#fff5f5`, color: `#f56565` }}>
          <span>Play</span>
          <span>Points</span>
          <span>Bonus</span>
        </div>
        <ScoringRow title="Field Goals 0-39 Yards" value="3" bonus="4 points at 40-49 yards; 5 points at 50+ yards" />
        <ScoringRow title="Point After Attempt Made" value="1" />
      </section>

    </Table>
  </Layout>
)

export default ScoringPage
