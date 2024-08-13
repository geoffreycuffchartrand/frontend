import React, { useState } from 'react';

async function sendCred(formInput) { // 3. sends the credential to server and prints returned data/error in the console
    return fetch("http://localhost:3001/", { 
        mode: "cors",
        method: "POST", 
        body: JSON.stringify({ cred: formInput }), // turn response into JSON, with cred as key and user input as the value
        headers: { "Content-Type": "application/json" }
    })
    .then(data => console.log(data)) 
    .catch(error => console.error(error)); 
  }

export default function SaveCredential() {
    const [credential, setCredential] = useState('');
    const handleSubmit = async e => { // 2. when "Submit" is pressed, call sendCred
        e.preventDefault(); 
        sendCred(credential);
      }

    return( // 1. update credential variable to whatever is entered in the text box
        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}> 
            <label>
              <p>Username</p>
              <input type="text" onChange={e => setCredential(e.target.value)} />  
            </label> 
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    )
}
