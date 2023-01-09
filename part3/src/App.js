import React from 'react';
import { useState } from 'react';


const Statistics=(props)=>{
  if(props.good>0 || props.neutral>0 || props.bad>0){
    return(
      <div>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positive} />
      </div> 
    )
  }
  else{
    return <p>No feedback given</p>
  }
}

const Button=(props)=> <button onClick={props.handle}>{props.feedback} </button>
const StatisticLine=(props)=> <p>{props.text} {props.value}</p>


const  App = ()=> {
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)

  const handleGood=()=>{
    setGood(good+1)
    
  }

  const handleNeutral=()=>{
    setNeutral(neutral+1)
  }

  const handleBad=()=>{
    setBad(bad+1)
  }
  let all=good+neutral+bad
  let average= (all)/3
  let positive=100*(good)/(all)
  const goodFeedBack='good'
  const neutralFeedBack='neutral'
  const badFeedBack='bad'
  return (
    <div>
      <h3>give feedback</h3>
      <Button handle={handleGood} feedback={goodFeedBack} />
      <Button handle={handleNeutral} feedback={neutralFeedBack} />
      <Button handle={handleBad} feedback={badFeedBack} />
      <h3>statistics</h3>
      <Statistics good={good} 
                  neutral={neutral} 
                  bad={bad}
                  all={all}
                  average={average}
                  positive={positive} />
      
    </div>
  );
}

export default App;
