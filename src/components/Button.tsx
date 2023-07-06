import clsx from 'clsx';
import { cn } from '../lib/utils';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'default' | 'small';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-yellow text-dark-light',
  secondary: 'bg-dark-light text-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  default: 'py-4 text-m',
  small: 'py-1 text-s',
};

const disabledStyles = 'opacity-50';

export function Button({
  variant = 'primary',
  size = 'default',
  className,
  disabled = false,
  label = 'Button',
  children = label,
  ...props
}: ButtonProps) {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];
  const disabledStyle = disabled ? disabledStyles : '';

  return (
    <button
      className={cn(
        'flex justify-center items-center font-700  px-9 w-full rounded-lg',
        sizeStyle,
        disabledStyle,
        variantStyle,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
