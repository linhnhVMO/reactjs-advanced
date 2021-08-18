import { VISIBILITY_FILTER } from "../constants";

export const getTodoByVisibilityFilter = (store, visibilityFilter) =>{
    switch(visibilityFilter){
        case VISIBILITY_FILTER.COMPLETED:
            return store.filter(todo => todo.completed);
        case VISIBILITY_FILTER.INCOMPLETED:
            return store.filter(todo => !todo.completed);
        default:
            return store;
    }
}