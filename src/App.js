import React, { useState } from 'react';
import data from './data';
import Text from "./Text"
function App() {
  // console.log(data)
  const [answer,setAnswer] = useState([]);
   const [input,setInput] = useState("");
  // const ref = useRef(null);
 const checkNum = (num)=>{

  if (num > data.length -1) {
let newNum = data.length -1
return newNum
  }

    if (num < 0 ) {
let newNum = 1
return newNum;


  }

      if (num === 0 ) {
return ;
  }
return num;
} 
  const handleSubmit = (e)=>{
e.preventDefault();
let num =  parseInt(input);
 let neww =checkNum(num)
 console.log(neww)
setAnswer(data.slice(0,neww)); 
//  console.log(num,data.length)
setInput("");
  }
  // console.log(answer)

  return <main>
<form  className ="form" onSubmit={handleSubmit} >
<div>
  <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
  <button type="submit" className="btn">submit</button>
</div>
</form>
<Text dat = {answer}></Text>
  </main>
    
    
}

export default App;
