import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';

import { useSelector } from 'react-redux';
import HomeScreen from './screen/homeScreen/HomeScreen';
import SignIn from './screen/loginScreen/SignIn';
import SignUp from './screen/loginScreen/SignUp';
import Test from './screen/loginScreen/Test';
import LayoutContainer from './components/layout/LayoutContainer';
import FirebaseTestScreen from './screen/firebaseTest/FirebaseTestScreen';
import PrivateRoute from './components/my/Layout/PrivateRoute';

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PrivateRoute>
            <LayoutContainer>
              <HomeScreen></HomeScreen>
            </LayoutContainer>
          </PrivateRoute>
        }
        exact
      />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      {/* <Route
        path='/test2'
        element={
          <LayoutContainer>
            <Test></Test>
          </LayoutContainer>
        }
      ></Route> */}
      <Route
        path='/firebase-test'
        element={
          <PrivateRoute>
            <LayoutContainer>
              <FirebaseTestScreen></FirebaseTestScreen>
            </LayoutContainer>
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default App;
