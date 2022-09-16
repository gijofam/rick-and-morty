import React from 'react'

const LocationInfo = ({location}) => {
  return (
    // <div className='container'>
      <article className='card-info '>
          <h2 className='card-info--title'><span> </span>{location?.name}</h2>
          <div className='card-info__body '>
            <h3 className='card-info__body--title  '><span>Type: </span>{location?.type}</h3>
            <h3 className='card-info__body--dimension  '><span>Dimension: </span>{location?.dimension}</h3>
            <h3 className='card-info__body--population  '><span>Population: </span>{location?.residents.length}</h3>
          </div>      
      </article>     
    // </div>
  )
}

export default LocationInfo