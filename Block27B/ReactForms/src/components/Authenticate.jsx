
import { useState } from "react"

function Authenticate({token, setUsername}) {
  const [successMessage, setSuccessMessage] = useState(null)
  const [error, setError] = useState(null)

  const handleClick = async () => {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {method: 'GET', headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }})
      const result = await response.json()
      //set the success message in state
      setSuccessMessage(result.message)
      //set the username in state
      setUsername(result.data.username)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  )
}

export default Authenticate
