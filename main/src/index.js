import React from 'react';
import ReactDOM from 'react-dom';

import Landing from "./components/Landing.jsx"
import GlobalContext from "./GlobalContext"
import Auth from "./components/Auth.jsx"

const App = ()=>{
  return(
    <>
    <GlobalContext>
      <Landing/>
      <Auth/>
    </GlobalContext>
    </>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));