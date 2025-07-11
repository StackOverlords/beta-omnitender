
import { useAtom } from 'jotai'
import { selectAtom } from 'jotai/utils'
import React, { useCallback, useMemo } from 'react'
import FeatherIcon from './icon'
import { ThemeMeta, ThemeNames } from '../../themes'
import { TouchableOpacity } from './touchable'
import activeThemeId from '../../states/theme'
import Box from './box'
import Text from './text'

interface Props {
  theme: ThemeMeta
  onPress: (themeId: ThemeNames) => void
}

const ThemeListItem: React.FC<Props> = ({ theme, onPress }) => {
  const [isActive] = useAtom(
    useMemo(() => selectAtom(activeThemeId, v => v === theme.id), [theme])
  )
  const handlePress = useCallback(() => {
    onPress(theme.id)
  }, [onPress, theme])

  return (
    <TouchableOpacity
      minHeight={44}
      flexDirection="row"
      alignItems="center"
      px="lg"
      onPress={handlePress}
    >
      <Box alignItems="center" justifyContent="center" width={32}>
        {isActive ? (
          <FeatherIcon size={20} name="check" color="$primary" />
        ) : null}
      </Box>
      <Text color="$sidebarForeground">{theme.name}</Text>
    </TouchableOpacity>
  )
}

export default ThemeListItem
