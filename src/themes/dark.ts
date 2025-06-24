
/*
 * Copyright (c) 2022 crazftdog (DevasLife). All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'react-native'
import light, { Theme } from './light'

// Palette
const p = {
  slate00: '#1b1c1d',
  slate10: '#202225',
  slate20: '#292c2f',
  slate30: '#2e3235',
  slate40: '#35393d',
  slate100: '#767577',
  slate900: '#dddddd',
  blue70: '#2185d0'
}

export const theme: any = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: p.blue70,
    $secondary: p.slate00,
    $windowBackground: p.slate10,
    $background: p.slate10,
    $foreground: p.slate900,
    $separator: p.slate100,
    $navbarBackground: p.slate20,
    $navbarBorderBottom: p.slate00,
    $headerBarBackground: p.slate40,
    $sidebarBackground: p.slate30,
    $sidebarForeground: p.slate900,
    $sidebarSeparator: p.slate900 + '20',
    $fieldInputBackground: p.slate00,
    $fieldInputPlaceholderTextColor: p.slate100
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
