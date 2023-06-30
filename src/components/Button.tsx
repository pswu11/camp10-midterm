import { cn } from "../lib/utils"

type ButtonProps = {
  variant?: "buttonPrimaryYellowDefault" | "buttonPrimaryYellowDisabled" | "buttonPrimaryYellowSmall" | "buttonSecondaryBlackDefault"| "buttonSecondaryBlackSmallDefault"
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({
  variant = "buttonPrimaryYellowDefault",
  className,
  children = "Button",
  ...props
}: ButtonProps) {
  const styles: Record<typeof variant, string> = {
    buttonPrimaryYellowDefault: "bg-yellow  text-dark-light rounded font font-700 py-4  disabled:opacity-50",
    buttonPrimaryYellowDisabled: "bg-yellow  text-dark-light rounded font font-700 py-4  opacity-50",
    buttonPrimaryYellowSmall: "bg-yellow text-dark-light rounded font font-500 py-1  disabled:opacity-50",
    buttonSecondaryBlackDefault: "bg-dark-light text-white rounded font font-700 py-4  disabled:opacity-50",
    buttonSecondaryBlackSmallDefault: "bg-dark-light text-white rounded font font-700 py-2.5 disabled:opacity-50 ",
   

  }

  return (
    
    <button
      className={cn(
        "flex justify-center text-center text-s px-9 w-2 .w-full",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

