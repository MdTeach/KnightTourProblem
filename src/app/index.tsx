import Canvas from 'app/components/canvas'

import {useState} from 'react';


function App() {
  const [boardSize, setBoardSize] = useState(5)
  const [xPosition, setXPosition] = useState(0) 
  const [yPosition, setYPosition] = useState(0) 

  return (
    <div className="App">
      <div style={{
          width:'80%',
          margin:"auto",
          textAlign:"center",
          backgroundColor:"red"
      }}>
        <input placeholder='board size' type="number" defaultValue={5}  onChange={(e)=>setBoardSize(parseInt(e.target.value))}/>
        <input placeholder='knight X position'  defaultValue={0} onChange={(e)=>setXPosition(parseInt(e.target.value))}/>
        <input placeholder='knight Y position'  defaultValue={0} onChange={(e)=>setYPosition(parseInt(e.target.value))}/>
        <button>Run Solution</button>
      </div>
      <Canvas boardSize={boardSize} initial_pos={{x:xPosition,y:yPosition}} />
    </div>
  )
}

export default App
