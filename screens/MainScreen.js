import React from 'react'
import { Text} from'react-native'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { StyleSheet } from 'react-native'
import InputForm from '../components/InputForm'
import { Platform } from 'react-native'

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'}/>
      <Text style={styles.pageTitle}> ToDo App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
      </View>
      <InputForm />
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
      //flex: 1,
      paddingTop: Platform.OS === 'android' ? 20 : 0,
      backgroundColor: '#f7f8fa',
      width: '100%',
      height: '100%'
      //이걸로 flex :1 안먹는 문제 해결
  },
  pageTitle: {
      marginBottom: 35,
      paddingHorizontal: 15,
      fontSize: 54,
      fontWeight: '600'
  },
  separator: {
      marginHorizontal: 10,
      marginTop: 25,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.2)'
  },
  listView: {
      flex: 1,
  },
  listTitle: {
      marginBottom: 25,
      paddingHorizontal: 15,
      fontSize: 41,
      fontWeight: '500'
  },
  emptyListText: {
      paddingTop: 10,
      paddingBottom: 15,
      paddingHorizontal: 15,
      fontSize: 15,
      lineHeight: 20,
      color: '#737373'
  },
  headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  logOutText: {
      color: 'white',
      fontSize: 25
  },
  logOutButton: {
      marginBottom: 25,
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
      width: 42,
      height: 42,
      backgroundColor: 'rgba(0,0,0,0.7)',
      borderRadius: 4
  }

})