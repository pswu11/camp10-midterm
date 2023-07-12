import clsx from 'clsx';
import { cn } from '../lib/utils';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'default' | 'small' | 'tiny';

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
  default: 'py-4 text-m font-700',
  small: 'py-3 text-s font-700',
  tiny: 'py-1 px-16 text-s font-500'
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
      className={clsx(
        'flex justify-center items-center font-700  px-9 rounded-lg',
        disabledStyle,
        variantStyle,
        sizeStyle,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
