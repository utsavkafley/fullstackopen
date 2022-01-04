import React, { useState } from "react";

const DisplayAnecdote = ({ anecdote, votes }) => {
  if (!anecdote) {
    return <p>No anecdotes have been voted yet</p>;
  }

  return (
    <p>
      {anecdote} <br /> has {votes} votes
    </p>
  );
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(null);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleClickNextButton = () => {
    let selected = getRandomInt(anecdotes.length - 1);
    setSelected(selected);
  };

  const handleClickVoteButton = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);

    setMostVoted(copy.indexOf(Math.max(...copy)));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <DisplayAnecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={handleClickNextButton}>next anecdote</button>
      <button onClick={handleClickVoteButton}>vote</button>

      <h1>Anecdote with most votes</h1>
      <DisplayAnecdote
        anecdote={anecdotes[mostVoted]}
        votes={votes[mostVoted]}
      />
    </div>
  );
};

export default App;
