
function FavoriteCharacter ({favCharacter, setFavCharacter}) {
    return(
        <div>
            <h3>Favorite character component!</h3>
            <p>{favCharacter.name}</p>
            <img src={favCharacter.image} style={{height: "300px"}}/>
            <p>{favCharacter.homeworld}</p>
            <p>{favCharacter.species}</p>
            <button onClick={()=>setFavCharacter(null)}>Remove Fav</button>
        </div>
    )
}

export default FavoriteCharacter
