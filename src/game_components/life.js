import { useEffect, useState } from "react";
import useWindowDimensions from '../functions.js';
import { cell_len } from "../constants.js";

const Life = ({initial}) => {

    let {width, height} = useWindowDimensions();
    
    let flag = false;

    let hboxes = Math.floor(width/cell_len) - 5;
    let mobile = hboxes < 23? true: false;

    let vboxes = mobile? 40: Math.floor(height/cell_len) - 15;
   
    let newgrid = [];
    
    const [grid, setGrid] = useState(initial);


    const [k, setK] = useState(0);

    useEffect(() => {
        let k =0;
        const interval = setInterval(() => {

            newgrid = [...grid];

            setTimeout(() => {
                for(let x = 0; x < vboxes; x++) {

                    for(let y = 0; y < hboxes; y++) {
                        let count = 0; // number of live cells around each live cell
    
                        // horizontal 
                        if(y > 0 && grid[x][y - 1][0] > 0) {
                            count++;
                        }
                        if(y < hboxes - 1 && grid[x][y + 1][0] > 0) {
                            count++;
                        }
                        // vertical
                        if(x > 0 && grid[x - 1][y][0] > 0) {
                            count++;
                        }
                        if(x < vboxes - 1 && grid[x + 1][y][0] > 0) {
                            count++;
                        }
                        // diagonal
                        // top left
                        if(x > 0 && y > 0 && grid[x - 1][y - 1][0] > 0) {
                            count++;
                        }
                        // bottom left
                        if(y > 0 && x < vboxes - 1 && grid[x + 1][y - 1][0] > 0) {
                            count++;
                        }
                        // top right
                        if(x > 0 && y < hboxes - 1 && grid[x - 1][y + 1][0] > 0) {
                            count++;
                        }
                        // bottom right
                        if(x < vboxes - 1 && y < hboxes - 1 && grid[x + 1][y + 1][0] > 0) {
                            count++;
                        }
    
                        if(newgrid[x][y][0] > 0 && (count > 3 || count < 2)){
                            newgrid[x][y] = [0, newgrid[x][y][1]];
                        }
                        else if(newgrid[x][y][0] == 0 && count == 3){
                            newgrid[x][y] = [1, newgrid[x][y][1]];
                        }
                    }
                }
    
                setGrid(newgrid);
                k++;
    
                if(k == 500){
                    // posts();
                    clearInterval(interval);
                }
            }, 1001);

        }, 100);
      
        return () => {
          console.log(`clearing interval`);
          clearInterval(interval);
        };
    }, []);

    // var x = setInterval(() => {

    //     console.log(k);

    //     newgrid = [...grid];

    //     newgrid[0][k] = [1, newgrid[0][k][1]];
        
    //     setGrid(newgrid);
    //     setK(k + 1);

    //     if(k >= hboxes - 1){
    //         console.log("Nope");
    //         clearInterval(x);
    //     }
    // }, 1000);

    return (
        <div className="grid">
            {grid.map((row) => (
                <div className = "row" key = {row}>
                    {row.map((cell) => (
                        <div className={cell[0] > 0 ? "box life" : "box"} key = {cell[1]}></div>
                    ))}
                </div>
            ))}
        </div>
    );
}
 
export default Life;

// function componentDidMount() {
//     this.interval = setInterval(() => this.setState({ initial: [] }), 1000);
// }
// function componentWillUnmount() {
//     clearInterval(this.interval);
// }