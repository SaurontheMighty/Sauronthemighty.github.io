import { useRef, useState } from "react";
import Grid from "./game_components/grid"
import InfoBox from "./game_components/infobox"
import useWindowDimensions from './functions.js'
import About from "./About"
import Aside from "./Aside"
import Main from "./Main";
import Footer from "./Footer";

const Home = () => {

    const headerEl = useRef(null);
    const mainEl = useRef(null);

    const [showPosts, setShow] = useState(false);
    
    const [trup, setTrup] = useState(0);

    let {width, height} = useWindowDimensions();
    let mobilePhone = (height > width && width < 700)? true: false;

    const [hide, clickHide] = useState(mobilePhone? true: false);

    if(mainEl.current && headerEl.current) {
        let mainTop = mainEl.current.getBoundingClientRect().top;
        let headerBottom = headerEl.current.getBoundingClientRect().bottom;

        if(trup == 0) {
            setTrup(mainTop - headerBottom - 5);
        }
    }

    setTimeout(() => {
        if(!showPosts) {
            clickHide(true);
            setShow(true);
        }
    }, 3000);

    return (
        <div>
            <header ref={headerEl} style = {showPosts? {
                background: 'linear-gradient(90deg, rgba(252,177,124,0.85), rgba(253,144,153,0.85))'
            }:{}}>
                <h1>Ashish Selvaraj</h1>
            </header>
            <Grid></Grid>
            {showPosts? <main ref={mainEl} style={{
                position: 'absolute',
                transform: `translateY(${-(trup)}px)`,
                transition: 'transform 4s'
            }}>
                <About />
                <Main />
                <Aside />
            </main>:<main ref={mainEl}>
                <About />
                <Main />
                <Aside />
            </main>}
            {/* <Footer /> */}
            <div className="gutter" style = {mobilePhone? 
            {
                top: height - 60 + 'px',
                height: 40+'px'
            } : {
                    top: height - 80 + 'px'
                }}>
                {hide || mobilePhone? <p></p> : <InfoBox style = {mobilePhone? {
                    height: 30 + 'px'
                } : {}} title = "John Conway's Game of Life" extended = "The Game of Life is a Mathematical 'zero player game' created by John Conway. Here, I have created a simulation of the Game of Life constrained by a grid the size of your screen. The game is meant to loosely represent life and here a cell is 'alive' if it's white and 'dead' otherwise. If a dead cell is surrounded by three living ones it comes to life and a living cell dies if it is surrounded by less than two or more than three living cells."></InfoBox> }
                {hide? <p></p>: <InfoBox style = {mobilePhone? {
                    height: 30 + 'px'
                } : {}} title = "Experience" extended ={"Studying and living across\n three countries in the past nineteen years has made me highly adaptable and open to new experiences and ideas. \n\nCurrently working as a Software Engineer Intern @ Loblaw. Interested in offers for a Winter 2023 Co-op."}></InfoBox> } 
                {<div className="infos" style = {mobilePhone? {
                    height: 30+'px',
                    width: 30+'px'
                }: {
                    width: 50+'px'
                }} onClick = {() => {
                        clickHide(!hide);
                        }}>
                    <div className = "infosTitle" >{hide? "🤫":"😀"}</div>
                </div>
                }
            </div>
            <Footer />
        </div>
    );
}
 
export default Home;