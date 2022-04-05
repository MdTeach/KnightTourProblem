class KnightTour{
    move_x = [2, 1, -1, -2, -2, -1, 1, 2]
    move_y = [1, 2, 2, 1, -1, -2, -2, -1]
    
    solveKnightTour(size:number,px:number,py:number){
        const board = this.getNewBoard(size);
        const trace = []

        let counter = 1;

        // inital position is visited
        board[px][py] = 0;
        trace.push([px,py]);


 
    }

    tour(){

    }

    isSafe(x:number, y:number, board:number[][]){
        const n = board.length;
        if (x >= 0 && y >= 0 && x < n && y < n && board[x][y] === -1){
            return true
        }
        return true
    }

    getNewBoard(size:number){
        const board:number[][] = []
        for (let i = 0; i < size; i++) {
            board.push(Array(size).fill(-1));
        }
        return board;
    }
}

const getKnightTourSolution = (x_pos:number,y_pos:number, N:number) => {

    return [
        [0,1],
        [1,1],
        [1,2],
        [1,3],
    ]
}

export {getKnightTourSolution}