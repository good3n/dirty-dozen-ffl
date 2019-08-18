import React from "react"
import styled from "styled-components"

const StyledScoringRow = styled.div`
  display: grid;
  grid-template-columns: 35% 20% 45%;
  font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 13px;
  border-bottom: 1px solid #e2e8f0;

  &:nth-of-type(odd) {
    background: #F7FAFC;
  }

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: #D4D9E2;
  }

  div {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 8px;
    box-sizing: border-box;

    &:nth-of-type(1),
    &:nth-of-type(2) {
      border-right: 1px solid #e2e8f0;
    }
  }
`

const ScoringRow = (props) => (
  <StyledScoringRow>
    <div>{props.title}</div>
    <div>{props.value}</div>
    <div>{props.bonus}</div>
  </StyledScoringRow>
)

export default ScoringRow
