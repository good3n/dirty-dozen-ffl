import React from "react"
import styled from "styled-components"

const StyledScoringRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 2fr;
  align-items: center;
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
    background: #D4D9E2 !important;
  }

  div:nth-of-type(1) {
    border-right: 1px solid #e2e8f0;
    padding: 8px;
  }

  div:nth-of-type(2) {
    border-right: 1px solid #e2e8f0;
    padding: 8px;
  }

  div:nth-of-type(3) {
    padding: 8px;
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
