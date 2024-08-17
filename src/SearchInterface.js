import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


// note that ${} syntax embeds the contained variable into the string; NEED BACKTICKS, NOT QUOTATION MARKS
export default function SearchCredential() {
    const [credential, setCredential] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault();
        navigate(`/results/${credential}`); // go to the appropriate results page, where the search is carried out and results displayed
      }

    return(
        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Enter name to search for credential</p>
              <input type="text" onChange={e => setCredential(e.target.value)} />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    )
}
