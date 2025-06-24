
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
import light, { Theme } from './light'
import dark from './dark'
import nord from './nord'
import solarizedDark from './solarized-dark'
import catppuccin from './catppuccin';
import lazyvim from './lazyvim';
import tokyonight from './tokyonight';
import monokai from './monokai';


export type ThemeNames = 'light' | 'dark' | 'nord' | 'solarized-dark' | 'catppuccin' | 'lazyvim' | 'tokyonight' | 'monokai';

export interface ThemeMeta {
  id: ThemeNames
  name: string
  theme: Theme
}

export const themes: readonly ThemeMeta[] = [
  {
    id: 'light',
    name: 'Default Light',
    theme: light
  },
  {
    id: 'dark',
    name: 'Default Dark',
    theme: dark
  },
  {
    id: 'nord',
    name: 'Nord',
    theme: nord
  },
  {
    id: 'solarized-dark',
    name: 'Solarized Dark',
    theme: solarizedDark
  },
  {
    id: 'catppuccin',
    name: 'Catppuccin',
    theme: catppuccin
  },
  {
    id: 'monokai',
    name: 'Monokai',
    theme: monokai
  },
  {
    id: 'lazyvim',
    name: 'LazyVim', 
    theme: lazyvim
  },
  {
    id: 'tokyonight',
    name: 'Tokyo Night',
    theme: tokyonight 
  },
]

export type { Theme }
