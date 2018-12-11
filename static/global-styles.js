import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,body {
    overflow-x: hidden;
}  

html {
    margin-top: 50px; //due to fixed navbar
  }

  body {
    font-family: Arial;
  }

  body.fontLoaded {
    font-family: Arial;
  }

  #app {
    background-color: white;
  }

  p,
  label {
    font-family: Arial;
    line-height: 1.5rem;
  }
`;

export default GlobalStyle;
