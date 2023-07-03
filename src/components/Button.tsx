import { cn } from '../lib/utils';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'default' | 'small';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({
  variant = 'primary',
  size = 'default',
  className,
  children = 'Button',
  ...props
}: ButtonProps) {
  const variantStyles: Record<typeof variant, string> = {
    primary: 'bg-yellow text-dark-light ',
    secondary: 'bg-dark-light text-white ',
  };
  const sizeStyles: Record<typeof size, string> = {
    default: ' font font-700 py-4 ',
    small: ' font font-500 py-1 ',
  };

  return (
    <button
      className={cn(
        'flex justify-center text-center text-s px-9  w-full rounded',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
