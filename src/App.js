import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import { Header, Sidebar, ChatSection, AddChannelModel } from './Component';
function App() {
  return (
    <div className='app' >
      {/* Header  */}
      {/* Sidebar */}
      {/* ChatSection */}

      <Router>
        <>

          <Header />
          <AppBody>
            <Sidebar />

            <Switch>
              <Route path="/">
                {/* <ChatSection /> */}
              </Route>
            </Switch>
          </AppBody>

        </>
      </Router>
    </div>
  );
}

export default App;
const AppBody = styled.div`
display: flex;
height: 100vh;
`