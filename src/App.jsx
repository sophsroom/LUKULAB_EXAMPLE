import React from "react"
import './App.css'
import GridLayout from "react-grid-layout"
import Button from "./components/Button"
import Counter from  "./components/Counter.jsx"
import Sounds from "./components/Sounds.jsx"

const tasks = [{
  id: 1, // Used in JSX as a key
  left: '/1_1.jpg',
  right: '/1_2.jpg',
  correct: "left",
  audio: '/mp3/1.mp3'
},
{
  id: 2, // Used in JSX as a key
  right: '/2_1.jpg',
  left: '/2_2.jpg',
  correct: "right",
  audio: '/mp3/2.mp3'
},  
{
  id: 3, // Used in JSX as a key
  right: '/3_1.jpg',
  left: '/3_2.jpg',
  correct: "right",
},  
{
  id: 4, // Used in JSX as a key
  right: '/4_1.jpg',
  left: '/4_2.jpg',
  correct: "left",
  audio: '/mp3/4.mp3'
}, 
{
  id: 5, // Used in JSX as a key
  right: '/5_1.jpg',
  left: '/5_2.jpg',
  correct: "right", 
  audio: '/mp3/5.mp3'
}, 
{
  id: 6, // Used in JSX as a key
  right: '/6_1.jpg',
  left: '/6_2.jpg',
  correct: "left",
  audio: '/mp3/6.mp3'
},              
 ];

export default function App() {
const [count, setCount] = React.useState(0); 
const [slide, setSlide] = React.useState(1); 
  return (

    <main>
    
<p>Slide {slide}</p> 
<container style={{ display: 'flex', margin: 20 }}>
  
<Button onClick={() => setCount(count + 1)} className="card" alt="Left">
  <img src={tasks[slide -1] .left} width={180} height={180}/>
</Button>
  
<Button onClick={() => setCount(count)} className="card" alt="Right">
  <img src={tasks[slide -1] .right} width={180} height={180}/>
</Button>
  
</container>

<Counter count={count}></Counter>

<container>
  <Sounds src={tasks[slide -1].audio}/>
</container>

  <hr id="line"/>    
      
<container>
<Button onClick={() => setSlide(slide + 1)} action="next" > Next </Button>
</container> 
<br></br> 


    </main>
    
  )
}
