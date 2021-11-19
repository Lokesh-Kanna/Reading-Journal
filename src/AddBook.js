import * as React from "react";
import Button from "@mui/material/Button";
import { NavBar } from "./NavBar";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export function AddBook({ addbook }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [pubyear, setPubyear] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div>
      <NavBar />
      <div className="form-div">
        <TextField
          className="outlined-basic"
          label="Book Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)} />
        <TextField
          className="outlined-basic"
          label="Rating"
          variant="outlined"
          onChange={(event) => setRating(event.target.value)} />
        <TextField
          className="outlined-basic"
          label="Published Year"
          variant="outlined"
          onChange={(event) => setPubyear(event.target.value)} />
        <TextField
          className="outlined-basic"
          label="Author"
          variant="outlined"
          onChange={(event) => setAuthor(event.target.value)} />
        <TextField
          className="outlined-basic"
          label="Genre"
          variant="outlined"
          onChange={(event) => setGenre(event.target.value)} />
        <TextField
          className="outlined-basic"
          label="Image URL"
          variant="outlined"
          onChange={(event) => setUrl(event.target.value)} />
        <TextField
          className="outlined-basic"
          id="outlined-multiline-static"
          label="Summary"
          multiline
          rows={4}
          onChange={(event) => setSummary(event.target.value)} />
        <Button
          className="submit"
          variant="contained"
          onClick={() => {
            const addedBook = { name, rating, author, pubyear, genre, url, summary };
            addbook(addedBook);
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
