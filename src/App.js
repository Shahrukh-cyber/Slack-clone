import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import { Header, Sidebar, ChatSection, Login } from './Component';
import { login, logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux'
import { selectRoomId } from '../src/features/appSlice'
import { auth } from './Api/firebase'
import { useDispatch } from 'react-redux';


function App() {
  const select = useSelector(selectRoomId);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    debugger;
    auth.onAuthStateChanged((userCredential) => {
      if (userCredential) {
        dispatch(login({
          email: userCredential.email,
          uid: userCredential.uid,
          displayName: userCredential.displayName,
          photoURL: userCredential.photoURL,

        }))
      } else {
        dispatch(logout());
      }

    })
  }, [])
  return (
    <div className='app' >

      <Router>

        {user ?
          <>

            <Header />
            <AppBody>
              <Sidebar />

              <Switch>
                <Route path="/">
                  <ChatSection />
                </Route>
              </Switch>
            </AppBody>

          </> : <Login />}
      </Router>
    </div>
  );
}

export default App;
const AppBody = styled.div`
display: flex;
height: 100vh;
`