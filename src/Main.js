import { useState, useEffect } from "react";
import Post from "./Post.js";

const Main = () => {

    const reset = require('./posts.js');
    const [posts, setPosts] = useState(require('./posts.js'));
    const [search, setSearch] = useState("");
    const [noPost, setNoPost] = useState(false);
    const [back, setBack] = useState(false);

    const searchPosts = () => {
        //e.preventDefault();

        if(search !== ''){
            setNoPost(false);

            // let new_posts = reset.filter((post) => {
            //     return ((post.tags).map((tag) => tag.toLowerCase()).includes(search.toLowerCase()));
            // });

            let new_posts = reset.filter((post) => {
                let flag = 0;
                (post.tags).map((tag) => {
                    if(tag.toLowerCase().includes(search.toLowerCase())){
                        flag = 1;
                    }
                    if(search.toLowerCase().includes(tag.toLowerCase())){
                        flag = 1;
                    };
                })

                if(search.toLowerCase().includes(post.title.toLowerCase())){
                    flag = 1;
                }
                if(post.title.toLowerCase().includes(search.toLowerCase())){
                    flag = 1;
                }

                if(flag === 1){
                    return true;
                }
                else{
                    return false;
                }
            });

            console.log(search);
            console.log(new_posts);

            if(new_posts.length === 0){
                setNoPost(true);
                console.log(noPost);
            }
            setPosts(new_posts);
            setBack(true);
        }
    }

    useEffect(() => {
        searchPosts();
    }, [search])

    return (
        <section className="main-card">
            <p className="section-header">Posts</p>
            <section>
                <form onSubmit={searchPosts}>
                    <input 
                    type="text" 
                    placeholder="Search by Title or Technology" 
                    className="search-card"
                    value={search}
                    onChange = {(e) => setSearch(e.target.value)}></input><button
                    aria-label="Search all the Posts on the Page" type="submit" className="search-button" id="search-button">&#128269;</button>
                </form>
            </section>
            <section className="search-tags">
                <li onClick={(e) => setSearch("website")}>Websites</li>
                <li onClick={(e) => setSearch("ios app")}>iOS</li>
                <li onClick={(e) => setSearch("android app")}>Android</li>
                <li onClick={(e) => setSearch("extension")}>Browser Extensions</li>
                <li onClick={(e) => setSearch("React")}>React</li>
                <li onClick={(e) => setSearch("Node.js")}>Node.js</li>
                <li onClick={(e) => setSearch("JavaScript")}>JavaScript</li>
                <li onClick={(e) => setSearch("Python")}>Python</li>
                <li onClick={(e) => setSearch("Java")}>Java</li>
                <li onClick={(e) => setSearch("Cloud")}>Cloud</li>
            </section>
            <br />
            {noPost && 
            <div>
                <section className="about-card" id="test">
                    <p>Sorry, no posts were found!</p>
                </section>
            </div>}
            {posts.map((post) => (
                <Post post={post} setSearch = {setSearch} />
            ))}
            {back && <button type="submit" className="back-button" id="back-button" onClick={() => {
                setBack(false);
                setPosts(reset);
                setSearch("");
                }}>Back</button>}
        </section>
    );
}
 
export default Main;