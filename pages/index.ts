import useAuthSession from '../hooks/useAuthSession';

const HomePage = () => {
  const { user } = useAuthSession();

  return (
    <div>
      {user ? (
        <p>User: {user.username}</p>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default HomePage;
