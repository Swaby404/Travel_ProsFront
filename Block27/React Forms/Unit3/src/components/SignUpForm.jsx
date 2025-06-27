//how do we import useState from "react"? by writing import useState from "react"
import { useState } from "react"
 
/// 
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
/// How do we fetch data from API ? And how do we handle errors in the form? we fetch URL and use async/await!
 try {
     const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username, password}),
     });
     const json = await response.json();// Parse the JSON response
     // How do we check if the response is ok and if a token is received? if / else statements  
     if (!response.ok) {
       setError(json.message || "Something went wrong");
       return;
     }
     if (json.token) {
       setToken(json.token);
       setError(null);
       setUsernameError(null);
       setPasswordError(null);
       //reset the form 
       setUsername('');
       setPassword('');
     } else {
       setError("No token received");
     }
   } catch (error) {
    setError(error.message);
   }
  }

  const hasErrors = () => {
   let errors = false;

   //   How do we validate the username and password? by checking their .length to create conditions.
   if (username.length < 5) {
     setUsernameError("Username is too short") ;
     errors = true
   } else {
    setUsernameError(null)
   }

   if (password.length < 8) {
    setPasswordError("Password is too short") ;
    errors = true
   } else {
    setPasswordError(null)
   }

   return errors;
 };

  return (///how do we render the form? Always in the return; the below code is the form that will be displayed on the page!
    <section>
      <h1>Application Form</h1>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      {usernameError && <p>{usernameError}</p>}
      {passwordError && <p>{passwordError}</p>}
      <form onSubmit={handleSubmit}>
        <label>  
         Username: <input value={username} onChange={(event) =>setUsername(event.target.value)} />
        </label>
        <label> 
         Password: <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </section>
  )
}

export default SignUpForm
