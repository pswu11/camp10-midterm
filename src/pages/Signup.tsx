import {
  HiHome,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineUserCircle,
  HiUser,
} from 'react-icons/hi';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { IoChevronBackSharp } from 'react-icons/io5';
import { BsArrowUpCircle } from 'react-icons/bs';

export default function Signup() {
  return (
    <div className="bg-dark flex flex-col items-center justify-around w-[375px] h-[667px] rounded-3xl px-5 py-8 m-auto text-white">
      <div className="flex justify-between w-3/5 self-start">
        <IoChevronBackSharp />
        <p className="text-l font-500">User Page</p>
      </div>
      <div className="bg-white-dimmed rounded-full p-1 relative">
        {<HiOutlineUserCircle className="h-16 w-16 stroke-[0.8]" />}
        <button className="rounded-full bg-yellow absolute -right-1 -bottom-1 p-1 text-dark">
          {<BsArrowUpCircle className="text-m" />}
        </button>
      </div>

      <p className="text-[1.5rem] font-500 pb-4"> {'Max Mustermann'}</p>
      <form className="flex flex-col space-y-4 pt-2 w-full">
        <Input
          name="first-name"
          placeholder="First Name*"
          icon={<HiUser />}
          type="text"
        />
        <Input
          name="last-name"
          placeholder="Last Name*"
          icon={<HiUser />}
          type="text"
        />
        <Input
          name="user-mail"
          placeholder="Mail@mail.com*"
          icon={<HiOutlineMail />}
          type="email"
        />
        <Input name="city" placeholder="City" icon={<HiHome />} type="text" />
        <Input
          name="zip"
          placeholder="Postal Id  "
          icon={<HiOutlineLocationMarker />}
          type="number"
        />
        <Button type="submit" label="Confirm Information" />
      </form>
    </div>
  );
}
