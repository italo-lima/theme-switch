import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;
  }
`;
