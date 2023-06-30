import { useState } from 'react';
import { Input } from '../components/Input';
import { HiLogin } from 'react-icons/hi';

export function Login() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = userData;

  const changeHandler = e => {
    setUserData({ ...userData, [e.target.name]: [e.target.value] });
  };

  return (
    <form className="flex flex-col items-center justify-center gap-2 bg-dark">
      <Input
        placeholder="your@email.com"
        value={username}
        onChange={changeHandler}
      />
      <Input
        placeholder="a"
        icon={<HiLogin />}
        value={password}
        onChange={changeHandler}
      />
    </form>
  );
}
