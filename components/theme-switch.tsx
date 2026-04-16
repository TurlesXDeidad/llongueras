"use client"

import { useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  const isDark = resolvedTheme === "dark"

  return (
    <div className="flex items-center gap-2 text-foreground">
      <Sun className="size-4 text-foreground/80" />
      {mounted ? (
        <Switch
          checked={isDark}
          aria-label="Cambiar tema"
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
      ) : (
        <div
          aria-hidden="true"
          className="h-6 w-11 rounded-full border border-foreground/20 bg-foreground/10"
        />
      )}
      <Moon className="size-4 text-foreground/80" />
    </div>
  )
}

export { ThemeSwitch }
