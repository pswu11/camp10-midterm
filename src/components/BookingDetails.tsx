import { cn } from '../lib/utils';

type BookingDetailsProps = {
  isDisabled?: boolean;
  isActive?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
function BookingDetails({
  isDisabled = false,
  isActive = false,
  className,
  children,
  ...props
}: BookingDetailsProps) {
  return (
    <button
      className={cn(
        'flex justify-center rounded-s font-500 text-m px-[1.03rem] py-[0.37rem] rounded text-white-dimmed',
        isActive
          ? 'bg-yellow text-dark-light'
          : isDisabled
          ? 'text-dark-light'
          : '',
        className
      )}
      disabled={isDisabled}
      onClick={() => {
        !isActive;
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default BookingDetails;
