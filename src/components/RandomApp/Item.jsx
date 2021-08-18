import React from 'react'
function Item({quotes}) {
    return (
        <>
            <div><i class="fas fa-quote-left"></i> {quotes.quote}</div>
            <div className='text-right text-base my-3'>- {quotes.author}</div>
        </>
    )
}

export default Item
