import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import MainScreen from './screens/MainScreen';  
import { SafeAreaView } from'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <MainScreen/>
    </SafeAreaView>
    
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
