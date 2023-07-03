import { CgSearch } from 'react-icons/cg'

export function SearchInput() {
  return (
    <div className='relative'>
      <input className='bg-dark-light rounded-full h-12 rel pl-[3.75rem] w-full outline-none focus:ring-2 focus:ring-white-dimmed' placeholder='Search' />
      <CgSearch className='absolute left-5 top-3 text-[1.5rem] text-white-dimmed'/>
    </div>
  );
}
