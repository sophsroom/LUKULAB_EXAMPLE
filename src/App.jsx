import './App.css'
import GridLayout from "react-grid-layout"

import Button from "./components/Button"



export default function App() {
  return (

    <main>
      
<h1>slide 1</h1> 

<container>
<Button className="card"><img src="/src/Xmas_tree.png" width={180} height={180}/>
</Button>
<Button className="card"><img src="/src/Snowman.png" width={180} height={180}/>
</Button>
</container>

<container>
<Button action="play audio" > play audio </Button>
</container>

  <hr id="line"/>    
      
<container>
<Button action="next" > next </Button>
</container>   
    </main>
  )
}
