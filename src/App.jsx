import './App.css'
import GridLayout from "react-grid-layout"
import Button from "./components/Button"



export default function App() {
  return (

    <main>
    
<h3>slide 1/12</h3> 
 
<container style={{ display: 'flex', margin: 20 }}>
  
<Button onClick={() => setCount(count === 1)} className="card" alt="Left">
  <img src="/src/Xmas_tree.png" width={180} height={180}/>
</Button>
  
<Button onClick={() => setCount(count === 0)} className="card" alt="Right">
  <img src="/src/Snowman.png" width={180} height={180}/>
</Button>

  
</container>

<container>

  <Button action="play audio" > Play Audio </Button>
</container>

  <hr id="line"/>    
      
<container>
<Button action="next" > Next </Button>
</container> 
    
    </main>
    
  )
}
