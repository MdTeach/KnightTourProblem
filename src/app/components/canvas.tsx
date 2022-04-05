import { useRef, useEffect, useState } from 'react'

import { CanvasContext } from 'app/hooks/useCanvas'
import useResponsiveSize from 'app/hooks/useResponsiveSize'
import {Chess} from "./chess";

import { CanvasProps } from './types';

type traceType = Array<[number, number]>

const Canvas = ({boardSize,initial_pos,trace}:CanvasProps) => {  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { width, height } = useResponsiveSize()

  const [ctx, setContext] = useState<CanvasRenderingContext2D | undefined>()

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d')
    if (ctx) setContext(ctx)
  }, [])

  return (
    <div style={{textAlign:"center"}}>
      <CanvasContext.Provider value={{ ctx: ctx }}>
        <canvas
          id="canvas"
          ref={canvasRef}
          width={width}
          height={width}

          style={{
            marginTop:"10px",
            maxWidth:"80vw",
            // backgroundColor:"red",
            textAlign:"center",
          }}
        ></canvas>
        <Chess boardSize={boardSize} initial_pos={initial_pos} trace={trace}/>
      </CanvasContext.Provider>
    </div>
  )
}

export default Canvas;