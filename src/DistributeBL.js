import * as React from "react";
import { NavBar } from "./NavBar";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

export function DistributeBL({ books, setBooks }) {
  return (
    <div>
      <NavBar />
      <div className="carddisp">
        {books.map((book, index) => {
          return (
            <BookList
              book={books}
              name={book.name}
              author={book.author}
              rating={book.rating}
              year={book.pubyear}
              genre={book.genre}
              img={book.url}
              summary={book.summary}
              id={index}
              setBooks={setBooks}
            />
          );
        })}
      </div>
    </div>
  );
}
export const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
function BookList({
  name,
  author,
  rating,
  year,
  genre,
  img,
  summary,
  id,
  index,
  book,
  setBooks,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="card-body" sx={{ maxWidth: 345 }}>
      <CardHeader
        className="card-header"
        avatar={
          <Avatar sx={{ backgroundColor: "#efb5a3" }} aria-label="recipe">
            <img src="https://img.icons8.com/fluency/40/000000/book.png" />
          </Avatar>
        }
        title={
          <h6>
            <b>
              {name} ({year})
            </b>
          </h6>
        }
        subheader={`-${author}`}
      />
      <CardMedia
        className="card-img"
        component="img"
        height="194"
        image={img}
        alt="Book image"
      />
      <CardContent className="card-content">
        <Typography variant="body2" color="text.secondary">
          <b>Genre:</b> <br></br> {genre}
        </Typography>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Summary</Typography>
          <Typography paragraph>{summary}</Typography>
        </CardContent>
      </Collapse>
      <CardActions>
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => {
            console.log(book.filter((book, index) => index != id));
            setBooks(book.filter((book, index) => index != id));
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
