/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
      heading: 'var(--font-rubik)',
      body: 'var(--font-rubik)',
    }
});

// theme.js
export default {
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      // ...
      900: '#171923',
    },
    // ...
  },
}