import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">My Reading Journal</a> 
        <div class="vl"></div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <Button className="nav-link">Home</Button>
            <Button className="nav-link">TBR</Button>
            <Button className="nav-link">Book List</Button>
            <Button className="nav-link">Add Book</Button>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default App;
