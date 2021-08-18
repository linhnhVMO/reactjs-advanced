import React from 'react'
import { useSelector } from 'react-redux'
import { getTodoByVisibilityFilter } from '../../redux/reducers/selector'
import TodoItem from './TodoItem'


function TodoList() {
    const {todos, filter} = useSelector(state => state)

    const filterTodos = getTodoByVisibilityFilter(todos,filter )

    return (
        <div>
           {filterTodos.map((todo) => (
               <TodoItem key={todo.id} todo={todo}/>
           ))} 
        </div>
    )
}

export default TodoList
