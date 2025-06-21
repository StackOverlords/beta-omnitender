import './gesture-handler.native';

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { webClientId } from './env';

GoogleSignin.configure({ webClientId });

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(webClientId);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
