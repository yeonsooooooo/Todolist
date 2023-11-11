import React from 'react'
import { FlatList, Text} from'react-native'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { StyleSheet } from 'react-native'
import InputForm from '../components/InputForm'
import { Platform } from 'react-native'
import TodoItem from '../components/TodoItem'
import { useSelector } from'react-redux';

const MainScreen = () => {
  //state = Redux store( store안에는 slice 여러 개, slice 안에는 Action, Reducer 여러 개 객체)
  const todos = useSelector((state) => state.todo.todos);
  const todoTasks = todos.filter((item) => item.state === 'todo');
  const completedTasks = todos.filter((item) => item.state === 'done');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'}/>
      <Text style={styles.pageTitle}> ToDo App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
        {todoTasks.length !== 0 ? (
//FlatList는 배열을 렌더링 해줌.
// data props에서 어떤 배열을 받아올 지 정하고,
//renderItem에서 실제 배열을 렌더링. item은 renderItem 내의 변수일 뿐.
//todoTasks의 배열 원소 각각이 item에 들어가게 됨.
          <FlatList
            data={todoTasks}
            renderItem={({item}) => <TodoItem { ...item} />}
            keyExtractor={(item)=> item.id}
            />) :
          (<Text style={styles.emptyListText}> 할 일이 없습니다. </Text>)
        }
      </View>
      <View style={styles.separator}></View>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
        {completedTasks.length !== 0 ? (
          <FlatList
            data={completedTasks}
            renderItem={({item}) => <TodoItem {...item} />}
            keyExtractor={(item)=> item.id}
            />) :
          (<Text style={styles.emptyListText}> 완료된 일이 없습니다. </Text>)
        }
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
  },
  emptyListText: {
      paddingTop: 10,
      paddingBottom: 15,
      paddingHorizontal: 15,
      fontSize: 15,
      lineHeight: 20,
      color: '#737373'
  }

})