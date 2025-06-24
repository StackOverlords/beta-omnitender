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

// Palette
const p = {
  // Colores básicos
  white: 'white',
  black: 'black',
  red: '#ef4444',
  blue: '#3b82f6',
  yellow: '#eab308',
  green: '#22c55e',
  orange: '#f97316',
  purple: '#a855f7',
  cyan: '#06b6d4',
  pink: '#ec4899',
  
  // Grises de papel
  paper00: '#ffffff',
  paper10: '#f5f5f4',
  paper20: '#e6e6e6',
  paper30: '#d4d4d8',
  paper50: '#a1a1aa',
  paper100: '#aeaeae',
  paper300: '#767577',
  paper400: '#64748b',
  paper500: '#475569',
  paper600: '#334155',
  paper700: '#1e293b',
  paper800: '#0f172a',
  paper900: '#202020',
  
  // Azules y navy
  blue70: '#2185d0',
  blue50: '#60a5fa',
  blue80: '#1d4ed8',
  navy20: '#171a21',
  navy900: '#b9babc',
  
  // Colores de estado
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  
  // Tonos adicionales
  slate: '#64748b',
  emerald: '#10b981',
  indigo: '#6366f1',
  teal: '#14b8a6',
  amber: '#f59e0b',
  rose: '#f43f5e'
}

const theme = createTheme({
  spacing: {
    '0': 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 48,
    hg: 128
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  },
  colors: {
    // Colores básicos
    white: p.white,
    black: p.black,
    red: p.red,
    blue: p.blue,
    yellow: p.yellow,

    // Colores principales
    $primary: p.blue70,
    $primaryVariant: p.blue80,
    $primaryLight: p.blue50,
    $secondary: p.orange,
    $secondaryVariant: p.amber,
    $accent: p.purple,
    $accentVariant: p.indigo,
    
    // Fondos
    $windowBackground: '#f0f0f0',
    $background: p.paper10,
    $backgroundVariant: p.paper00,
    $surface: p.paper00,
    $surfaceVariant: p.paper20,
    $cardBackground: p.paper20,
    $modalBackground: p.paper00,
    
    // Textos
    $foreground: p.paper900,
    $foregroundVariant: p.paper700,
    $onPrimary: p.white,
    $onSecondary: p.white,
    $onSurface: p.paper900,
    $onBackground: p.paper900,
    $textPrimary: p.paper900,
    $textSecondary: p.paper600,
    $textTertiary: p.paper400,
    $textDisabled: p.paper300,
    $placeholder: p.paper300,
    
    // Navegación
    $navbarBackground: p.paper10,
    $navbarBorderBottom: p.paper100,
    $headerBarBackground: p.paper20,
    $sidebarBackground: p.navy20,
    $sidebarForeground: p.navy900,
    $sidebarSeparator: p.paper00 + '20',
    
    // Separadores y bordes
    $separator: p.paper100,
    $border: p.paper30,
    $borderVariant: p.paper20,
    $divider: p.paper50,
    
    // Estados de interacción
    $hover: p.paper30,
    $pressed: p.paper50,
    $focused: p.blue70 + '40',
    $selected: p.blue70 + '20',
    $disabled: p.paper300,
    $disabledBackground: p.paper20,
    
    // Estados de validación
    $success: p.success,
    $successBackground: p.success + '20',
    $warning: p.warning,
    $warningBackground: p.warning + '20',
    $error: p.error,
    $errorBackground: p.error + '20',
    $info: p.info,
    $infoBackground: p.info + '20',
    
    // Botones
    $buttonPrimary: p.blue70,
    $buttonPrimaryHover: p.blue50,
    $buttonPrimaryPressed: p.blue80,
    $buttonSecondary: p.paper30,
    $buttonSecondaryHover: p.paper50,
    $buttonSecondaryPressed: p.paper100,
    $buttonOutline: 'transparent',
    $buttonOutlineHover: p.blue70 + '10',
    $buttonOutlinePressed: p.blue70 + '20',
    $buttonDanger: p.error,
    $buttonDangerHover: p.rose,
    $buttonSuccess: p.success,
    $buttonSuccessHover: p.emerald,
    
    // Inputs
    $inputBackground: p.paper00,
    $inputBackgroundFocused: p.paper00,
    $inputBorder: p.paper30,
    $inputBorderFocused: p.blue70,
    $inputBorderError: p.error,
    $inputText: p.paper900,
    $inputPlaceholder: p.paper300,
    $fieldInputBackground: p.paper00,
    $fieldInputPlaceholderTextColor: p.paper300,
    
    // Sombras
    $shadow: '#000000',
    $shadowLight: '#000000' + '10',
    $shadowMedium: '#000000' + '20',
    $shadowDark: '#000000' + '30',
    
    // Overlay
    $overlay: '#000000' + '60',
    $backdropLight: '#000000' + '10',
    $backdropMedium: '#000000' + '40',
    $backdropDark: '#000000' + '60',
    
    // Colores adicionales para elementos específicos
    $link: p.cyan,
    $linkHover: p.teal,
    $code: p.amber,
    $codeBackground: p.paper10,
    $highlight: p.yellow + '40',
    $selection: p.blue70 + '30',
    
    // Indicadores
    $indicatorActive: p.blue70,
    $indicatorInactive: p.paper100,
    $badge: p.red,
    $badgeText: p.white,
    
    // Gráficos y charts
    $chart1: p.blue,
    $chart2: p.green,
    $chart3: p.orange,
    $chart4: p.purple,
    $chart5: p.cyan,
    $chart6: p.pink
  },
  borderRadii: {
    xs: 4,
    sm: 16,
    md: 24,
    lg: 64,
    hg: 128
  },
  statusBar: {
    barStyle: 'dark-content' as StatusBarStyle
  },
  textVariants: {
    defaults: {
      color: '$foreground',
      fontSize: 16,
    },
    sidebar: {
      color: '$sidebarForeground'
    },
    navbar: {
      fontSize: 20
    },
    
    // Títulos
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '$textPrimary',
      lineHeight: 40
    },
    h2: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '$textPrimary',
      lineHeight: 36
    },
    h3: {
      fontSize: 24,
      fontWeight: '600',
      color: '$textPrimary',
      lineHeight: 32
    },
    h4: {
      fontSize: 20,
      fontWeight: '600',
      color: '$textPrimary',
      lineHeight: 28
    },
    h5: {
      fontSize: 18,
      fontWeight: '600',
      color: '$textPrimary',
      lineHeight: 24
    },
    h6: {
      fontSize: 16,
      fontWeight: '600',
      color: '$textPrimary',
      lineHeight: 22
    },
    
    // Cuerpo de texto
    body1: {
      fontSize: 16,
      color: '$textPrimary',
      lineHeight: 24
    },
    body2: {
      fontSize: 14,
      color: '$textSecondary',
      lineHeight: 20
    },
    
    // Subtítulos
    subtitle1: {
      fontSize: 16,
      fontWeight: '500',
      color: '$textPrimary',
      lineHeight: 24
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: '500',
      color: '$textSecondary',
      lineHeight: 20
    },
    
    // Texto pequeño
    caption: {
      fontSize: 12,
      color: '$textTertiary',
      lineHeight: 16
    },
    overline: {
      fontSize: 10,
      fontWeight: '500',
      color: '$textTertiary',
      lineHeight: 16,
      textTransform: 'uppercase'
    },
    
    // Botones
    button: {
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 20
    },
    buttonSmall: {
      fontSize: 14,
      fontWeight: '600',
      lineHeight: 18
    },
    
    // Labels
    label: {
      fontSize: 14,
      fontWeight: '500',
      color: '$textSecondary',
      lineHeight: 20
    },
    labelSmall: {
      fontSize: 12,
      fontWeight: '500',
      color: '$textTertiary',
      lineHeight: 16
    },
    
    // Inputs
    input: {
      fontSize: 16,
      color: '$inputText',
      lineHeight: 24
    },
    inputLabel: {
      fontSize: 14,
      fontWeight: '500',
      color: '$textSecondary',
      lineHeight: 20
    },
    
    // Enlaces
    link: {
      fontSize: 16,
      color: '$link',
      lineHeight: 24,
      textDecorationLine: 'underline'
    },
    
    // Código
    code: {
      fontSize: 14,
      color: '$code',
      fontFamily: 'monospace',
      lineHeight: 20
    }
  },
  barVariants: {
    headerBar: {
      bg: '$headerBarBackground',
      borderRadius: 'hg',
      shadowColor: '$shadow',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4
    },
    
    tabBar: {
      bg: '$navbarBackground',
      borderTopWidth: 1,
      borderTopColor: '$border',
      paddingTop: 'xs',
      paddingBottom: 'sm'
    },
    
    statusBar: {
      bg: '$windowBackground'
    }
  },
  
  // Variantes de botones
  buttonVariants: {
    primary: {
      bg: '$buttonPrimary',
      paddingVertical: 'sm',
      paddingHorizontal: 'md',
      borderRadius: 'sm',
      alignItems: 'center',
      justifyContent: 'center'
    },
    secondary: {
      bg: '$buttonSecondary',
      paddingVertical: 'sm',
      paddingHorizontal: 'md',
      borderRadius: 'sm',
      alignItems: 'center',
      justifyContent: 'center'
    },
    outline: {
      bg: '$buttonOutline',
      borderWidth: 1,
      borderColor: '$border',
      paddingVertical: 'sm',
      paddingHorizontal: 'md',
      borderRadius: 'sm',
      alignItems: 'center',
      justifyContent: 'center'
    },
    ghost: {
      bg: 'transparent',
      paddingVertical: 'sm',
      paddingHorizontal: 'md',
      borderRadius: 'sm',
      alignItems: 'center',
      justifyContent: 'center'
    },
    danger: {
      bg: '$buttonDanger',
      paddingVertical: 'sm',
      paddingHorizontal: 'md',
      borderRadius: 'sm',
      alignItems: 'center',
      justifyContent: 'center'
    },
    success: {
      bg: '$buttonSuccess',
      paddingVertical: 'sm',
      paddingHorizontal: 'md',
      borderRadius: 'sm',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  
  // Variantes de inputs
  inputVariants: {
    default: {
      bg: '$inputBackground',
      borderWidth: 1,
      borderColor: '$inputBorder',
      borderRadius: 'sm',
      paddingVertical: 'sm',
      paddingHorizontal: 'md'
    },
    filled: {
      bg: '$inputBackground',
      borderWidth: 0,
      borderRadius: 'sm',
      paddingVertical: 'sm',
      paddingHorizontal: 'md'
    },
    outlined: {
      bg: 'transparent',
      borderWidth: 1,
      borderColor: '$inputBorder',
      borderRadius: 'sm',
      paddingVertical: 'sm',
      paddingHorizontal: 'md'
    }
  },
  
  // Variantes de cards
  cardVariants: {
    default: {
      bg: '$cardBackground',
      borderRadius: 'md',
      padding: 'md',
      shadowColor: '$shadow',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2
    },
    elevated: {
      bg: '$cardBackground',
      borderRadius: 'md',
      padding: 'md',
      shadowColor: '$shadow',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4
    },
    outlined: {
      bg: '$cardBackground',
      borderRadius: 'md',
      padding: 'md',
      borderWidth: 1,
      borderColor: '$border'
    }
  }
})

export default theme

export type Theme = typeof theme