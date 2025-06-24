import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

const SplashScreen = () => {
  // const navigation = useNavigation<AuthNavigationProp>();
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState<any>(null);

  function handleAuthStateChange(user: any) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const suscriber = onAuthStateChanged(getAuth(), handleAuthStateChange);
    return () => suscriber(); // Cleanup subscription on unmount
  }, []);
  if (initializing) return null;

  if (!user) {
    // navigation.navigate('Auth');
  };
  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../assets/v3.webp')}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#f0b90b',
  },
});

export default SplashScreen;
