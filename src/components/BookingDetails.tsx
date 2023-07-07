import clsx from 'clsx';
import { cn } from '../lib/utils';

type BookingDetailsProps = {
  isDisabled?: boolean;
  isActive?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
function BookingDetails({
  isDisabled,
  isActive,
  className,
  children,
  ...props
}: BookingDetailsProps) {
  return (
    <button
      className={cn(
        'flex justify-center rounded-s font-500 text-m px-4 py-[.375rem] rounded text-white-dimmed',
        isActive ? 'bg-yellow text-dark' : '',
        isDisabled ? 'text-dark-light' : '',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default BookingDetails;
