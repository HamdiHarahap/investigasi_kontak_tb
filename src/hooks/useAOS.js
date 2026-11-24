import { useEffect } from 'react'
import AOS from 'aos'

export function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      disable: false,
    })

    return () => {
      AOS.refreshHard()
    }
  }, [])
}
