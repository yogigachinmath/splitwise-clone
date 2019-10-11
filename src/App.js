import React from "react";
import "./App.css";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Login from './components/auth/login' 

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Route path ="/" component = {Login}>
     </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
