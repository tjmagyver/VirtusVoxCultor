import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    green: {
      700: '#00875F',
      500: '#00B37E',
    },
    gray: {
      900: '#000C2B',
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#868484',
      200: '#C4C4CC',
      100: '#D9D9D9'
    },
    white: '#FFFFFF',
    teal: {
      300: '#00F0FF',
    },
    red: {
      500: '#F75A68',
      900: '#90303D'
    },
    blue: {
      500: '#3159A5',
    }
  },
  fonts: {
    heading: 'Kreon_400Regular',
    body: 'InriaSans_400Regular',
    inriaLight: 'InriaSans_300Light',
    inriaRegular: 'InriaSans_400Regular',
    inriaBold: 'InriaSans_700Bold',
    jostRegular: 'Jost_400Regular'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148
  }
})