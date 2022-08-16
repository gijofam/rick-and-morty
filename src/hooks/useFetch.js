import axios from "axios"
import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [location, setLocation] = useState()

    useEffect(() => {
      axios.get(url)
           .then(res => setLocation(res.data) )
           .catch(err => console.log(err.message))
      }
    ,[])

    return location 
}

export default useFetch
