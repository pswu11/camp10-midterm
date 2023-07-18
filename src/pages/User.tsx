import axios from 'axios';
import useAuthStore from '../stores/auth';

export function User() {
  const { user, token } = useAuthStore();

  async function editUser() {
    const newUserData = {};

    await axios.patch(`http://localhost:8000/user/${user.id}`, newUserData, {
      headers: {
        Authorization: token,
      },
    });
  }

  return <p>{`Hello, ${user.firstName}! Your user ID is ${user.id}`}</p>;
}
