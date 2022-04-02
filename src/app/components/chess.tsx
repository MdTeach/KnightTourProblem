// https://github.com/ashiishme/react-sine-wave.git
import { useCanvasContext } from 'app/hooks/useCanvas'
import useResponsiveSize from 'app/hooks/useResponsiveSize'
import { useEffect, useState } from 'react';
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

    ctx.drawImage(
      horseImage,
      boardTopx + horsePosition.x*squareSize,
      boardTopy + horsePosition.y*squareSize,
      squareSize*0.9,
      squareSize*0.9
    );


    // draw the border around the chessboard
    ctx.strokeStyle = "black";
    ctx.strokeRect(boardTopx, boardTopy, squareSize*boardSize, squareSize*boardSize)
} 



const Chess = ({boardSize,initial_pos}:CanvasProps) => {
  const { ctx } = useCanvasContext()
  const { width, height } = useResponsiveSize()

  const [isImageLoaded, setImageLoaded] = useState(false);
  
  const HorseImage = new Image();
  HorseImage.src = HorseImageURI;
  HorseImage.onload = ()=>{
    console.log("image was loaded");
    setImageLoaded(true)
  }


  if(!isImageLoaded) return null
  if(!ctx) return null  

  const render = () => {
    ctx.clearRect(0, 0, width,height);
    drawChessboard(ctx,boardSize,width,height,HorseImage,initial_pos);
    requestAnimationFrame(render)
  }
  
  if (ctx) render()
  return null
}

export {Chess}
