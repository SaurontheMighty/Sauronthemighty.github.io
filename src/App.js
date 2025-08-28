import './App.css';
import Globe from 'react-globe.gl';
import { useState, useEffect, useRef } from 'react';
import useWindowDimensions from './windowDimensions';

function App() {
  const globeEl = useRef();
  const { height, width } = useWindowDimensions();
  const [arcsData, setArcsData] = useState([]);

  const allData = [
    {
      startLat: 14.822940,
      startLng: 74.143551,
      endLat: 17.431472, 
      endLng: 78.460228,
      color: 'green'
    },
    {
      startLat: 17.431472,
      startLng: 78.460228,
      endLat: 34.067443,
      endLng: -118.355252,
      color: 'green'
    },
    {
      startLat: 34.067443,
      startLng: -118.355252,
      endLat: 19.043828,
      endLng: 72.868181,
      color: 'green'
    },
    {
      startLat: 19.043828,
      startLng: 72.868181,
      endLat: 43.587720,
      endLng: -79.641845,
      color: 'green'
    },
    {
      startLat: 43.587720,
      startLng: -79.641845,
      endLat: 43.472359,
      endLng: -80.541428,
      color: 'green'
    }
  ];

  useEffect(() => {
    // Auto-rotate
    // globeEl.current.controls().
  }, []);

  return (
    <div className="App">
      <main>
        <section className='content'>
          <section className='globe'>
            <Globe
              pointOfView={{lat: 14, lng: 74, altitude: 2}}
              ref={globeEl}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              arcsData={arcsData}
              arcColor={'color'}
              arcDashLength={3}
              arcDashGap={3}
              arcDashAnimateTime={0}
              arcStroke={1}
              width={width*0.65}
              height={0.9*height}
            />
            <div className='globe-controls' style={{height: 0.1*height}}>
              <button onClick={async () => {
                for(let i = 0; i < allData.length; i++) {
                  // timeout to stagger the animation
                  console.log(allData[i]);
                  setTimeout(() => {
                    setArcsData(allData.slice(0, i));
                    globeEl.current.pointOfView({lat: allData[i].startLat, lng: allData[i].startLng, altitude: 2});
                  }, 2000*i);
                }
              }}> Play </button>
            </div>
          </section>
          <section className='data-panel' style={{width: 0.35*width}}>
            <h1 className='ashish'>Ashish Selvaraj</h1>
            <div className='profile-element'>
              <p>Software Engineer and creator of a mildly popular sudoku app.</p>
            </div>
            <div className='profile-element'>
              <h2>Work Experience</h2>
              <ul>
                <li className='experience'>SWE Intern (Backend - Elixir) at <a href='https://www.thescore.com'>theScore</a> (2023)</li>
                <li className='experience'>SWE Intern (Backend - Java) at <a href='https://www.loblaw.ca/'>Loblaw</a> (2022)</li>
                <li className='experience'>DevOps Intern at <a href='https://www.thomsonreuters.com/en.html'>Thomson Reuters</a> (2021)</li>
              </ul>
            </div>
            <div className='profile-element'>
              <h2>Education</h2>
              <ul>
                <li className='education'>Bachelors of Computer Science, University of Waterloo</li>
                <li className='education'>Bachelors of Business Administration, Wilfrid Laurier University</li>
              </ul>
            </div>
            <div className='profile-element'>
              <button className='button'>Blog</button>
              <button className='button'>Resume</button>
            </div>
          </section>
        </section>
        <div class="paperOverlay"></div>
      </main>
    </div>
  );
}

export default App;
