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

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/sign-in');
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <LayoutContainer>
            <HomeScreen></HomeScreen>
          </LayoutContainer>
        }
        exact
      />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route
        path='/test2'
        element={
          <LayoutContainer>
            <Test></Test>
          </LayoutContainer>
        }
      ></Route>
    </Routes>
  );
};

export default App;
