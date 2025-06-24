import React from 'react'
import LogoSVG from '../../assets/images/omnitender.svg'
import { ColorProps, useResponsiveProp, useTheme } from '@shopify/restyle'
import { SvgProps } from 'react-native-svg'
import { Theme } from '../../themes'

type Props = Omit<SvgProps, 'color'> & ColorProps<Theme>

const OmnitenderLogo: React.FC<Props> = ({ color = '$foreground', ...rest }) => {
  const theme = useTheme<Theme>()
  const colorProp = useResponsiveProp(color)
  const vColor = theme.colors[colorProp || '$foreground']

  return <LogoSVG {...rest} color={vColor} />
}

export default OmnitenderLogo
