"use client"

import { useTheme } from "next-themes"

import LetterGlitch from "@/components/LetterGlitch"

export default function PortfolioBackground() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <LetterGlitch
      aria-hidden="true"
      className="pointer-events-none z-0"
      style={{ position: "fixed", inset: 0 }}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]<>/\\|+-=*"
      glitchColors={isDark ? ["#47765f"] : ["#61dca3"]}
      baseColor={isDark ? "#85818d" : "#A4A2AA"}
      fontSize={13}
      spacing={0.35}
      density={0.96}
      baseOpacity={isDark ? 0.2 : 0.38}
      glitchAmount={isDark ? 0.2 : 0.32}
      speed={0.45}
      flow={0.24}
      smooth
      intro={false}
      interactive={false}
      clickEffect="none"
    />
  )
}
