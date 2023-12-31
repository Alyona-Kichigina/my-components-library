import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 4px;
  padding: 8px 14px;
  font-weight: 700;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  transition: color, background-color;
  transition-duration: 250ms;
  min-height: var(--form--elements_height, 38px);
  border-color: transparent;
  border-width: 1px;
  border-style: solid;
  &.width-min {
    min-width: var(--button-width-min, 120px);
  }
  &.width-midi {
    min-width: 130px;
  }
  &.width-medium {
    min-width: var(--button-width-medium, 160px);
  }
  &.width-max {
    width: 180px;
  }
  &.width-x-max {
    width: 230px;
  }
  &.font-weight-normal {
    font-weight: 500;
  }
  &.font-weight-light {
    font-weight: 400;
  }
  &.padding-medium {
    padding: 8px 24px;
  }
  &.padding-null {
    padding: 0;
  }
  &.height-small {
    min-height: 16px !important;
  }
`
