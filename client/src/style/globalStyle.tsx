import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html,body,#root{
    width:100%;
    height:100%;
  }
  button{
    border:none;
    background-color: transparent;
  }

  *{
    box-sizing: border-box;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
