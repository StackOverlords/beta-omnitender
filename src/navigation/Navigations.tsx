import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

// Screens
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import { useAtom } from 'jotai';
import activeThemeId from '../states/theme';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [, setActiveTheme] = useAtom(activeThemeId);

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return <SplashScreen />;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <Stack.Screen name="App" component={DrawerNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default Navigations;
