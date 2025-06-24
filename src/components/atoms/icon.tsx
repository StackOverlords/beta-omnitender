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

import { ColorProps, useResponsiveProp, useTheme } from '@shopify/restyle'
import * as React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { Theme } from '../../themes'

export type IconProps = React.ComponentProps<typeof Feather>
type Props = Omit<IconProps, 'color'> & ColorProps<Theme>

const FeatherIcon: React.FC<Props> = ({ color = 'white', ...rest }) => {
  const theme = useTheme<Theme>()
  const colorProp = useResponsiveProp(color)
  const vColor = theme.colors[colorProp || 'white']
  return <Feather {...rest} color={vColor} />
}

export default FeatherIcon
