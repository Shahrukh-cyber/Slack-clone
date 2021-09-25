import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import Header from './Component/Header/Header';
function App() {
  return (
    <div className='app' >
      {/* Header  */}
      {/* Sidebar */}
      {/* ChatSection */}
      <Router>

        <Switch>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;