import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import MainScreen from './screens/MainScreen';  
import { SafeAreaView } from'react-native';
import {store} from './redux/store';
import { Provider } from'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <MainScreen/>
      </SafeAreaView>
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
