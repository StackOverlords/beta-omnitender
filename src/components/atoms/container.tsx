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

import * as React from 'react';
import { BoxProps } from '@shopify/restyle';
import Box from './box';
import { Theme } from '../../themes';

type Props = BoxProps<Theme> & {
  children: React.ReactNode;
};

const Container: React.FC<Props> = props => (
  <Box {...props} flex={1} backgroundColor="$background" padding="sm">
    {props.children}
  </Box>
);

export default Container;
