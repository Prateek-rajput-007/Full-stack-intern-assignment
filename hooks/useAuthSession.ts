import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/store';
import axios from 'axios';
import { setUser, clearUser } from '../redux/store';

const useAuthSession = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/auth/session');
        if (response.data.user) {
          dispatch(setUser(response.data.user));
        }
      } catch (error) {
        dispatch(clearUser());
      }
    };
    fetchUser();
  }, [dispatch]);

  return { user };
};

export default useAuthSession;
