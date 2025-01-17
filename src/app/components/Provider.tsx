"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

export const Provider: React.FC<{ children: ReactNode }> = ( {children} ) => {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
// export function Provider({ children }: { children: ReactNode }) {
//     return <ThemeProvider attribute="class">{children}</ThemeProvider>
// }