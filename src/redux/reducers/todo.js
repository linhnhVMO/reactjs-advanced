import { v4 as uuidv4 } from 'uuid'
import { ADD_TODO, DELETE_TODO, UPDATE_TODO,TOGGLE_COMPLETE, COMPLETE_TODO } from "../constants";


const initialState = [
    {
        id:uuidv4(),
        name:'Learn ReactJS',
        completed:false
    }
]

let newState;

export default function todoReducer(state = initialState, action){
    switch(action.type) {
        case ADD_TODO: 
            const newTodos = {
                id: uuidv4(),
                name: action.payload.name,
                completed:false
            };
            newState = [...state]
            newState.push(newTodos)
            return newState;

        case UPDATE_TODO:
           newState = [...state];
           let index = -1;
           for(let i =0; i< newState.length; i++){
               index++;
               if(newState[i].id === action.payload.id){
                   break;
               }
           }

           if(index !== -1){
            newState[index] = action.payload;
               return newState;
           }
           else return state;
        case DELETE_TODO:
            newState = [...state]
            return newState.filter(todo => todo.id !== action.payload.id)
        case TOGGLE_COMPLETE:
            newState = [...state]
            const num = newState.findIndex(todo => todo.id === action.payload.id)
            newState[num].completed = action.payload.completed
            return newState
        case COMPLETE_TODO:
            newState = [...state]
            newState.filter(todo => todo.completed)
            return newState;
        default:
            return state
    }
}






