import React from 'react'
import useFetch from '../hooks/useFetch'

const ResidentInfo = ({url}) => {
    // console.log(resident);

    const assignStatus = () => {
      // let backgroundState= {};
      // (residents?.status.toLowerCase() === 'dead') ? backgroundState.backgroundColor = 'gray'
      //                                  : (residents?.status.toLowerCase() === 'unknown') 
      //                                  ? backgroundState.backgroundColor = 'red'
      //                                  : backgroundState.backgroundColor = 'green' 
      let color= '';
      (residents?.status.toLowerCase() === 'dead') ? color = 'gray'
                                       : (residents?.status.toLowerCase() === 'unknown') 
                                       ? color = 'red'
                                       : color = 'green' 
                                      
       return color                             
    }

    const residents = useFetch(url)
    // console.log(assignStatus())
    // console.log(residents?.status.toLowerCase())
    // console.log(typeof(residents?.status))
    // console.log(residents)
  return (
      <article style={{boxShadow : `0px 5px 15px ${assignStatus(residents?.status)}`}} className='card-resident'>
        <h5 style={{color : assignStatus(residents?.status)}} className='card-resident--title'>{residents?.name}</h5>
        <header className='card-resident__header'>
            <img className='card-resident__header--img' src={residents?.image} alt="" />
          <div className='card-resident__header--state'>
              {/* <div className='card-resident__header--circle' style={assignStatus(residents?.status)}> </div> */}
              <div className='card-resident__header--circle' style={{backgroundColor : assignStatus(residents?.status)}}> </div>
              <p className='card-resident__header--status' >{residents?.status}</p>
              {/* <p className='card-resident__header--status' >{residents?.status}</p> */}
          </div>
        </header>
        <div className='card-resident__body'>
          <ul className='card-resident__body--datos'>
            <li><span style={{color : assignStatus(residents?.status)}}>Especies: </span>{residents?.species}</li>
            <li><span style={{color : assignStatus(residents?.status)}}>Origin: </span>{residents?.origin.name}</li>
            <li><span style={{color : assignStatus(residents?.status)}}>episode appearance: </span>{residents?.episode.length}</li>
          </ul>
        </div>
      </article>
  )
}

export default ResidentInfo