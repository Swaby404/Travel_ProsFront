
import { useState, useEffect } from 'react'
import './App.css'
import CharacterList from './CharacterList'
import FavoriteCharacter from './FavoriteCharacter'

function App() {
  const [characters, setCharacters] = useState([])
  const [favCharacter, setFavCharacter] = useState(null)

  useEffect(() => {

    const getCharacters = async () => {
      const res = await fetch("https://akabab.github.io/starwars-api/api/all.json")
      const data = await res.json()
      console.log(data)
      setCharacters(data)
    }

    getCharacters()
    console.log("got to first useEffect")
  },[])

  useEffect(() => {
    console.log("got to second useEffect")
  }, [favCharacter])

  return (
    <>
      <h1>Star Wars Characters!</h1>
      
      {/* IF the favCharacter is populated, show the fave, otherwise show the list */}
      
      {
        favCharacter ? 
        <FavoriteCharacter 
          favCharacter={favCharacter} 
          setFavCharacter={setFavCharacter}
        /> 
        :
        <CharacterList 
          characters={characters} 
          setCharacters={setCharacters} 
          favCharacter={favCharacter} 
          setFavCharacter={setFavCharacter}
        />
      }
    </>
    
  )
}

export default App
