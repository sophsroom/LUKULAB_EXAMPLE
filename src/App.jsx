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
  audio: '/mp3/1.mp3',
},
{
  id: 2, // Used in JSX as a key
  right: '/2_1.jpg',
  left: '/2_2.jpg',
  correct: "right",
  audio: '/mp3/2.mp3',
},  
{
  id: 3, // Used in JSX as a key
  right: '/3_1.jpg',
  left: '/3_2.jpg',
  correct: "right",
  audio: '/mp3/3.mp3',
},  
{
  id: 4, // Used in JSX as a key
  right: '/4_1.jpg',
  left: '/4_2.jpg',
  correct: "left",
  audio: '/mp3/4.mp3',
}, 
{
  id: 5, // Used in JSX as a key
  right: '/5_1.jpg',
  left: '/5_2.jpg',
  correct: "right", 
  audio: '/mp3/5.mp3',
}, 
{
  id: 6, // Used in JSX as a key
  right: '/6_1.jpg',
  left: '/6_2.jpg',
  correct: "left",
  audio: '/mp3/6.mp3',
}, 
{
  id: 7, // Used in JSX as a key
  right: '/7_1.jpg',
  left: '/7_2.jpg',
  correct: "right",
  audio: '/mp3/7.mp3',
}, 
{
  id: 8, // Used in JSX as a key
  right: '/8_1.jpg',
  left: '/8_2.jpg',
  correct: "left",
  audio: '/mp3/8.mp3',
}, 
{
  id: 9, // Used in JSX as a key
  right: '/9_1.jpg',
  left: '/9_2.jpg',
  correct: "left",
  audio: '/mp3/9.mp3',
},
{
  id: 10, // Used in JSX as a key
  right: '/10_1.jpg',
  left: '/10_2.jpg',
  correct: "right",
  audio: '/mp3/10.mp3',
},
{
  id: 11, // Used in JSX as a key
  right: '/11_1.jpg',
  left: '/11_2.jpg',
  correct: "right",
  audio: '/mp3/11.mp3',
},
{
  id: 12, // Used in JSX as a key
  right: '/12_1.jpg',
  left: '/12_2.jpg',
  correct: "left",
  audio: '/mp3/12.mp3',
},
 ];

export default function App() {
const [count, setCount] = React.useState(0); 
const [slide, setSlide] = React.useState(1); 
  return (

    <main>
    
<p>Slide {slide}</p> 
<div style={{ display: 'flex', margin: 20 }}>
  
<Button onClick={() => setCount(count + 1)} className="card" alt="Left">
  <img src={tasks[slide -1] .left} width={220} height={180}/>
</Button>
  
<Button onClick={() => setCount(count)} className="card" alt="Right">
  <img src={tasks[slide -1] .right} width={220} height={180}/>
</Button>
  
</div>

<Counter count={count}></Counter>

<div>
  <Sounds src={tasks[slide -1].audio}/>
</div>

  <hr id="line"/>    
      
<div>
<Button onClick={() => setSlide(slide +1)} action="next" > Next </Button>
</div> 
<br></br> 


</main>
    
  )
}
