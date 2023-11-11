import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    //state를 통해서 initilState에 바로 접근한다.
    initialState: {
        currentId: 4,
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id : state.currentId++,
                text: action.payload.trim(),
                state: 'todo'
            })
        },
        updateTodo: (state, action)=> {
            const item = state.todos.findIndex((item) => item.id === action.payload);
            state.todos[item].state = (state.todos[item].state === 'todo' ? 'done' : 'todo');
            state.todos.push(state.todos.splice(item,1)[0]);
        },
        //splice 통해 todos 처음 제거. 제거된 객체를 맨 뒤에 다시 추가.
        deleteTodo: (state, action) => {
            const item = state.todos.findIndex((item) => item.id === action.payload);
            state.todos.splice(item,1);
        },
    }
});
// Redux의 불변성 원칙에 따라 배열에서 직접적으로 
//slice를 사용하는 것이 아니라, 배열의 요소에 접근하여 해당 요소의 state 속성 값을 변경하는 방식을 사용하고 있습니다.

export default todoSlice.reducer;
//reducer를 export 해주고 이를 store에서 일관 관리한다.
//reducer는 Redux의 아키택처중 일부로, 현재 상태와 Action을 받아와서 새로운 상태 반환
export const {addTodo, updateTodo, deleteTodo} = todoSlice.actions;