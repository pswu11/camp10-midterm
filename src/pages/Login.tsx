import axios from 'axios';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { HiUser } from 'react-icons/hi';
import { HiKey } from 'react-icons/hi';
import useAuthStore from '../stores/auth';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const { setToken, setUser } = useAuthStore();

  return (
    <form
      onSubmit={async event => {
        event.preventDefault();

        const target = event.target as HTMLFormElement;
        const formData = new FormData(target);
        const loginInfo = Object.fromEntries(formData.entries());

        const response = await axios.post(
          'http://127.0.0.1:8000/auth/login',
          loginInfo
        );

        setToken(response.data.token);
        setUser(response.data.user);

        navigate('/');
      }}
      className="bg-dark flex flex-col gap-y-8 w-[375px] h-[667px] rounded-3xl px-5 py-8 m-auto"
    >
      <div className="space-y-3">
        <h2 className="text-l font-700 text-white">Welcome to Cine-Scape</h2>
        <p className="text-white-dimmed text-m">
          You need to log in to be able to make reservations and add movies to
          your watchlist.
        </p>
      </div>
      <div className="space-y-4">
        <Input
          name="email"
          placeholder="your@email.com"
          icon={<HiUser />}
          type="email"
        />
        <Input
          name="password"
          placeholder="Enter Your Password"
          icon={<HiKey />}
          type="password"
        />
      </div>
      <Button className="mt-auto" type="submit" label="Login" />
    </form>
  );
}
