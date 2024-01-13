import React from 'react'
import NODATA from '../images/no-search-found.png'
 const NoData = () => {
  return (
    <div className='d-flex justify-content-center'>
        <img src={NODATA} alt=''  className='nodata w-75'/>
    </div>
  )
}


export default NoData