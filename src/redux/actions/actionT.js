import { ADD_TODO, DELETE_TODO, UPDATE_TODO,TOGGLE_COMPLETE, COMPLETE_TODO, SET_FILTER } from "../constants";


export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}

export function deleteTodo(todoId) {
    return {
        type: DELETE_TODO,
        payload: todoId,
    }
}


export function updateTodo(todo) {
    return {
        type: UPDATE_TODO,
        payload: todo,
    }

}


export function toggleComplete(todo) {
    return {
        type: TOGGLE_COMPLETE,
        payload: todo,
    }

}

export function completeTodo() {
    return {
        type: COMPLETE_TODO,
    }

}

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {filter}
})