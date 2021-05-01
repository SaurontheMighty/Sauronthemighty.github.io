import {showMore, hide} from "./fun.js";
import Post from "./Post.js";

const Main = () => {

    const posts = require('./posts.js');

    return (
        <section className="main-card">
            <p className="section-header">Posts</p>
            <section>
                <input type="text" placeholder="Search by Title or Technology" className="search-card" id="search-bar"></input><button
                aria-label="Search all the Posts on the Page" type="submit" className="search-button" id="search-button"
                onClick="searchButton()">&#128269;</button>
            </section>
            <section className="about-card hidden" id="test">
                <p>Sorry, no posts were found!</p>
            </section>
            {posts.map((post) => (
                <Post post={post} />
            ))}
        </section>
    );
}
 
export default Main;