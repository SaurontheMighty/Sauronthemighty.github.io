import { useState } from "react";
import useWindowDimensions from './functions.js'

const Post = ({post, setSearch}) => {

    let {width, height} = useWindowDimensions();
    const isMobile = width < 760;
    const isTiny = width < 350;
    const [current, setCurrent] = useState(1);
    const [show, setShow] = useState(false);

    let len = 0;
    if((post.slideshow)) {
        len = (post.slideshow).length;
    }

    const image = isMobile && post.uid === "this"? 'images/newmobile.png':post.thumbnail;

    return (
        <section className="post" key ={post.key}>
            <section className="postcol">
                <article>
                    <h4>{post.title}</h4>
                    <p>{post.description}</p>
                    {!show && <p className="readmore" id={post.uid+"readmore"} onClick={() => setShow(true)}>Read</p>}
                </article>
                <section>
                    <p><img src={image} className="postpicapp overflow" alt="Post Thumbnail" /></p>
                </section>
            </section>
            {show && <article id={post.uid}>
                {post.body1 && <p className="more">{post.body1}</p>}
                {post.slideshow && <div className="slideshow-container">
                        {(post.slideshow).map((image) => (
                            <div key={image.key} className={image.key == current? "":"hidden"} >
                                <p>{image.caption}</p>
                                <div style={{
                                    textAlign: 'center'
                                    }}>
                                    <img src={"images/"+image.image} className="slide-img" style={{
                                    height: `${0.5*height}px`
                                }} alt={image.caption} />
                                </div>
                                <br />
                            </div>
                        ))}
                        <a className="prev" onClick={() => {
                            if(current != 1){
                                setCurrent(current - 1);
                            }
                            else{
                                setCurrent(len);
                            }}}>&#10094;</a>
                        <a className="next" onClick={() => {
                            if(current != len){
                                setCurrent(current + 1);
                            }
                            else{
                                setCurrent(1);
                            }
                        }}>&#10095;</a>
                        <section style={{textAlign:"center"}}>
                            {(post.slideshow).map((image) => (
                                <span className={image.key == current ? "dot active-dot" : "dot"} onClick = {() => {setCurrent(image.key);}}></span>
                            ))}
                        </section>
                    </div>
                }
                <p className="more">{post.body2}</p>
                {post.links && (post.links).map((link) => (
                <p class="more"><a id='more' href={link.link} target="_blank" rel="noopener">{link.caption}</a></p>))}
                {show && <p onClick={() => setShow(false)} style={{fontSize: "smaller"}} className="readmore" id={post.uid+"readmore"}>Show Less</p>}
            </article> }
            <ul className="tags">
                {(post.tags).map((tag) =>(
                    <li onClick={() => setSearch(tag)}>{tag}</li>
                ))}
            </ul>
        </section>
    );
}
 
export default Post;