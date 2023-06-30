import React from 'react';

type Input = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends Input {
  icon?: JSX.Element;
}

export function Input({ icon, ...props }: InputProps) {
  return (
    <>
      <label
        htmlFor={props.id}
        className="flex bg-dark-light px-2 py-1 rounded text-s outline-none focus:outline-white-dimmed"
      >
        <span className="text-white-dimmed align-middle">{icon}</span>
        <input
          id={props.id}
          name={props.id}
          placeholder={props.placeholder}
          className="bg-dark-light"
          {...props}
        />
      </label>
    </>
  );
}
