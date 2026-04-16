"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type SwitchProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

function Switch({
  className,
  checked = false,
  onCheckedChange,
  ...props
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-foreground/20 bg-foreground/10 p-0.5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-foreground/60 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=unchecked]:bg-foreground/10",
        className
      )}
      onClick={() => onCheckedChange?.(!checked)}
      {...props}
    >
      <span
        data-state={checked ? "checked" : "unchecked"}
        className="block size-5 rounded-full bg-background shadow-sm transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      />
    </button>
  )
}

export { Switch }
