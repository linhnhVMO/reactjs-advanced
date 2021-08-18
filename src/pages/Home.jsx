import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
             <h1 className="text-base text-red-700 font-semibold text-center h-8 p-3">APP</h1>
             <div className="container mx-auto px-4 flex justify-center   items-center">
                <Link to='/random-app' className="w-1/5 h-48 m-8 p-3 flex justify-center items-center text-center box-s1">Random App</Link>
                <Link to='/todolist-app' className="w-1/5 h-48 m-8 p-3 flex justify-center items-center text-center  box-s1">Todo List</Link>
             </div>
        </>
    )
}

export default Home
