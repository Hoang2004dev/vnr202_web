import { useEffect, useState } from "react"

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "")

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2

      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue

        const rect = el.getBoundingClientRect()

        if (rect.top <= middle && rect.bottom >= middle) {
          current = id
          break
        }
      }

      setActiveId(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds])

  return activeId
}