import { createGlobalStyle } from "styled-components";

// Estilos globais como valores padrões e variáveis CSS globais
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  body {
    min-height: 100vh;
  }

  :root {
    font-size: 62.5%;
    --primary-light: #f0f0f0;
    --primary: #c0c0c0;
    --primary-dark: #999999;
    
    --secondary-light: #D5B741;
    --secondary: #F5B741;
    --secondary-dark: #D5A731;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export { GlobalStyle };
