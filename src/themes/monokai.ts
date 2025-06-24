import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'react-native'
import light, { Theme } from './light'

// Palette
const p = {
  base000: '#1e1f1c',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#cfcfc2',
  base06: '#f8f8f2',
  base07: '#f9f8f5',
  red: '#f92672',
  orange: '#fd971f',
  yellow: '#f4bf75',
  green: '#a6e22e',
  cyan: '#a1efe4',
  blue: '#66d9ef',
  violet: '#ae81ff',
  magenta: '#f92672'
}

export const theme: any= createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: p.blue,
    $secondary: p.orange,
    $windowBackground: p.base00,
    $background: p.base00,
    $foreground: p.base06,
    $separator: p.base04,
    $navbarBackground: p.base01,
    $navbarBorderBottom: p.base00,
    $headerBarBackground: p.base01,
    $sidebarBackground: p.base000,
    $sidebarForeground: p.base06,
    $sidebarSeparator: p.base07 + '20'
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