import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

const Season = styled.section`
  margin-top: 50px;
`

const StyledWinners = styled.div`

  div {
    display: grid;
    grid-template-columns: 150px 200px;
    grid-row-gap: 100px; // ?
  }

  span {
    display: flex;
    align-items: center;

    &:first-of-type {
      font-weight: 700;
    }
  }

  svg {
    width: 24px;
    margin-right: 10px;
  }
`

const Winners = (props) => (
  <StyledWinners>
    <div>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.93 30.93" style={{ fill: `#FFBE01` }}>
          <path d="M24.8 4.45c.01-.95-.03-1.55-.03-1.55H6.16s-.03.6-.01 1.55H0v1.01c0 .23.04 5.68 3.4 8.67A7.6 7.6 0 0 0 8.62 16c.31 0 .63-.02.96-.05a8.95 8.95 0 0 0 4.05 3.29v4.45H9.14v2.78H7.68v1.56h15.57v-1.56h-1.48v-2.78H17.3v-4.45a8.96 8.96 0 0 0 4.05-3.29c.33.03.65.05.96.05a7.6 7.6 0 0 0 5.22-1.87c3.36-2.99 3.4-8.44 3.4-8.67v-1h-6.14zM4.74 12.62C2.83 10.92 2.26 8 2.1 6.48h4.16c.18 1.9.6 4.29 1.55 6.38.17.38.36.75.54 1.1a5.58 5.58 0 0 1-3.59-1.34zm21.43 0a5.57 5.57 0 0 1-3.6 1.34c.2-.35.38-.72.55-1.1a20.2 20.2 0 0 0 1.55-6.38h4.15c-.16 1.53-.73 4.44-2.65 6.14z" />
        </svg>
        Champion:
      </span>
      <span>{props.first}</span>
    </div>

    <div>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.93 30.93" style={{ fill: `#B5B7BB` }}>
          <path d="M24.8 4.45c.01-.95-.03-1.55-.03-1.55H6.16s-.03.6-.01 1.55H0v1.01c0 .23.04 5.68 3.4 8.67A7.6 7.6 0 0 0 8.62 16c.31 0 .63-.02.96-.05a8.95 8.95 0 0 0 4.05 3.29v4.45H9.14v2.78H7.68v1.56h15.57v-1.56h-1.48v-2.78H17.3v-4.45a8.96 8.96 0 0 0 4.05-3.29c.33.03.65.05.96.05a7.6 7.6 0 0 0 5.22-1.87c3.36-2.99 3.4-8.44 3.4-8.67v-1h-6.14zM4.74 12.62C2.83 10.92 2.26 8 2.1 6.48h4.16c.18 1.9.6 4.29 1.55 6.38.17.38.36.75.54 1.1a5.58 5.58 0 0 1-3.59-1.34zm21.43 0a5.57 5.57 0 0 1-3.6 1.34c.2-.35.38-.72.55-1.1a20.2 20.2 0 0 0 1.55-6.38h4.15c-.16 1.53-.73 4.44-2.65 6.14z" />
        </svg>
        Second:
      </span>
      <span>{props.second}</span>
    </div>

    <div>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.93 30.93" style={{ fill: `#CD7E32` }}>
          <path d="M24.8 4.45c.01-.95-.03-1.55-.03-1.55H6.16s-.03.6-.01 1.55H0v1.01c0 .23.04 5.68 3.4 8.67A7.6 7.6 0 0 0 8.62 16c.31 0 .63-.02.96-.05a8.95 8.95 0 0 0 4.05 3.29v4.45H9.14v2.78H7.68v1.56h15.57v-1.56h-1.48v-2.78H17.3v-4.45a8.96 8.96 0 0 0 4.05-3.29c.33.03.65.05.96.05a7.6 7.6 0 0 0 5.22-1.87c3.36-2.99 3.4-8.44 3.4-8.67v-1h-6.14zM4.74 12.62C2.83 10.92 2.26 8 2.1 6.48h4.16c.18 1.9.6 4.29 1.55 6.38.17.38.36.75.54 1.1a5.58 5.58 0 0 1-3.59-1.34zm21.43 0a5.57 5.57 0 0 1-3.6 1.34c.2-.35.38-.72.55-1.1a20.2 20.2 0 0 0 1.55-6.38h4.15c-.16 1.53-.73 4.44-2.65 6.14z" />
        </svg>
        Third:
      </span>
      <span>{props.third}</span>
    </div>

  </StyledWinners>
)

const HistoryPage = () => (
  <Layout>
    <SEO title="History" />
    <h1>History</h1>
    <Season>
      <h2>2018</h2>
      <Winners
        first="Lenny Baily"
        second="Matt Buzzitta"
        third="Omar Olascoaga"
      />
    </Season >
    <Season>
      <h2>2017</h2>
      <Winners
        first="Dylan Johnston"
        second="Tom Gooden"
        third="Omar Olascoaga"
      />
    </Season>
    <Season>
      <h2>2016</h2>
      <Winners
        first="Jorge Olascoaga"
        second="Omar Olascoaga"
        third="Jacob Gooden"
      />
    </Season>
    <Season>
      <h2>2015</h2>
      <Winners
        first="Tom Gooden"
        second="Jacob Gooden"
        third="Lenny Bailey"
      />
    </Season>
    <Season>
      <h2>2014</h2>
      <Winners
        first="Thomas Jean"
        second="Adam Quidort"
        third="Jacob Gooden"
      />
    </Season>
    <Season>
      <h2>2013</h2>
      <Winners
        first="Angela Green"
        second="Adam Quidort"
        third="Liz Ghezzi"
      />
    </Season>
  </Layout>
)

export default HistoryPage
