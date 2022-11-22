import React from "react"
import './App.css'
import GridLayout from "react-grid-layout"
import Button from "./components/Button"
import Counter from  "./components/Counter.jsx"

const tasks = [{
  id: 1, // Used in JSX as a key
  left: '/src/Xmas_tree.png',
  right: '/src/Snowman.png',
  correct: "left",
},
{
  id: 2, // Used in JSX as a key
  right: '/src/Xmas_tree.png',
  left: '/src/Snowman.png',
  correct: "right",
}            
             
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
  
  <Button action="play audio" > Play Audio </Button>
</container>

  <hr id="line"/>    
      
<container>
<Button onClick={() => setSlide(slide + 1)} action="next" > Next </Button>
</container> 
<br></br> 
    </main>
    
  )
}
