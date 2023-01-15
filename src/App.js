import logo from './logo.svg';
import './App.css';
import Login from './Authentication/Login';
import { useState } from 'react';
import AuthConProvider from './Context/Authentication';
import { Route, Router } from 'react-router';
import AppContainer from './appcontainer';
import Dashboard from './Dashboard/Dashboard';



function App() {




  return (

    <AuthConProvider>
              <AppContainer/>
     </AuthConProvider>

  );
}

export default App;
