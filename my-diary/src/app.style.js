import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import W95FAFont from "./assets/font/W95FA.otf"

export const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
    font-family: 'W95FA';
    src: url(${W95FAFont}) format('opentype');
    }

    :root {
        --color-bg: #008282;
        --color-primary: #02007F;
        --color-gray: #C3C3C3;
        font-family: 'W95FA', 'Galmuri9',sans-serif;
    }

    /* base styles */
    body {
        background: var(--color-bg);
        font-family: 'W95FA', 'Galmuri9',sans-serif;
    }

    ul {
        list-style-type: none;
    }

    textarea {
        resize: none;
    }

    a {
        text-decoration: none;
        color: inherit;
        &:active {
            color: red;
        }
    }
    button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: 'W95FA', 'Galmuri9',sans-serif;
        &:active {
            color: red;
        }
    }
    input, textarea {
        font-family: 'W95FA', 'Galmuri9',sans-serif;
    }
`