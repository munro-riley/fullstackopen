import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [voteCount, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [highestVoted, setHighestVoted] = useState(0);

  const voteFunc = (index) =>{
    const newArr = voteCount.map((e, i)=>{
      if(i == index){
        return e = e+1;
      }else{
        return e;
      }
    })

    setVotes(newArr);
    findHighVote(newArr);
  }

  const findHighVote = (arr) => {
    let highestV = 0;
    let highscore = 0;

    arr.forEach((e, i) => {
      if(e >= highscore){
        highscore = e;
        highestV = i;
      }

    setHighestVoted(highestV);
    });
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <b>{anecdotes[selected]}</b>
      <br />
      <b>Has {voteCount[selected]} votes</b>
      <br />
      <button onClick={()=>{voteFunc(selected)}}>Vote</button>
      <button onClick={()=>{setSelected(Math.floor(Math.random() * 8))}}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <b>{anecdotes[highestVoted]}</b>
      <br />
      <b>Has {voteCount[highestVoted]} votes</b>
    </div>
  )
}

export default App