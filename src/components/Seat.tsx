import { cn } from "../lib/utils"
import React from "react"

type SeatProps = {
    variant?: "free"|"selected",
    disabled?: boolean
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

function Seat({variant = "free", disabled = false, ...props} : SeatProps) {
    const disabledStyle = disabled ? "bg-white" : ""
    const styles : Record<typeof variant, string>={
        free : "bg-dark",
        selected : "bg-yellow",
    }
    return (
        <button className= {cn
            ("w-7 h-7 rounded",
            styles[variant],
            disabledStyle)
        } {...props} >

        </button>
    )
}

export default Seat