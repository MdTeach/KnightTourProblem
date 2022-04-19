import { traceType } from "app/components/types";

class KnightTour{
    move_x = [2, 1, -1, -2, -2, -1, 1, 2]
    move_y = [1, 2, 2, 1, -1, -2, -2, -1]
    
    solveKnightTour(size:number,px:number,py:number){
        const board = this.getNewBoard(size);
        let counter = 1;
        board[px][py] = 0;

        if(!this.tour(board,px,py,counter)){
            console.log("Solution doesn't exist")
            alert("No solution found")
            throw new Error("Solution not found")
        }else{
            console.log("Found solution!!!");
            console.log(board);
        }
        const trace = this.getTrace(board);
        return trace
    }


    tour(board:number[][], curX:number, curY:number, counter:number){
        const boardSize = board.length * board.length

        if(counter === boardSize) return true;

        for (let i = 0; i < 8; i++) {
            let nextX = curX + this.move_x[i];
            let nextY = curY + this.move_y[i];
            
            if(this.isSafe(nextX,nextY,board)){
                board[nextX][nextY] = counter
                if(this.tour(board,nextX,nextY,counter+1)){
                    return true;
                }

                board[nextX][nextY] = -1
            }
        }
        return false
    }

    isSafe(x:number, y:number, board:number[][]){
        const n = board.length;
        if (x >= 0 && y >= 0 && x < n && y < n && board[x][y] === -1){
            return true
        }
        return false
    }

    getNewBoard(size:number){
        const board = []
        for (let i = 0; i < size; i++) {
            board.push(Array(size).fill(-1));
        }
        return board;
    }


    getTrace(board:number[][]){
        const trace:traceType = []
        const size = board.length
        const total = size*size;

        const getPosition = (board:number[][],size:number, target:number):[number,number]=>{
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    if (board[i][j] === target){
                        return [j, i]
                    }
                }
            }
            return [0,0]
        }

        for (let i = 0; i < total; i++) {
            const path = getPosition(board,size,i)
            trace.push(path)
        }
        return trace
    }


}

const knightTour = new KnightTour();
export {knightTour}

