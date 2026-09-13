import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Progress } from '@chakra-ui/react'

const NavigationProgress = () => {
  const { events } = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let timer
    const start = () => {
      clearTimeout(timer)
      timer = setTimeout(() => setLoading(true), 150)
    }
    const finish = () => {
      clearTimeout(timer)
      setLoading(false)
    }
    events.on('routeChangeStart', start)
    events.on('routeChangeComplete', finish)
    events.on('routeChangeError', finish)
    return () => {
      clearTimeout(timer)
      events.off('routeChangeStart', start)
      events.off('routeChangeComplete', finish)
      events.off('routeChangeError', finish)
    }
  }, [events])

  return loading ? (
    <Progress
      aria-label="Loading page"
      isIndeterminate
      size="xs"
      colorScheme="teal"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      pointerEvents="none"
    />
  ) : null
}

export default NavigationProgress
