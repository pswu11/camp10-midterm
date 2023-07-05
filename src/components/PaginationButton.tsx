import React from 'react';
import { cn } from '../lib/utils';

type PaginationVariant = {
  isActive?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function PaginationButton({
  isActive = false,
  className,
  children,
  ...props
}: PaginationVariant) {
  return (
    <button
      className={cn(
        'flex justify-center items-center  h-8 w-8 rounded', // Added 'items-center' for vertical centering
        isActive ? 'bg-yellow text-dark-light ' : 'bg-white-dimmed',
        className
      )}
      onClick={() => {
        !isActive;
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
