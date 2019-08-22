import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

const Seasons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;

  @media (max-width: 800px) {
    grid-gap: 50px;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

const Season = styled.div`
  /* margin-top: 50px; */
`

const StyledWinners = styled.div`

  .winner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 3px;

    @media (max-width: 650px) {
      grid-template-columns: 1fr 2fr;
    }

    @media (max-width: 420px) {
      grid-template-columns: 1fr 1fr;
    }

    > span:first-of-type {
      font-weight: 700;
      display: flex;
      align-items: center;
    }
  }

  svg {
    width: 24px;
    margin-right: 10px;
  }

  .loser {
    margin-top: 17px;

    > span {
      display: block;
      margin-top: 3px;

      &:last-of-type::after {
        content: "💩";
        margin-left: 5px;
      }

      span {
        font-weight: 700;
        display: inline-block;
      }
    }

    div {
      color: #9BC8F5;
      font-weight: 700;
      text-align: right;
      text-transform: uppercase;
      font-size: 12px;
      margin-top: -15px;

      &::after {
        content: "";
        width: 100%;
        height: 1px;
        background: #9BC8F5;
        display: block;
      }
    }
  }
`

const Winners = (props) => (
  <StyledWinners>
    <div className="winner" style={{ background: `#FBF3DF` }}>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.93 30.93" style={{ fill: `#FFBE01` }}>
          <path d="M24.8 4.45c.01-.95-.03-1.55-.03-1.55H6.16s-.03.6-.01 1.55H0v1.01c0 .23.04 5.68 3.4 8.67A7.6 7.6 0 0 0 8.62 16c.31 0 .63-.02.96-.05a8.95 8.95 0 0 0 4.05 3.29v4.45H9.14v2.78H7.68v1.56h15.57v-1.56h-1.48v-2.78H17.3v-4.45a8.96 8.96 0 0 0 4.05-3.29c.33.03.65.05.96.05a7.6 7.6 0 0 0 5.22-1.87c3.36-2.99 3.4-8.44 3.4-8.67v-1h-6.14zM4.74 12.62C2.83 10.92 2.26 8 2.1 6.48h4.16c.18 1.9.6 4.29 1.55 6.38.17.38.36.75.54 1.1a5.58 5.58 0 0 1-3.59-1.34zm21.43 0a5.57 5.57 0 0 1-3.6 1.34c.2-.35.38-.72.55-1.1a20.2 20.2 0 0 0 1.55-6.38h4.15c-.16 1.53-.73 4.44-2.65 6.14z" />
        </svg>
        Champion:
      </span>
      <span>{props.one}</span>
    </div>

    <div className="winner" style={{ background: `#F2F4F8` }}>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.93 30.93" style={{ fill: `#B5B7BB` }}>
          <path d="M24.8 4.45c.01-.95-.03-1.55-.03-1.55H6.16s-.03.6-.01 1.55H0v1.01c0 .23.04 5.68 3.4 8.67A7.6 7.6 0 0 0 8.62 16c.31 0 .63-.02.96-.05a8.95 8.95 0 0 0 4.05 3.29v4.45H9.14v2.78H7.68v1.56h15.57v-1.56h-1.48v-2.78H17.3v-4.45a8.96 8.96 0 0 0 4.05-3.29c.33.03.65.05.96.05a7.6 7.6 0 0 0 5.22-1.87c3.36-2.99 3.4-8.44 3.4-8.67v-1h-6.14zM4.74 12.62C2.83 10.92 2.26 8 2.1 6.48h4.16c.18 1.9.6 4.29 1.55 6.38.17.38.36.75.54 1.1a5.58 5.58 0 0 1-3.59-1.34zm21.43 0a5.57 5.57 0 0 1-3.6 1.34c.2-.35.38-.72.55-1.1a20.2 20.2 0 0 0 1.55-6.38h4.15c-.16 1.53-.73 4.44-2.65 6.14z" />
        </svg>
        Second:
      </span>
      <span>{props.two}</span>
    </div>

    <div className="winner" style={{ background: `#FDF2E6` }}>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.93 30.93" style={{ fill: `#CD7E32` }}>
          <path d="M24.8 4.45c.01-.95-.03-1.55-.03-1.55H6.16s-.03.6-.01 1.55H0v1.01c0 .23.04 5.68 3.4 8.67A7.6 7.6 0 0 0 8.62 16c.31 0 .63-.02.96-.05a8.95 8.95 0 0 0 4.05 3.29v4.45H9.14v2.78H7.68v1.56h15.57v-1.56h-1.48v-2.78H17.3v-4.45a8.96 8.96 0 0 0 4.05-3.29c.33.03.65.05.96.05a7.6 7.6 0 0 0 5.22-1.87c3.36-2.99 3.4-8.44 3.4-8.67v-1h-6.14zM4.74 12.62C2.83 10.92 2.26 8 2.1 6.48h4.16c.18 1.9.6 4.29 1.55 6.38.17.38.36.75.54 1.1a5.58 5.58 0 0 1-3.59-1.34zm21.43 0a5.57 5.57 0 0 1-3.6 1.34c.2-.35.38-.72.55-1.1a20.2 20.2 0 0 0 1.55-6.38h4.15c-.16 1.53-.73 4.44-2.65 6.14z" />
        </svg>
        Third:
      </span>
      <span>{props.three}</span>
    </div>

    <div className="loser">
      {props.four && <span><span>4.</span> {props.four}</span>}
      {props.five && <span><span>5.</span> {props.five}</span>}
      {props.six && <span><span>6.</span> {props.six}</span>}
      <div>Playoffs</div>
      {props.seven && <span><span>7.</span> {props.seven}</span>}
      {props.eight && <span><span>8.</span> {props.eight}</span>}
      {props.nine && <span><span>9.</span> {props.nine}</span>}
      {props.ten && <span><span>10.</span> {props.ten}</span>}
      {props.eleven && <span><span>11.</span> {props.eleven}</span>}
      {props.twelve && <span><span>12.</span> {props.twelve}</span>}
    </div>

  </StyledWinners>
)

const HistoryPage = () => (
  <Layout>
    <SEO title="History" />
    <h1 style={{ marginBottom: `50px` }}>History</h1>
    <Seasons>
      <Season>
        <h2>2018</h2>
        <Winners
          one="Lenny Baily"
          two="Matt Buzzitta"
          three="Omar Olascoaga"
          four="Jorge Olascoaga"
          five="Dylan Johnston"
          six="Tom Gooden"
          seven="Jacob Gooden"
          eight="Alex Kaiser"
          nine="Thomas Jean"
          ten="Danny Grant"
          eleven="Alec Armstrong"
          twelve="Eric Watson"
        />
      </Season >
      <Season>
        <h2>2017</h2>
        <Winners
          one="Dylan Johnston"
          two="Tom Gooden"
          three="Alec Armstrong"
          four="Thomas Jean"
          five="Omar Olascoaga"
          six="Eric Watson"
          seven="Danny Grant"
          eight="Jorge Olascoaga"
          nine="Jake Elias"
          ten="Ryan Rossi"
          eleven="Lenny Bailey"
          twelve="Jacob Gooden"
        />
      </Season>
      <Season>
        <h2>2016</h2>
        <Winners
          one="Jorge Olascoaga"
          two="Omar Olascoaga"
          three="Jacob Gooden"
          four="Thomas Jean"
          five="Eric Watson"
          six="Tom Gooden"
          seven="Cory Schneider"
          eight="Jake Elias"
          nine="Billy Gooden"
          ten="Ryan Rossi"
        />
      </Season>
      <Season>
        <h2>2015</h2>
        <Winners
          one="Tom Gooden"
          two="Jacob Gooden"
          three="Lenny Bailey"
          four="Jacob Kelly"
          five="Ryan Rossi"
          six="Thomas Jean"
          seven="Robert Scott"
          eight="Omar Olascoaga"
          nine="Doug Miller"
          ten="Steve Perczuk"
        />
      </Season>
      <Season>
        <h2>2014</h2>
        <Winners
          one="Thomas Jean"
          two="Adam Quidort"
          three="Jacob Gooden"
          four="Tom Gooden"
          five="Nick Summerlee"
          six="Joe Syzmanski"
          seven="Lenny Bailey"
          eight="Rob Hellier"
        />
      </Season>
      <Season>
        <h2>2013</h2>
        <Winners
          one="Angela Green"
          two="Adam Quidort"
          three="Liz Ghezzi"
          four="Garret Berry"
          five="Rob Hellier"
          six="Tom Gooden"
          seven="Jacob Gooden"
          eight="Kait Bartreau"
        />
      </Season>
    </Seasons>
  </Layout >
)

export default HistoryPage
