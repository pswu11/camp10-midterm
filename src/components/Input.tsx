import React from 'react';
import { cn } from '../lib/utils';

type Input = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends Input {
  label: string;
  id: string;
  variant?: 'login' | 'search';
}

export function Input({
  variant = 'login',
  className,
  id,
  ...props
}: InputProps) {
  const styles: Record<typeof variant, string> = {
    login: 'rounded bg-dark-light text-white',
    search: 'rounded-full bg-red',
  };

  return (
    <label htmlFor={id} className="border-dark-light">
      <span className="text-white">{label}:asdasd</span>
      <input
        className={cn('flex items-center', styles[variant], className)}
        id={id}
        name={id}
        {...props}
      />
    </label>
  );
}
