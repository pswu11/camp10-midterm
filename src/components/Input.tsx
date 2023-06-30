import React from 'react';

type Input = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends Input {
  icon?: React.ReactNode;
}

export function Input({ icon, placeholder, id, ...props }: InputProps) {
  return (
    <label
      htmlFor={id}
      className="flex bg-dark-light px-4 py-2 rounded-md text-m font-500 outline-none focus:ring-white-dimmed"
    >
      <span className="text-white-dimmed">{icon}</span>
      <input
        id={id}
        name={id}
        placeholder={placeholder}
        className="bg-dark-light outline-none"
        {...props}
      />
    </label>
  );
}
