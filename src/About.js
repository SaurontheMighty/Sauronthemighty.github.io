import avatar from "./images/avatar.png";
import github from "./images/githublogo.png";
import linkedin from "./images/linkedinlogo.png";
import hackathons from "./images/hacklogo.png";

const About = () => {
    return (
        <section className="about-card">
            <p className="section-header">About Me</p>
            <img src={avatar} className="avatar" alt="Avatar Image" />
            <section className="about-details">
                <p className="about-details-header">Passionate about writing Software<br /> and Building Projects.</p>
                <ul className="small-tags">
                    <li>Algorithms</li>
                    <li>Math</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>App Development</li>
                </ul>
                <p className="about-details-header">Favorite Books:</p>
                <p className="div"><i className="fa fa-book"></i> Lord of the Rings, Harry Potter, Redwall</p>
                <p className="about-details-header">Hobbies:</p>
                <p className="div"><i className="fa fa-chess"></i> Chess, Guitar, Skateboarding, bicycling</p>
            </section>
            <section className="links">
                <button className="about-button" onClick={() => window.open('https://github.com/SaurontheMighty/','_blank')}><img
                    className='abt-btn-img' src={github} alt="GitHub Logo" /></button>
                <button className="about-button"
                    onClick={() => window.open('https://www.linkedin.com/in/ashish-selvaraj/','_blank')}><img
                    className='abt-btn-img' src={linkedin} alt="LinkedIn Logo" /></button>
                <button className="about-button" onClick={() => window.open('https://devpost.com/yesashishs','_blank')}><img
                    className='abt-btn-img' src={hackathons} alt="Hackathons" /></button>
            </section>
      </section> 
    );
}
 
export default About;