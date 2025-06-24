import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'react-native'
import light, { Theme } from './light'

const catppuccin_p = {
  base000: '#11111b',
  base00: '#1e1e2e',
  base01: '#181825',
  base02: '#313244',
  base03: '#45475a',
  base04: '#585b70',
  base05: '#cdd6f4',
  base06: '#f5e0dc',
  base07: '#b4befe',
  red: '#f38ba8',
  orange: '#fab387',  
  yellow: '#f9e2af',
  green: '#a6e3a1',
  cyan: '#94e2d5',
  blue: '#89b4fa',
  violet: '#cba6f7',
  magenta: '#f5c2e7'
}

export const theme: any = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: catppuccin_p.blue,
    $secondary: catppuccin_p.orange,
    $windowBackground: catppuccin_p.base00,
    $background: catppuccin_p.base00,
    $foreground: catppuccin_p.base05,
    $separator: catppuccin_p.base04,
    $navbarBackground: catppuccin_p.base01,
    $navbarBorderBottom: catppuccin_p.base00,
    $headerBarBackground: catppuccin_p.base01,
    $sidebarBackground: catppuccin_p.base000,
    $sidebarForeground: catppuccin_p.base05,
    $sidebarSeparator: catppuccin_p.base07 + '20'
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

export default theme;