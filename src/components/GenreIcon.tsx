
type GenreIconProps = {
  icon:string,
  genre:string,
  variant?: "default" | "active",
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function GenreIcon({
  variant = "default",
  genre,
  icon,
  className,
  ...props
}: GenreIconProps) {
  const styles: Record<typeof variant, string> = {
    default: "bg-dark-light",
    active: "bg-white-dimmed",
  }
    return (
    <div className="flex flex-col items-center">
    <button
      className={cn(
        "rounded-md flex items-center justify-center h-14 w-14",
        styles[variant],
        className
        )}{...props}
    >
      {icon}
    </button>
    <p className="text-dark-light" > {genre} </p>
    </div>
  )
}
