import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/selectors/AuthSelector';

const useAuthUser = () => {
  debugger
  const currentUser = useSelector((state) => state.auth.currentUser);
  const isLoggedIn = useMemo(() => {
    return ((currentUser?.user?.uid || currentUser?.uid) && true) || false;
  }, [currentUser?.user?.uid, currentUser?.uid]);
  return {
    currentUser,
    isLoggedIn,
  };
};

export default useAuthUser;
