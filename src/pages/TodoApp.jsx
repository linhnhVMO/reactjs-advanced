import React from 'react'
import Filter from '../components/TodoApp/Filter'
import Header from '../components/TodoApp/Header'
import TodoList from '../components/TodoApp/TodoList'

function TodoApp() {
    return (
        <div className='absolute w-full min-h-full h-auto flex flex-col justify-center items-center bg-primary'>
            <div className='bg-dark h-max h-auto box-s1 w-101 p-6 text-center rounded-md my-8'>
            <Header />
            <Filter />
            <TodoList />
            </div>
        </div>
    )
}

export default TodoApp
