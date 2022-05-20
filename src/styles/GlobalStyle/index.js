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
    font-family: 'Inter', sans-serif;
  }
  
  body {
    min-height: 100vh;
  }

  :root {
    font-size: 62.5%;
  
    /* * PRIMARY COLORS */
    --primary-h: 231;
    --primary-s: 13%;
    --primary-l: 11%;

    --primary: hsl(var(--primary-h) var(--primary-s) var(--primary-l));
    --primary-dark: hsl(var(--primary-h) var(--primary-s) 5%);
    --primary-light: hsl(var(--primary-h) var(--primary-s) 31%);

    /* * ON PRIMARY COLORS */
    --on-primary-h: 0;
    --on-primary-s: 0%;
    --on-primary-l: 100%;

    --on-primary: hsl(var(--on-primary-h) var(--on-primary-s) var(--on-primary-l));
    --on-primary-dark: hsl(var(--on-primary-h) var(--on-primary-s) 85%);

    /* * SECONDARY COLORS */
    --secondary-h: 43;
    --secondary-s: 100%;
    --secondary-l: 54%;

    --secondary: hsl(var(--secondary-h) var(--secondary-s) var(--secondary-l));
    --secondary-dark: hsl(var(--secondary-h) var(--secondary-s) 5%);
    --secondary-light: hsl(var(--secondary-h) var(--secondary-s) 61%);

    /* * ON SECONDARY COLORS */
    --on-secondary-h: var(--primary-h);
    --on-secondary-s: var(--primary-s);
    --on-secondary-l: var(--primary-l);

    --on-secondary: hsl(var(--on-secondary-h) var(--on-secondary-s) var(--on-secondary-l));

    /* * EXTRA COLORS */
    --special: hsl(var(--secondary-h) var(--secondary-s) 80%);
    --brand: #1947e5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--primary);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--secondary);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--on-primary);
  }
`;

export { GlobalStyle };
