import { NavigationContainer } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { webClientId } from './env';
import { ThemeProvider } from '@shopify/restyle';
import StatusBar from './src/components/common/status-bar';
import { activeThemeAtom } from './src/states/theme';
import { useAtom } from 'jotai';
import Navigations from './src/navigation/Navigations';

GoogleSignin.configure({ webClientId });

function App() {

  const [activeTheme] = useAtom(activeThemeAtom);

  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <StatusBar />
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  );
}
 
export default App;
