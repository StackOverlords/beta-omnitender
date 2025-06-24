import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'react-native'
import light, { Theme } from './light'

const lazyvim_p = {
  // Bases existentes
  base000: '#1f2335',
  base00: '#24283b',
  base01: '#1f2335',
  base02: '#292e42',
  base03: '#414868',
  base04: '#545c7e',
  base05: '#a9b1d6',
  base06: '#c0caf5',
  base07: '#d5d6db',
  
  // Colores principales
  red: '#f7768e',
  orange: '#ff9e64',
  yellow: '#e0af68',
  green: '#9ece6a',
  cyan: '#7dcfff',
  blue: '#7aa2f7',
  violet: '#bb9af7',
  magenta: '#ff007c',
  
  // Colores adicionales para UI
  darkBlue: '#2d3f76',
  lightBlue: '#89b4fa',
  teal: '#1abc9c',
  pink: '#f5c2e7',
  peach: '#fab387',
  lavender: '#b4befe',
  
  // Variaciones de grises
  surface: '#1e2030',
  surfaceVariant: '#32344a',
  outline: '#6272a4',
  outlineVariant: '#44475a',
  
  // Estados de interacción
  hover: '#3c4968',
  pressed: '#4a5578',
  disabled: '#6b7280',
  
  // Estados de validación
  success: '#50fa7b',
  warning: '#ffb86c',
  error: '#ff5555',
  info: '#8be9fd'
}

export const theme: Theme = createTheme({
  ...light,
  colors: {
    ...light.colors,
    
    // Colores principales
    $primary: lazyvim_p.blue,
    $primaryVariant: lazyvim_p.darkBlue,
    $primaryLight: lazyvim_p.lightBlue,
    $secondary: lazyvim_p.orange,
    $secondaryVariant: lazyvim_p.peach,
    $accent: lazyvim_p.violet,
    $accentVariant: lazyvim_p.magenta,
    
    // Fondos
    $windowBackground: lazyvim_p.base00,
    $background: lazyvim_p.base00,
    $backgroundVariant: lazyvim_p.base01,
    $surface: lazyvim_p.surface,
    $surfaceVariant: lazyvim_p.surfaceVariant,
    $cardBackground: lazyvim_p.base02,
    $modalBackground: lazyvim_p.base01,
    
    // Textos
    $foreground: lazyvim_p.base06,
    $foregroundVariant: lazyvim_p.base05,
    $onPrimary: lazyvim_p.base00,
    $onSecondary: lazyvim_p.base00,
    $onSurface: lazyvim_p.base06,
    $onBackground: lazyvim_p.base06,
    $textPrimary: lazyvim_p.base06,
    $textSecondary: lazyvim_p.base05,
    $textTertiary: lazyvim_p.base04,
    $textDisabled: lazyvim_p.disabled,
    $placeholder: lazyvim_p.base04,
    
    // Navegación
    $navbarBackground: lazyvim_p.base01,
    $navbarBorderBottom: lazyvim_p.base00,
    $headerBarBackground: lazyvim_p.base01,
    $sidebarBackground: lazyvim_p.base000,
    $sidebarForeground: lazyvim_p.base06,
    $sidebarSeparator: lazyvim_p.base07 + '20',
    
    // Separadores y bordes
    $separator: lazyvim_p.base04,
    $border: lazyvim_p.outline,
    $borderVariant: lazyvim_p.outlineVariant,
    $divider: lazyvim_p.base03,
    
    // Estados de interacción
    $hover: lazyvim_p.hover,
    $pressed: lazyvim_p.pressed,
    $focused: lazyvim_p.blue + '40',
    $selected: lazyvim_p.blue + '20',
    $disabled: lazyvim_p.disabled,
    $disabledBackground: lazyvim_p.base02,
    
    // Estados de validación
    $success: lazyvim_p.success,
    $successBackground: lazyvim_p.success + '20',
    $warning: lazyvim_p.warning,
    $warningBackground: lazyvim_p.warning + '20',
    $error: lazyvim_p.error,
    $errorBackground: lazyvim_p.error + '20',
    $info: lazyvim_p.info,
    $infoBackground: lazyvim_p.info + '20',
    
    // Botones
    $buttonPrimary: lazyvim_p.blue,
    $buttonPrimaryHover: lazyvim_p.lightBlue,
    $buttonPrimaryPressed: lazyvim_p.darkBlue,
    $buttonSecondary: lazyvim_p.base02,
    $buttonSecondaryHover: lazyvim_p.hover,
    $buttonSecondaryPressed: lazyvim_p.pressed,
    $buttonOutline: 'transparent',
    $buttonOutlineHover: lazyvim_p.blue + '10',
    $buttonOutlinePressed: lazyvim_p.blue + '20',
    $buttonDanger: lazyvim_p.error,
    $buttonDangerHover: lazyvim_p.red,
    $buttonSuccess: lazyvim_p.success,
    $buttonSuccessHover: lazyvim_p.green,
    
    // Inputs
    $inputBackground: lazyvim_p.base02,
    $inputBackgroundFocused: lazyvim_p.surfaceVariant,
    $inputBorder: lazyvim_p.outline,
    $inputBorderFocused: lazyvim_p.blue,
    $inputBorderError: lazyvim_p.error,
    $inputText: lazyvim_p.base06,
    $inputPlaceholder: lazyvim_p.base04,
    
    // Sombras
    $shadow: '#000000',
    $shadowLight: '#000000' + '20',
    $shadowMedium: '#000000' + '40',
    $shadowDark: '#000000' + '60',
    
    // Overlay
    $overlay: '#000000' + '80',
    $backdropLight: '#000000' + '20',
    $backdropMedium: '#000000' + '60',
    $backdropDark: '#000000' + '80',
    
    // Colores adicionales para elementos específicos
    $link: lazyvim_p.cyan,
    $linkHover: lazyvim_p.teal,
    $code: lazyvim_p.yellow,
    $codeBackground: lazyvim_p.base01,
    $highlight: lazyvim_p.yellow + '40',
    $selection: lazyvim_p.blue + '30',
    
    // Indicadores
    $indicatorActive: lazyvim_p.blue,
    $indicatorInactive: lazyvim_p.base04,
    $badge: lazyvim_p.red,
    $badgeText: lazyvim_p.base07,
    
    // Gráficos y charts
    $chart1: lazyvim_p.blue,
    $chart2: lazyvim_p.green,
    $chart3: lazyvim_p.orange,
    $chart4: lazyvim_p.violet,
    $chart5: lazyvim_p.cyan,
    $chart6: lazyvim_p.pink
  },
  
  statusBar: {
    barStyle: 'light-content' as StatusBarStyle
  },
  
  textVariants: {
    ...light.textVariants,
    
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
      shadowOpacity: 0.4,
      shadowRadius: 8
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
      shadowOpacity: 0.2,
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
