import type { AppProps } from 'next/app'
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { defineStyleConfig } from '@chakra-ui/react'

import '@fontsource/spartan/400.css'
import '@fontsource/spartan/700.css'

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'upppercase',
    borderRadius: 'none',
    padding: '0 2.5rem'
  },
  defaultProps: {
    colorScheme: 'brand',
  }
})

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f2f2f2',
      200: '#d9d9d9',
      300: '#bfbfbf',
      400: '#a6a6a6',
      500: '#8c8c8c',
      600: '#737373',
      700: '#595959',
      800: '#a2a2a2',
      900: '#121212',
    }
  },
  fonts: {
    heading: `'Spartan', sans-serif`,
    body: `'Spartan', sans-serif`,
  },
  components: { Button: buttonTheme },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
