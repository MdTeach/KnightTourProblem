// https://github.com/ashiishme/react-sine-wave.git
import { useCanvasContext } from 'app/hooks/useCanvas'
import useResponsiveSize from 'app/hooks/useResponsiveSize'
import {useState } from 'react';
import { CanvasProps } from './types';

const HorseImageURI = require('assets/horse.png');


function drawChessboard(ctx:CanvasRenderingContext2D,boardSize:number,width:number,height:number,horseImage:HTMLImageElement,horsePosition:any) {
    const squareSize = width/boardSize * 0.55;
    const boardTopx = (width - squareSize*boardSize)/2;
    const boardTopy = 10;
    
    for(let i=0; i<boardSize; i++) {
      for(let j=0; j<boardSize; j++) {
        ctx.fillStyle = ((i+j)%2===0) ? "#FEF8E4":"#5F360F";
        let xOffset = boardTopx + j*squareSize;
        let yOffset = boardTopy + i*squareSize;
        ctx.fillRect(xOffset, yOffset, squareSize, squareSize);
      }
    }

    // draw the border around the chessboard
    ctx.strokeStyle = "black";
    ctx.strokeRect(boardTopx, boardTopy, squareSize*boardSize, squareSize*boardSize)
}


function drawHorse(ctx:CanvasRenderingContext2D,boardSize:number,width:number,height:number,horseImage:HTMLImageElement,horsePosition:any) {
  const squareSize = width/boardSize * 0.55;
  const boardTopx = (width - squareSize*boardSize)/2;
  const boardTopy = 10;

  ctx.drawImage(
    horseImage,
    boardTopx + horsePosition[0]*squareSize,
    boardTopy + horsePosition[1]*squareSize,
    squareSize*0.9,
    squareSize*0.9
  );
}

function drawVisited(ctx:CanvasRenderingContext2D,boardSize:number,width:number,height:number,horseImage:HTMLImageElement,visited:any) {
  const squareSize = width/boardSize * 0.55;
  const boardTopx = (width - squareSize*boardSize)/2;
  const boardTopy = 10;

  for(let horsePosition of visited){
    ctx.fillStyle = "rgba(31, 238, 148, 0.4)";
    ctx.fillRect(
      boardTopx + horsePosition[0]*squareSize,
      boardTopy + horsePosition[1]*squareSize,
      squareSize, 
      squareSize
    );
  }
}


const Chess = ({boardSize,initial_pos,trace}:CanvasProps) => {
  const { ctx } = useCanvasContext()
  const { width, height } = useResponsiveSize()

  const [isImageLoaded, setImageLoaded] = useState(false);
  const HorseImage = new Image();
  HorseImage.src = HorseImageURI;
  HorseImage.onload = ()=>{
    setImageLoaded(true)
  }

  const visitedNodes:Array<[number,number]> = [trace[0]]
  const isTracing = true
  const speed = 30
  let counter = 0
  let idx = 0

  if(!isImageLoaded) return null
  if(!ctx) return null  

  const render = () => {
    ctx.clearRect(0, 0, width,height);
    
    drawChessboard(ctx,boardSize,width,height,HorseImage,initial_pos);
    drawVisited(ctx,boardSize,width,height,HorseImage,visitedNodes);
    drawHorse(ctx,boardSize,width,height,HorseImage,trace[idx]);

    requestAnimationFrame(render)

    counter += 1
    if(counter >= speed){
      if (idx < trace.length-1){
        idx += 1
        visitedNodes.push(trace[idx])
      } 
      counter = 0
    }
  }
  
  if (ctx) render()
  return null
}

export {Chess}
