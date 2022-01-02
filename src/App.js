import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useRoutes,
} from 'react-router-dom';

import { useSelector } from 'react-redux';
import HomeScreen from './screen/homeScreen/HomeScreen';
import SignIn from './screen/loginScreen/SignIn';
import SignUp from './screen/loginScreen/SignUp';
import Test from './screen/loginScreen/Test';
import LayoutContainer from './components/layout/LayoutContainer';
import FirebaseTestScreen from './screen/firebaseTest/FirebaseTestScreen';
import AuthGuard from './app/auth';
import { AllPages } from './routes/routes';

const App = () => {
  const all_pages = useRoutes(AllPages());
  return (
    <>
      {' '}
      {all_pages}
      <Routes>
        <Route
          path='/'
          element={
            <AuthGuard>
              <LayoutContainer>
                <HomeScreen></HomeScreen>
              </LayoutContainer>
            </AuthGuard>
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
            <LayoutContainer>
              <FirebaseTestScreen></FirebaseTestScreen>
            </LayoutContainer>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
