import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'react-native'
import light, { Theme } from './light'

const tokyonight_p = {
  base000: '#16161e',
  base00: '#1a1b26',
  base01: '#232433',
  base02: '#2a2e42',
  base03: '#414868',
  base04: '#565f89',
  base05: '#a9b1d6',
  base06: '#c0caf5',
  base07: '#d5d6db',
  red: '#f7768e',
  orange: '#ff9e64',
  yellow: '#e0af68',
  green: '#9ece6a',
  cyan: '#73daca',
  blue: '#7aa2f7',
  violet: '#bb9af7',
  magenta: '#f7768e'
}

export const theme: any = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: tokyonight_p.blue,
    $secondary: tokyonight_p.orange,
    $windowBackground: tokyonight_p.base00,
    $background: tokyonight_p.base00,
    $foreground: tokyonight_p.base06,
    $separator: tokyonight_p.base04,
    $navbarBackground: tokyonight_p.base01,
    $navbarBorderBottom: tokyonight_p.base00,
    $headerBarBackground: tokyonight_p.base01,
    $sidebarBackground: tokyonight_p.base000,
    $sidebarForeground: tokyonight_p.base06,
    $sidebarSeparator: tokyonight_p.base07 + '20'
  },
  statusBar: {
    barStyle: 'light-content' as StatusBarStyle
  },
  textVariants: {
    ...light.textVariants
  },
  barVariants: {
    headerBar: {
      bg: '$headerBarBackground',
      borderRadius: 'hg',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 8
    }
  }
})

export default theme