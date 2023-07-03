import React from 'react'
import { cn } from '../lib/utils';



type BookingDetailsProps = {
   variant?:"default"|"active"|"disabled",
  } & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

function BookingDetails({variant="default", className, children, ...props}:BookingDetailsProps) {
    const styles: Record<typeof variant, string> = {
        active:"bg-yellow text-dark-light",
        disabled:"text-dark-light",
        default:"bg-dark text-white-dimmed "
    }
 
    return (
        <button
          className={cn(
            'flex justify-center rounded-s font-500 text-m rounded',
            styles[variant], 
            className
          )}
         
          {...props}
        >
          {children}
        </button>
      );
    }
    


export default BookingDetails