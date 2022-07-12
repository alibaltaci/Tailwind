import { type } from '@testing-library/user-event/dist/type';
import React, {useState} from 'react';
import { Wrapper, Row, Header, Image, Form, Search, Button } from "./components/styled/index";
import joker from "./images/joker.png";
import axios from 'axios';
import { Joke, Flags, Lang, Category } from './common/types';
import JokeItem from './components/JokeItem';

const BASE_URL = "https://v2.jokeapi.dev/joke/Any";

function App() {

  const [search, setSearch] = useState("");

  const [error, setError] = useState(false);

  const [jokes, setJokes] = useState< Joke[]>([]);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();

    const ENDPOINT = `${BASE_URL}?contains=${search}&amount=10`;

    const { data } = await axios.get(ENDPOINT);

    console.log(data);
    if (search === ""){

    }

    if (data.error  || search === "") {
      setError(true);
      setJokes([]);
    }
    else{
      setError(false);
      setJokes(data.jokes);
    }

    setSearch("");
  }

  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Image src={joker} alt="Joker" />
        </Row>
        <Form onSubmit={getJokes}>
          <Search type="text" placeholder="Search..."  value={search} onChange={handleChange} />
          <Button type='submit'>Submit</Button>
        </Form>
        <div>
          {error && <p> Sorry, no jokes found.</p>}
          {jokes.length > 0 && 
            jokes.map((joke) => <JokeItem key={joke.id} joke={joke} />)}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
