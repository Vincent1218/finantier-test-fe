import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react'
import Stock from './Pages/Stock'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Stock} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
