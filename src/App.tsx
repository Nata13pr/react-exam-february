import {useEffect, useState} from 'react'

import './App.css'

function App() {
    useEffect(() => {
try {
    fetch('https://api.themoviedb.org/3/discover/movie')
        .then(res => res.json())
        .then(json => console.log(json))
}catch (e){

}
    }, []);

  return (
    <>
     Hello
    </>
  )
}

export default App
