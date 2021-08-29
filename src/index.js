import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Nefino from './Nefino/Nefino';
import Todo from './Todo/App';
//import './index.css'

import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';


ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <Nefino />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root1')
);

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <Todo />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root2')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
