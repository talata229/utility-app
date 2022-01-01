import { Navigate } from 'react-router';
import useAuthUser from '../../../hooks/useAuthUser';

function PrivateRoute({ children }) {
  const { currentUser, isLoggedIn } = useAuthUser();
debugger
  return isLoggedIn === true ? children : <Navigate to='/sign-in' replace />;
}
export default PrivateRoute;
