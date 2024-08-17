import './App.css';
import TableDisplay from './GetTable.js';
import SaveCredential from './SendCredential.js';
import SearchCredential from './SearchInterface.js';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
    return(
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="save" element={<SavePage />} />
            <Route path="results/:query" element={<ResultsPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
  );
}

/* Note: Using path="*"" means "match anything", so this route
acts like a catch-all for URLs that we don't have explicit
routes for. */


function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/save">Save a Credential</Link>
          </li>
          <li>
            <Link to="/search">Search Credentials</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function SavePage() {
  return (
    SaveCredential()
  );
}

function SearchPage() {
  return (
    SearchCredential()
  );
}

function ResultsPage() {
  return (
    TableDisplay()
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
