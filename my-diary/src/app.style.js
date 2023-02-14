import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    @import url('https://cdn.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css');

    @font-face {
    font-family: 'W95FA';
    src: url('../public/W95FA.otf') format('opentype');
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
        &:active {
            color: red;
        }
    }
`