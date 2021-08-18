import React , { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/actions/actionT'

function Header() {

    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => setName(e.target.value)

    const handleKeyDown = (e) => {
        const trimmedText = name.trim()
        if(e.which === 13 && trimmedText){
            dispatch(addTodo({name:name}))
            setName('')
        }

    }

    const add = () => {
        if(name === '') {
            alert('Input is Empty')
        } else {
            dispatch(addTodo({name: name}))
            setName('')
        }
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className='my-9 text-gray-500 font-light text-4xl'>Todo List</h1>
            <div className='my-9'>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={name}
                    onChange={handleChange}
                    onKeyPress={handleKeyDown}
                />
                <button onClick={add} className='add-task-btn'>Add</button>
            </div>
        </div>
    )
}

export default Header
