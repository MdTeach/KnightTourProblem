export interface CanvasProps {
    boardSize:number,
    initial_pos:{
      x:number,
      y:number
    }
    trace:Array<[number, number]>
}


export type traceType = Array<[number, number]>