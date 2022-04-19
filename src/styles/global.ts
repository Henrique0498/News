import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
    min-height: 100vh;
    font-size: 14px;
    color: #333;
    font-family: sans-serif;
  }
`