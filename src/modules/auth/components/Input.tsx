import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import { createBox, useTheme } from '@shopify/restyle';
import { Theme } from '../../../themes';
import useResponsiveLayout from '../../../hooks/use-responsive-layout';

const Box = createBox<Theme>();

type InputProps = TextInputProps & {
  placeholder: string;
};

const Input = React.forwardRef<RNTextInput, InputProps>(
  ({ style, ...props }, ref) => {
    const theme = useTheme<Theme>();
    const { isTablet } = useResponsiveLayout();

    return (
      <Box 
        backgroundColor="$background"
        borderRadius="sm"
        padding="sm"
        marginVertical="sm"
        borderWidth={1}
        borderColor="$border"
      >
        <RNTextInput
          ref={ref}
          placeholderTextColor={theme.colors.$foreground}
          style={[
            { color: theme.colors.$foreground, fontSize: isTablet ? 18 : 16 },
            style,
          ]}
          {...props}
        />
      </Box>
    );
  },
);

export default Input;
