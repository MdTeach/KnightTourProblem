import Canvas from 'app/components/canvas'

import {useState} from 'react';


type traceType = Array<[number, number]>

function App() {
  const [boardSize, setBoardSize] = useState(5)
  const [xPosition, setXPosition] = useState(0) 
  const [yPosition, setYPosition] = useState(0) 

  const [trace, setTrace] = useState<traceType>([[0,0]]);
  
  const generateSolution = ()=>{
    let _trace:traceType = [
      [0,1],
      [1,1],
      [1,2],
      [1,3],
    ]

    setTrace([..._trace])
  }

  

  return (
    <div className="App">
      <div style={{
          width:'80%',
          margin:"auto",
          textAlign:"center",
          backgroundColor:"red"
      }}>
        <input placeholder='board size' type="number" defaultValue={5}  onChange={(e)=>setBoardSize(parseInt(e.target.value))}/>
        <input placeholder='knight X position'  defaultValue={0} onChange={
          (e)=>{
            setXPosition(parseInt(e.target.value))
            setTrace([[parseInt(e.target.value),yPosition]])
          }
        }/>
        <input placeholder='knight Y position'  defaultValue={0} onChange={
          (e)=>{
            setYPosition(parseInt(e.target.value))
            setTrace([[xPosition,parseInt(e.target.value)]])
          }
        }/>
        <button onClick={generateSolution}>Run Solution</button>
      </div>
      <Canvas boardSize={boardSize} initial_pos={{x:xPosition,y:yPosition}} trace={trace} />
    </div>
  )
}

export default App
