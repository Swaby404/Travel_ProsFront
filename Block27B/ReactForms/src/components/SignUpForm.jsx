
import { useState } from "react"
import './SignUpForm.css'

function SignUpForm({setToken}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [usernameError, setUsernameError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)

  const handleSubmit = async(event) => {
    event.preventDefault();
    let formErrors = hasErrors()
    if(formErrors){
      return 
    } 

 try {
     const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username, password}),
     })
     const json = await response.json();
     setToken(json.token)
   } catch (error) {
    setError(error.message)
   }

   //reset the form
   setUsername('')
   setPassword('')
  }

  const hasErrors = () => {
   let errors = false;


   if (username.length < 8) {
     setUsernameError("Username is too short") ;
     errors = true
   } else {
    setUsernameError(null)
   }

   if (password.length < 5) {
    setPasswordError("Password is too short") ;
    errors = true
   } else {
    setPasswordError(null)
   }

   return errors;
 };

  return (
    <section>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      {usernameError && <p>{usernameError}</p>}
      {passwordError && <p>{passwordError}</p>}
      <form onSubmit={handleSubmit}>
        <label>  
         Username: <input value={username} onChange={(event) =>setUsername(event.target.value)} />
        </label>
        <label> 
         Password: <input value={password} onChange={(event)=>setPassword(event.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </section>
  )
}

export default SignUpForm
