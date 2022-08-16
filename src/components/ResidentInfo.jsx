import React from 'react'
import useFetch from '../hooks/useFetch'

const ResidentInfo = ({url}) => {
    // console.log(resident);

    const assignStatus = () => {
      let backgroundState= {};
      (residents?.status.toLowerCase() === 'dead') ? backgroundState.backgroundColor = 'gray'
                                       : (residents?.status.toLowerCase() === 'unknown') 
                                       ? backgroundState.backgroundColor = 'red'
                                       : backgroundState.backgroundColor = 'green' 
                                      
       return backgroundState                             
    }

    const residents = useFetch(url)
    console.log(assignStatus())
    console.log(residents?.status.toLowerCase())
    console.log(typeof(residents?.status))
    console.log(residents)
  return (
      <article className='card-resident'>
        <h5 className='card-resident--title'>{residents?.name}</h5>
        <header className='card-resident__header'>
            <img className='card-resident__header--img' src={residents?.image} alt="" />
          <div className='card-resident__header--state'>
              <div className='card-resident__header--circle' style={assignStatus(residents?.status)}> </div>
              <p className='card-resident__header--status' >{residents?.status}</p>
              {/* <p className='card-resident__header--status' >{residents?.status}</p> */}
          </div>
        </header>
        <div className='card-resident__body'>
          <ul className='card-resident__body--datos'>
            <li><span>Especies: </span>{residents?.species}</li>
            <li><span>Origin: </span>{residents?.origin.name}</li>
            <li><span>episode appearance: </span>{residents?.episode.length}</li>
          </ul>
        </div>
      </article>
  )
}

export default ResidentInfo