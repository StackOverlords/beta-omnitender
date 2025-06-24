/*
 * Copyright (c) 2023 crazftdog (DevasLife). All rights reserved.
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

import React, { ReactElement } from 'react'
import { useEffect } from 'react'
import useResponsiveLayout from '../../hooks/use-responsive-layout'

type Props = {
  renderOnTablet?: () => ReactElement<any, any>
  renderOnPhone?: () => ReactElement<any, any>
  // onLayoutChange?: (layout: 'tablet' | 'phone') => any
  onLayoutChange?: (layout: | 'phone') => any

}

const ResponsiveLayout: React.FC<Props> = props => {
  const { isTablet } = useResponsiveLayout()
  const { renderOnTablet, renderOnPhone, onLayoutChange } = props
  // may return nothing:
  // 1. renderOnWide set but we have narrow layout
  // 2. renderOnNarrow set but we have wide layout
  let children: React.ReactElement<any, any> | null = null

  if (isTablet === true && renderOnTablet) {
    children = renderOnTablet()
  } else if (isTablet === false && renderOnPhone) {
    children = renderOnPhone()
  }

  useEffect(() => {
    // onLayoutChange && onLayoutChange(isTablet === true ? 'tablet' : 'phone')
    onLayoutChange && onLayoutChange( 'phone')

  }, [isTablet])

  return children
}

export default ResponsiveLayout

// Copyright (c) 2023-present NAVER Corp.
// under BSD 3-clause
// For full license information, please view the LICENSE file in the root directory of this source tree.
//