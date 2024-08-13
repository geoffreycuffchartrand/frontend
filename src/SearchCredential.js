import React, { useState } from 'react';

async function searchCred(name) {
    name = name.slice(1, -1)
    return fetch(`http://localhost:3001/search?name=${name}`, {
        mode:"cors"
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

export default function SearchCredential() {
    const [credential, setCredential] = useState('');
    const handleSubmit = async e => {
        e.preventDefault();
        searchCred(credential);
      }

    return(
        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Enter name to search for credential</p>
              <input type="text" onChange={e => setCredential(JSON.stringify(e.target.value))} />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    )
}
