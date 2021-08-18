
import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../redux/actions/actionT'

import { VISIBILITY_FILTER } from '../../redux/constants'

function Filter() {
    const dispatch = useDispatch()
    return (
        <div className='flex justify-between items-center mb-6'>
          
           {Object.keys(VISIBILITY_FILTER).map(filterkey => {
            const currentFilter = VISIBILITY_FILTER[filterkey];
            return (
              <button
                key={`visibility-filter-${currentFilter}`}
                onClick={()=> dispatch(setFilter(currentFilter))  }
                className='m-3'
              >
                {currentFilter}
              </button>
            )

          })}

        </div>
    )
}

export default Filter
