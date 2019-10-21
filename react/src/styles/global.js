import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, #root {
    height: 100vh;
  }

  body, input, button {
    font: 16px Montserrat, sans-serif;
  }

  button {
    cursor: pointer;
  }
`