"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <SwitchPrimitives.Root
            className={cn(
                "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
                className
            )}
            {...props}
            ref={ref}
            onCheckedChange={(checked) => {
                setTheme(checked ? "dark" : "light");
            }}
            defaultChecked={isDark}
        >
            <SwitchPrimitives.Thumb
                className={cn(
                    "pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
                )}
            >
                {!isDark ? (
                    <Moon className="h-4 w-4 text-primary" />
                ) : (
                    <Sun className="h-4 w-4 text-secondary" />
                )}
            </SwitchPrimitives.Thumb>
        </SwitchPrimitives.Root>
    );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
