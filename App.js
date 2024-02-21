import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MainAppBar from './components/MainAppBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './screens/Settings';
import ThemeProvider from './context/ThemeProvider';
import Home from './screens/Home';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
  <PaperProvider>
    <ThemeProvider>
  <NavigationContainer>
  <StatusBar backgroundColor='#666' barStyle="light-content" />
  <Stack.Navigator
  initialRouteName='Home'
  screenOptions={{header: (props) =>
  <MainAppBar {...props} backgroundColor="#666" icon="cog" color="#fff" />
  }}
  >
    <Stack.Screen name="Home">
       {() =>
       <Home />
       }
    </Stack.Screen>
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
</NavigationContainer>
</ThemeProvider>
  </PaperProvider>
  );
}

