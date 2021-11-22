import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import Typography from "@mui/material/Typography";
import { DistributeBL, ExpandMore } from "./DistributeBL";
import { DistributeTBR } from "./DistributeTBR";
import { useState, useEffect } from "react";
import { AddBook } from "./AddBook";

function App() {
  const TBR = [
    {
      name: "Quiet: The Power of Introverts",
      rating: 4.05,
      author: "Susan Cain",
      pubyear: 2012,
      genre: ["Nonfiction, ", "Psychology, ", "Self Help "],
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328562861i/8520610.jpg",
      summary: `At least one-third of the people we know are introverts. They are the ones who prefer listening to speaking; who innovate and create but 
                dislike self-promotion; who favor working on their own over working in teams. In Quiet, Susan Cain argues that we dramatically undervalue 
                introverts and shows how much we lose in doing so. She charts the rise of the Extrovert Ideal throughout the twentieth century and explores 
                how deeply it has come to permeate our culture. She also introduces us to successful introverts—from a witty, high-octane public speaker who 
                recharges in solitude after his talks, to a record-breaking salesman who quietly taps into the power of questions. Passionately argued, superbly 
                researched, and filled with indelible stories of real people, Quiet has the power to permanently change how we see introverts and, equally important, 
                how they see themselves`,
    },
    {
      name: "Man's Search for Meaning",
      rating: 4.35,
      author: "Viktor E. Frankl",
      pubyear: 1946,
      genre: ["Nonfiction, ", "Psychology, ", "Self Help "],
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1535419394i/4069.jpg",
      summary: `Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival. 
                Based on his own experience and the stories of his patients, Frankl argues that we cannot avoid suffering but we can choose how to cope with it, find meaning in it, 
                and move forward with renewed purpose. At the heart of his theory, known as logotherapy, is a conviction that the primary human drive is not pleasure but the pursuit 
                of what we find meaningful. Man's Search for Meaning has become one of the most influential books in America; it continues to inspire us all to find significance in 
                the very act of living.`,
    },
    {
      name: "The Paris Library",
      rating: 4.09,
      author: "Janet Skeslien Charles",
      pubyear: 2021,
      genre: ["Fiction, ", "Historical Fiction, ", "World War II, "],
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1583066862i/52761909.jpg",
      summary: `Paris, 1939: Young and ambitious Odile Souchet has it all: her handsome police officer beau and a dream job at the American Library in Paris. When the Nazis march into Paris, 
                Odile stands to lose everything she holds dear, including her beloved library. Together with her fellow librarians, Odile joins the Resistance with the best weapons she has: books. 
                But when the war finally ends, instead of freedom, Odile tastes the bitter sting of unspeakable betrayal.\n
                Montana, 1983: Lily is a lonely teenager looking for adventure in small-town Montana. Her interest is piqued by her solitary, elderly neighbor. As Lily uncovers more about her neighbor’s 
                mysterious past, she finds that they share a love of language, the same longings, and the same intense jealousy, never suspecting that a dark secret from the past connects them.\n
                A powerful novel that explores the consequences of our choices and the relationships that make us who we are—family, friends, and favorite authors—The Paris Library shows that extraordinary 
                heroism can sometimes be found in the quietest of places.`,
    },
    {
      name: "The yellow wallpaper ",
      rating: 4.1,
      author: "Charlotte Perkins Gilman",
      pubyear: 1892,
      genre: ["Fiction, ", "Psychology, ", "Horror "],
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1276430319i/8217236.jpg",
      summary: `A woman and her husband rent a summer house, but what should be a restful getaway turns into a suffocating psychological battle. This chilling account of postpartum depression and a husband's controlling behavior in the guise of treatment will leave you breathless.`,
    },
    {
      name: "Why we sleep",
      rating: 4.35,
      author: "Matthew Walker",
      pubyear: 2017,
      genre: ["Nonfiction, ", "Psychology, ", "Self Help, ", "Science"],
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556604137i/34466963.jpg",
      summary: `Neuroscientist and sleep expert Matthew Walker provides a revolutionary exploration of sleep, examining how it affects every aspect of our physical and mental well-being. Charting the most 
                cutting-edge scientific breakthroughs, and marshalling his decades of research and clinical practice, Walker explains how we can harness sleep to improve learning, mood and energy levels, 
                regulate hormones, prevent cancer, Alzheimer's and diabetes, slow the effects of aging, and increase longevity. He also provides actionable steps towards getting a better night's sleep every night.`,
    },
    {
      name: "Fahrenheit 451",
      rating: 3.98,
      author: "Ray Bradbury",
      pubyear: 2012,
      genre: ["Fiction, ", "Science Fiction, ", "Dystopia "],
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg",
      summary: `Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, 
                returning each day to his bland life and wife, Mildred, who spends all day with her television “family.” But when he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn’t live 
                in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known.`,
    },
    {
      name: "The Last Wish",
      rating: 4.12,
      author: "Andrzej Sapkowski",
      pubyear: 1993,
      genre: ["Fiction, ", "Fantasy, ", "Magic "],
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1529591917i/40603587.jpg",
      summary: `Geralt the Witcher—revered and hated—is a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary murderer: his targets are the multifarious monsters and vile fiends that ravage the land and attack the innocent.
                But not everything monstrous-looking is evil and not everything fair is good... and in every fairy tale there is a grain of truth.`,
    },
    {
      name: "Pet Sematary",
      rating: 4.02,
      author: "Stephen King",
      pubyear: 1983,
      genre: ["Fiction, ", "Horror, ", "Paranormal"],
      url: "https://images-na.ssl-images-amazon.com/images/I/91ndIrptO4L.jpg",
      summary: `When the Creeds move into a beautiful old house in rural Maine, it all seems too good to be true: physician father, beautiful wife, charming little daughter, adorable infant son-and now an idyllic home. As a family, they've got it all...right down to the friendly car. But the nearby woods hide a blood-chilling truth-more terrifying than death itself-and hideously more powerful. The Creeds are going to learn that sometimes dead is better.`,
    },
  ];

  const Bookss = [
    {
      name: "Rich Dad Poor Dad",
      rating: 4.1,
      author: "Robert T. Kiyosaki",
      pubyear: 1997,
      genre: ["Nonfiction, ", "Business, ", "Finance, "],
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388211242i/69571.jpg",
      summary:
        "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his 'rich dad' — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
    },
    {
      name: "The Immortals of Meluha",
      rating: 4.11,
      author: "Amish Tripathi",
      pubyear: 2010,
      genre: ["Fiction, ", "Myhtology, ", "Historic Fiction"],
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1334659192i/7913305.jpg",
      summary:
        "1900 BC. A near perfect empire created by lord Ram and now ruled by Suryavanshis face devastating terrorist attacks from the east, the land of the Chandravanshis. The only hope for the Suryavanshis is an ancient legend: When evil reaches epic proportions, when all seems lost, when it appears that your enemies have triumphed, a hero will emerge. Is the rough-hewn Tibetan immigrant Shiva, really that hero? And does he want to be that hero at all? Drawn suddenly to his destiny, by duty as well as by love, will Shiva lead the Suryavanshi vengeance and destroy evil?",
    },
    {
      name: "How to Win Friends and Influence People",
      rating: 4.21,
      author: "Dale Carnegie",
      pubyear: 1936,
      genre: ["Nonfiction, ", "Psychology, ", "Self Help, "],
      url: "https://images-na.ssl-images-amazon.com/images/I/81PQGGNul3L.jpg",
      summary:
        "Don’t criticize, condemn or complain. Give honest and sincere appreciation. Arouse in the other person an eager want. Become genuinely interested in other people. Smile. Remember the person’s name. Be a good listener. Talk in terms of the other person’s interests. Make the other person feel important. Avoid arguments. Respect other person’s opinions. If you are wrong, admit it. Begin in a friendly way. Get the other person saying, 'yes'. Let the other person talk more. Let the other person feel that the idea is his or hers. see things from the other person’s point of view. Be sympathetic. Appeal to the nobler motives. Dramatize your ideas. Throw a challenge. Begin with praise and honest appreciation. Call attention to people’s mistakes indirectly. Talk about your own mistakes before criticizing others. Ask questions instead of giving orders. Let others save face. Praise the slightest improvemen. Give the other person a fine reputation to live up to. Use encouragement. Make the other person happy about doing the thing you suggest.",
    },
    {
      name: "Dracula",
      rating: 4,
      author: "Bram Stoker",
      pubyear: 1897,
      genre: ["Fiction, ", "Horror, ", "Paranormal"],
      url: "https://kbimages1-a.akamaihd.net/88a05cf1-a3b6-461b-a8f7-f0e25b06274a/353/569/90/False/dracula-bram-stoker.jpg",
      summary:
        "Dracula is a novel by Bram Stoker, published in 1897. As an epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. It has no single protagonist, but opens with solicitor Jonathan Harker taking a business trip to stay at the castle of a Transylvanian noble, Count Dracula. Harker escapes the castle after discovering that Dracula is a vampire, and the Count moves to England and plagues the seaside town of Whitby. A small group, led by Abraham Van Helsing, hunt Dracula and, in the end, kill him.",
    },
  ];

  const [Books, setBooks] = useState(Bookss);
  const addNewBook = (addedBook) => {
    setBooks([...Books, addedBook]);
  };

  // useEffect(() => {
  //   fetch("https://6188a459d0821900178d740b.mockapi.io/Books")
  //   .then(data => data.json())
  //   .then(book => setBooks(book))
  // })

  return (
    <div className="App">
      <Routes>
        <Route path="/add-book" element={<AddBook addbook={addNewBook} />} />
        <Route path="/tbr" element={<DistributeTBR books={TBR} />} />
        <Route
          path="/book-list"
          element={<DistributeBL books={Books} setBooks={setBooks} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <NavBar />
      <Typography id="dashboard">
        <u>Dashboard</u>
      </Typography>
    </div>
  );
}

export default App;
