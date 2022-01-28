// Packages
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        line-height: 1.5rem;
        overflow-x: hidden;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        background-color: #edede9;
    }

    .App {
        margin: 0 auto;
        width: 1140px;
    }

`;

export default GlobalStyle;
