import React, { useState } from 'react';

/*
Summary:

The front end page has a textbox for the user to enter their credential.
When they click submit, their input is sent to the backend server with a fetch(), and the returned data or error are printed to the console.
*/

async function sendCred(credential) { // sends credential; to be used later when submit button is pressed
    return fetch('http://localhost:3001/', { // fetch returns a 'Promise' (to supply a value later) - a Promise object is either pending, fulfilled (with a 'Response' object containing the value), or rejected (with a reason)
        mode: "cors",
        method: 'POST', // a POST request submits an entry to a specified server resource, rather than, for example, just requesting something
        body: JSON.stringify(credential), // in this case, it submits whatever's stored in the credential variable
        headers: {
          'Content-Type': 'application/json' // tells the server that what's been sent is a json string
        }
    })
    .then(data => console.log(data)) // if/when the promise is fulfilled, return the associated data to the console
    .catch(error => console.error(error)); // if/when the promise is rejected, return the associated error to the console 
  }

export default function SaveCredential() {
    const [credential, setCredential] = useState(''); // create state variable ('credential') and function ('setCredential') to update it and render again; initial value is empty ('')

    const handleSubmit = async e => { // creates an asynchronous function (one that returns a promise); ie the fetch above
        e.preventDefault(); 
        sendCred(credential); // 
      }

    return( // update credential state variable to whatever is entered in the text box ('e.target.value'), in JSON notation ('JSON.stringify'), and when user presses submit, call sendCred
        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}> 
            <label>
              <p>Username</p>
              <input type="text" onChange={e => setCredential(JSON.stringify(e.target.value))} />  
            </label> 
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    )
}
