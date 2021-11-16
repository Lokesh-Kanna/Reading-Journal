import "./App.css";
import Button from "@mui/material/Button";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

function App() {
  const Books = [
    {
      name: "Rich Dad Poor Dad",
      rating: 4.1,
      author: "Robert T. Kiyosaki",
      pubyear: 1997,
      genre: ['Business', 'Nonfiction', 'Self Help', 'Finance', 'Personal Developement'],
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388211242i/69571.jpg",
      summary: `Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his "rich dad" — and 
                the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to 
                be rich and explains the difference between working for money and having your money work for you.`
    },
    {
      name: "The Immortals of Meluha",
      rating: 4.11,
      author: "Amish Tripathi",
      pubyear: 2010,
      genre: ['Business', 'Nonfiction', 'Self Help', 'Finance', 'Personal Developement'],
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1334659192i/7913305.jpg",
      summary: `1900 BC. A near perfect empire created by lord Ram and now ruled by Suryavanshis face devastating terrorist attacks from the east, the land of the Chandravanshis.
                The only hope for the Suryavanshis is an ancient legend: When evil reaches epic proportions, when all seems lost, when it appears that your enemies have triumphed, a hero will emerge.
                Is the rough-hewn Tibetan immigrant Shiva, really that hero? And does he want to be that hero at all? Drawn suddenly to his destiny, by duty as well as by love, will Shiva lead the 
                Suryavanshi vengeance and destroy evil?`
    },
    {
      name: "How to Win Friends and Influence People",
      rating: 4.21,
      author: "Dale Carnegie",
      pubyear: 1936,
      genre: ['Psychology', 'Nonfiction', 'Self Help', 'Business', 'Personal Developement'],
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388211242i/69571.jpg",
      summary: `Don’t criticize, condemn or complain. Give honest and sincere appreciation. Arouse in the other person an eager want. Become genuinely interested in other people. Smile.
                Remember the person’s name. Be a good listener. Talk in terms of the other person’s interests. Make the other person feel important. Avoid arguments. Respect other person’s opinions.
                If you are wrong, admit it. Begin in a friendly way. Get the other person saying, “yes". Let the other person talk more. Let the other person feel that the idea is his or hers. 
                see things from the other person’s point of view. Be sympathetic. Appeal to the nobler motives. Dramatize your ideas. Throw a challenge. Begin with praise and honest appreciation.
                Call attention to people’s mistakes indirectly. Talk about your own mistakes before criticizing others. Ask questions instead of giving orders. Let others save face. Praise the slightest improvemen.
                Give the other person a fine reputation to live up to. Use encouragement. Make the other person happy about doing the thing you suggest.`
    },
    {
      name: "Dracula",
      rating: 4,
      author: "Bram Stoker",
      pubyear: 1897,
      genre: ['Classic', 'Horror', 'Fiction', 'Gothic', 'Paranormal'],
      url: "https://kbimages1-a.akamaihd.net/88a05cf1-a3b6-461b-a8f7-f0e25b06274a/353/569/90/False/dracula-bram-stoker.jpg",
      summary: `Dracula is a novel by Bram Stoker, published in 1897. As an epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. 
                It has no single protagonist, but opens with solicitor Jonathan Harker taking a business trip to stay at the castle of a Transylvanian noble, Count Dracula. 
                Harker escapes the castle after discovering that Dracula is a vampire, and the Count moves to England and plagues the seaside town of Whitby. A small group, 
                led by Abraham Van Helsing, hunt Dracula and, in the end, kill him.`
    }
  ]
  return (
    <div className="App">
      <Routes>
        <Route path="/book-list" element={<Distributer />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <NavBar />
      <Typography id="dashboard"><u>Dashboard</u></Typography>
    </div>
  )
}


function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          My Reading Journal
        </a>
        <div class="vl"></div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="" className="nav-link">TBR</Link>
            </li>
            <li>
              <Link to="/book-list" className="nav-link">Book List</Link>
            </li>
            <li>
              <Link to="" className="nav-link">Add Book</Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}


function Distributer() {
  return (
    <div>
      <NavBar />

    </div>
  )
}


export default App;
