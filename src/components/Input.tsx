import React from 'react';

type Input = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends Input {
  icon?: React.ReactNode;
}

export function Input({ icon, placeholder, id, ...props }: InputProps) {
  return (
    <label
      htmlFor={props.id}
      className="flex bg-dark-light px-4 py-2 rounded text-m font-500 outline-none focus:outline-white-dimmed"
    >
      <span className="text-white-dimmed">{icon}</span>
      <input
        id={id}
        name={id}
        placeholder={placeholder}
        className="bg-dark-light"
        {...props}
      />
    </label>
  );
}
