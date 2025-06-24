
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
import {
  Pressable as NativePressable,
  PressableProps as NativePressableProps
} from 'react-native' 
import { createBox } from '@shopify/restyle'
import { Theme } from '../../themes'

const Pressable = createBox<Theme, NativePressableProps>(NativePressable)
export type PressableProps = React.ComponentProps<typeof Pressable>

export default Pressable
