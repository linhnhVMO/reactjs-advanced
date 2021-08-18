import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { deleteTodo, toggleComplete, updateTodo } from '../../redux/actions/actionT'


function TodoItem({ todo }) {
    const [edit,setEdit] = useState(false)
    const [name, setName] = useState(todo.name)

     const dispatch = useDispatch()
     
     const handleCompleteClick = () => {
        dispatch(toggleComplete({id: todo.id, completed: !todo.completed}))
     }

     const handleDeleteClick = () => {
        dispatch(deleteTodo({id:todo.id}))
     }
     
     const handleUpdateClick = () => {
        dispatch(updateTodo({...todo,name:name}))
            if (edit) {
                setName(todo.name)
            }
            setEdit(!edit)
     }

    return (
        <div className='flex justify-between items-center'>
            <div className='flex justify-between items-center text-gray-400'>
                <input 
                    type='checkbox'
                    className = 'mr-3'
                    checked={todo.completed}
                    onChange={handleCompleteClick}
                />
                <div>
                    {edit ? <input type="text" value={name}  onChange={ (e) => setName(e.target.value)} />:<label className={` mr-6 ${todo.completed && 'line-through'}`}>{todo.name}</label>}
                </div>
            </div>
            <div>
                <button onClick={handleUpdateClick} className='mx-3 text-white'> 
                    {edit ? "Update" : <i class="far fa-edit"></i> }
                </button>
                <button onClick={handleDeleteClick} className='mx-3 text-white'><i class="far fa-trash-alt"></i></button>
            </div>
        </div>
    )
}

export default TodoItem
