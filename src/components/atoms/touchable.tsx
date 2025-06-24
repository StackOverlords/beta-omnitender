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

import React from 'react' 
import { Platform, StyleProp, ViewStyle } from 'react-native'
import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  border,
  BorderProps,
  composeRestyleFunctions,
  opacity,
  OpacityProps, 
  useResponsiveProp,
  useRestyle,
  useTheme
} from '@shopify/restyle' 
import { Theme } from '../../themes'
import Pressable from './pressable'

type RestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  backgroundColorShorthand,
  backgroundColor,
  border,
  opacity
])

interface Props {
  pressed?: any
  rippleColor?: any 
  rippleBorderless?: boolean
  style?: any
}

const Touchable = ({
  pressed,
  rippleColor,
  rippleBorderless,
  style,
  ...rest
}: Props) => {
  const { style: pressedStyle } = pressed
    ? useRestyle(restyleFunctions, pressed)
    : { style: undefined }
  const theme = useTheme<Theme>()
  const rippleColorProp = rippleColor && useResponsiveProp(rippleColor)
  const rippleColorValue = rippleColorProp && theme.colors[rippleColorProp as keyof Theme['colors']]

  return (
    <Pressable
      {...rest}
      android_ripple={{ color: rippleColorValue, borderless: rippleBorderless }}
      style={({ pressed: isPressed }:any) =>
        (isPressed ? [style, pressedStyle] : style) as StyleProp<ViewStyle>
      }
    />
  )
}

export const TouchableOpacity: React.FC<any> = props => (
  <Touchable
    rippleColor="$foreground"
    {...props}
    pressed={{ opacity: Platform.select({ ios: 0.6 }) }}
  />
)

export default Touchable
