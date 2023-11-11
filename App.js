import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import MainScreen from './screens/MainScreen';  
import { SafeAreaView } from'react-native';
import {store} from './redux/store';
import { Provider } from'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';

export default function App() {

const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen options={{headerShown: false}} name="Main" component={MainScreen} /> */}
          <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
