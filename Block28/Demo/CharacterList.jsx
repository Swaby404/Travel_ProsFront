
function CharacterList({ characters, setCharacters, favCharacter, setFavCharacter}) {
    return (
        <div>
            <h3>Character List Component</h3>
            {
                characters.map((char) => {
                    //object destructuring/deconstruction
                    const {name, id, image} = char
                    return (
                        <div key={id}>
                            <h2>Name: {name}</h2>
                            <img src={image} style={{height: "300px"}}/>
                            <button onClick={()=>setFavCharacter(char)}>
                                Favorite
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CharacterList
