import useWindowDimensions from '../functions.js'
import Life from './life.js';
import { cell_len } from "../constants.js";
import InfoBox from './infobox.js';
import { useState } from 'react';

const Grid = () => {

    let {width, height} = useWindowDimensions();

    let hboxes = Math.floor(width/cell_len)- 5;
    let mobilePhone = (height > width && width < 700)? true: false;
    let mobile = hboxes <= 24? true: false;
    let vboxes = Math.floor(height/cell_len) - 15;
   
    let lheight = Math.ceil(vboxes/3);
    let lwidth = hboxes > 23 ? Math.ceil((hboxes - 23)/2) + 1: 1;

    let liveCells = [];

    let pulsar = [[], [], [], []];

    let ashish = (grid) => {

        // fills the boxes that create ASHISH
        let letters = [
            [[0, 1, 2, 3, 4], [0, 2], [0, 1, 2, 3, 4]],
            [[0, 1, 2, 4], [0, 2, 4], [0, 2, 3, 4]],
            [[0, 1, 2, 3, 4], [2], [0, 1, 2, 3, 4]],
            [[0, 4], [0, 1, 2, 3, 4], [0, 4]],
            [[0, 1, 2, 4], [0, 2, 4], [0, 2, 3, 4]],
            [[0, 1, 2, 3, 4], [2], [0, 1, 2, 3, 4]]
        ];

        let x = -1;
        let r = -1;

        let z = 0;
        let m = 1;

        for(let i = lwidth - 1; i < hboxes+10; i++) {

            let ar = [];
            if(x === 2){
                x = -1;
                ar = [[],[],[]];
                z++;
            }
            else {
                x++;
                if(z <= 5) {
                    ar = letters[z];
                }else {
                    ar = [[], [], []];
                }
            }

            if(x === 0 || x == -1){
                r = 0;
            }
            else {
                r++;
            }

            // generating letters
            for(let j = lheight - 1; j < 2*lheight; j++){

                // generating a letter
                if((ar[r]).includes(j - lheight + 1)) {
                    if(!mobile && grid[j][i]) {
                        grid[j][i] = [1, grid[j][i][1]];
                        liveCells.push([j, i]);
                    }
                    else {
                        let center = Math.floor(hboxes/2) - 1;
                        if(grid[6*z+j-12][center + r]) {
                            grid[6*z+j-12][center + r] = [1, grid[6*z+j-12][center + r][1]];
                            liveCells.push([6*z+j-12, center + r]);
                        }
                    }
                }
            }
        }

    }

    let c = 0;
    let newgrid = [];

    for(let i = 0; i < vboxes; i++) {
        let row = [];
        for(let j = 0; j < hboxes; j++) {
            row.push([0, c]);
            c++;
        }
        newgrid.push(row);
    }
    ashish(newgrid);

    return (
        <div className = "container">
            <Life initial = {newgrid}></Life>
            {/* <footer>
                <p>Built with ReactJS, HTML, CSS by Ashish Selvaraj in 2021</p>
            </footer> */}
        </div>
    );
}
 
export default Grid;