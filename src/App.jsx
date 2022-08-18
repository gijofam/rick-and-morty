import { useState, useEffect} from 'react'
import './App.css'
import useFetch from './hooks/useFetch.js'
import LocationInfo from './components/LocationInfo'
import axios from 'axios'
import ResidentInfo from './components/ResidentInfo'

function App() {
  //lista de estados 
  const [searchLocation, setSearchLocation] = useState()
  
  const [location, setLocation] = useState()
  
  useEffect(() => {
    // creacion del numero aleatorio no mayor a 126
    let numberRandom = Math.floor(Math.random() * 125 + 1)
    // console.log('soy random: '+numberRandom);
    let url 
    searchLocation ? url = `https://rickandmortyapi.com/api/location/${searchLocation}` : url = `https://rickandmortyapi.com/api/location/${numberRandom}`   
     

    axios.get(url)
        .then(res => setLocation(res.data))
        .catch(err => console.log(err.message))
   
  }, [searchLocation])

  // console.log( 'soy el LOCATION: '+location)


  // instruccion para consultar cuantos residentes  por location(ubicacion) tenemos 
  // console.log(location?.results.map(e => ({'id': e.id, 'quantityResidents': e.residents.length})
  // ));
  // console.log(location)
  const getInputLocation = (e) =>{
    e.preventDefault()
    setSearchLocation(e.target.location.value);
    form.reset()
  }

  return (
    <div className="App ">
      <header className='header row'>
        
        <form className='header__form col s12 m12 l12 ' id='form' action="" onSubmit={getInputLocation}>
           <h1 className='header__form--title'>Rick and Morty</h1>
           <div className='header__form__body'>
              <input className=' header__form--input'id='location' type="text" placeholder='search for id location'/>
              <button className=' header__form--btn'>Search</button>
           </div>
        </form>
      </header>
      {/* <section className='section-info'> */}
        <section className='location'>

          <LocationInfo location = {location}/>
        </section>
        <section className='residents'>
        
          <h2 className='residents-title'>Residents:</h2>
          <div>
            {
              location?.residents.map(url => (
                <ResidentInfo url={url} key={url}/>
              ))
            }
          </div>
        </section>
      {/* </section> */}

    </div>
  )
}

export default App
