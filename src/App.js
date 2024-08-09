import './App.css';
import TableDisplay from '../src/TableDisplay.js';
// import SaveCredential from '../src/SendCredential.js';
// import SearchCredential from '../src/SearchCredential.js';

function App() {

  // create 1000 rows of fake data — the query results from the server will go here instead
  const creds = ["IB Diploma", "OSSD Diploma", "BA", "PhD", "ARCT"]; // list of some possible credentials
  let credData = [];
  for (let i = 1; i<1000; i++) {
    let randomCred = creds[Math.floor(Math.random() * creds.length)]; // pick random credential from list
    credData.push( // and stick it onto the end of credData
      { id: i, credential: randomCred, verified: "Hopefully"}
      )
  }

  return(
    TableDisplay(credData)
  );
}

/*
function App() {
  
    return(
      SaveCredential()
  );
}
*/

export default App;
