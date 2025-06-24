import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';  
import { useTheme } from '@shopify/restyle';
import useResponsiveLayout from '../../../hooks/use-responsive-layout';
import { Theme } from '../../../themes';
import Container from '../../../components/atoms/container';
import Box from '../../../components/atoms/box';
import Text from '../../../components/atoms/text';
import Input from '../components/Input';
import FeatherIcon from '../../../components/atoms/icon';
import IonIcon from 'react-native-vector-icons/Ionicons';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isTablet } = useResponsiveLayout();
  const theme = useTheme<Theme>();

  const handleLogin = () => {
    // lógica de login
  };

  const handleGoogleLogin = () => {
    // lógica de Google login
  };

  return (
    <Container justifyContent="center" alignItems="center">
      <Box
        width={isTablet ? 400 : '90%'}
        padding="sm"
        backgroundColor="$background"
        borderRadius="sm"
      >
        <Text marginBottom="sm">
          Iniciar sesión
        </Text>

        <Input
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={handleLogin}>
          <Box
            backgroundColor="$primary"
            paddingVertical="sm"
            borderRadius="sm"
            alignItems="center"
            marginTop="sm"
          >
            <Text color="$foreground">
              Ingresar
            </Text>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleGoogleLogin}>
          <Box
            borderWidth={1}
            borderColor="$border"
            paddingVertical="sm"
            borderRadius="sm"
            alignItems="center"
            marginTop="sm"
          >
          <IonIcon name='logo-google' color={"gray"} />
            <Text color="$primary">
              Ingresar con Google
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Container>
  );
};

export default LoginScreen;
