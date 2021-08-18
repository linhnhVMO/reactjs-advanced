import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Item from '../components/RandomApp/Item';
import { loadData } from '../redux/actions/actionR';

function RandomApp() {
    
    const dispatch = useDispatch()
    const dataQuote = useSelector(state => state.random);
    const quotes = dataQuote.data;
    const random = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[random];

    const colorQuote = dataQuote.colors;
    const randomC = Math.floor(Math.random() * colorQuote.length);
    const randomColor = colorQuote[randomC];

    const handleClick = () => {
        dispatch(loadData())
      }
    

    return (
        <>
             <div  className='absolute w-full h-full flex flex-col justify-center items-center' style={{backgroundColor:randomColor}}>
                <div className='bg-white box-s1 w-101 px-12 py-10 text-center' >
                    <div style={{color:randomColor}} className='text-2xl font-normal mb-6'>
                       <Item quotes={randomQuote} />
                    </div>
                    <div className='flex justify-end items-end'>
                        <button onClick={handleClick} id="new-quote" className='text-white font-bold py-2 px-4 rounded' style={{backgroundColor:randomColor}}>New Quote</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RandomApp
