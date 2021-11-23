import * as React from "react";
import { NavBar } from "./NavBar";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";

export function EditMovie({ books, setBooks }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const book = books[id];

  const [name, setName] = useState(book.name);
  const [rating, setRating] = useState(book.rating);
  const [pubyear, setPubyear] = useState(book.pubyear);
  const [author, setAuthor] = useState(book.author);
  const [genre, setGenre] = useState(book.genre);
  const [url, setUrl] = useState(book.url);
  const [summary, setSummary] = useState(book.summary);
  return (
    <div>
      <NavBar />
      <div className="form-div">
        <TextField
          defaultValue={book.name}
          className="outlined-basic"
          label="Book Name"
          // variant="outlined"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          defaultValue={book.rating}
          className="outlined-basic"
          label="Rating"
          variant="outlined"
          onChange={(event) => setRating(event.target.value)}
        />
        <TextField
          defaultValue={book.pubyear}
          className="outlined-basic"
          label="Published Year"
          variant="outlined"
          onChange={(event) => setPubyear(event.target.value)}
        />
        <TextField
          defaultValue={book.author}
          className="outlined-basic"
          label="Author"
          variant="outlined"
          onChange={(event) => setAuthor(event.target.value)}
        />
        <TextField
          defaultValue={book.genre}
          className="outlined-basic"
          label="Genre"
          variant="outlined"
          onChange={(event) => setGenre(event.target.value)}
        />
        <TextField
          defaultValue={book.url}
          className="outlined-basic"
          label="Image URL"
          variant="outlined"
          onChange={(event) => setUrl(event.target.value)}
        />
        <TextField
          defaultValue={book.summary}
          className="outlined-basic"
          id="outlined-multiline-static"
          label="Summary"
          multiline
          rows={4}
          onChange={(event) => setSummary(event.target.value)}
        />
        <Button
          className="submit"
          variant="contained"
          color="success"
          onClick={() => {
            const updatedBook = {
              name,
              rating,
              pubyear,
              author,
              genre,
              url,
              summary,
            };
            const copyBooks = [...books];
            copyBooks[id] = updatedBook;
            setBooks(copyBooks);
            navigate("/book-list");
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
