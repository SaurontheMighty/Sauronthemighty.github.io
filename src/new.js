function Simple() {
    return (
        <main class="">
            <div className="title">
                <h1>Ashish Selvaraj</h1>
            </div>
            <div className="main-text">
                <p>I enjoy building software. Built my first website back in 2014 after discovering HTML and have been hooked ever since. My creations over the years (in chronological order):</p>
                <ul>
                    <li>👾 2D adventure pixel art game called Bobrun</li>
                    <li>🕒 Productivity extension that let you set how long you'd spend on a website and then flipped the page to hold you to it</li>   
                    <li>📕 Journaling app where users scored their days from 1-1,000 and could write about their day (Intropsekt)</li>
                    <li>🔢 Minimalist sudoku app that somehow crossed 150,000 installs (<a href="https://notevil.io">Not Evil Sudoku</a>)</li>
                </ul>
                <p>...and of course hundreds of iterations of this website: ashishselvaraj.com. Out of all the possible things I could build for my personal portfolio, a plain text site felt the most fitting. In a way it describes who I would like to be as a human: much substance, little fluff.</p>
                <p>Graduated with a double degree in Computer Science and Business from the University of Waterloo in August 2025 🎉</p>
                <p>Professionally, I like working on distributed systems, most recently I worked on building <a href="https://docs.databricks.com/aws/en/dlt-ref/dlt-sql-ref-create-view">persisted views</a> for Delta Live Tables, <strong>Databricks</strong>' declarative ETL pipeline product.</p>
                <p>Before that, I built an end-to-end testing engine for Azure Landing Zone based services at <strong>Microsoft</strong>.</p>
                <p>Large amounts of my time are spent writing, dreaming, hitting tab and responding to emails as the proprietor of a mildly popular sudoku app.</p>
                <p>You can find my resume <a href="/resume.pdf">here</a>. I open my <a href="https://twitter.com/selvarajashish">x (twitter)</a> every few months.</p>
                <p>Here's a promo video I made for Not Evil Sudoku that I'm vaguely proud of:</p>
            </div>
            <video controls className="video-player">
                <source src="NotEvilSudoku.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </main>
    );
}

export default Simple;
