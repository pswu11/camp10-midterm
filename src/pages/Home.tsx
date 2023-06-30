import { Input } from '../components/Input';

export function Home() {
  return (
    <div>
      This is home page
      <Input variant="login" id="login" label="login" />
      <Input variant="search" id="search" label="search" />
    </div>
  );
}
