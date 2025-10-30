function Simple() {
    return (
        <body>
            <main class="">
            <div className="title">
                <h1>Ashish Selvaraj</h1>
            </div>
            <div className="main-text">
                <p>I enjoy building software. Built my first website back in 2014 after discovering HTML and have been hooked ever since. To me the beauty of software is its meritocracy, a single person with a laptop can challenge software giants and win. Most of my projects are built for myself, here are a few of them in chronological order:</p>
                <ul>
                    <li>2D adventure pixel art game called Bobrun</li>
                    <li>Productivity extension that let you set how long you'd spend on a website and then flipped the page to hold you to it</li>   
                    <li>Journaling app where users scored their days from 1-1,000 and could write about their day (Intropsekt)</li>
                    <li>Minimalist sudoku app that somehow crossed 180,000 installs (<a href="https://notevil.io">Not Evil Sudoku</a>)</li>
                </ul>
                <p>...and of course hundreds of iterations of this website: ashishselvaraj.com. Out of all the possible things I could build for my personal portfolio, a plain text site felt the most fitting. In a way it describes who I would like to be as a human: much substance, little fluff.</p>
                <b>Past</b>
                <p>Graduated with a double degree in Computer Science and Business from the University of Waterloo in August 2025 🎉 after 5 years and 5 internships (the Waterloo classic).</p>
                <p>Professionally, I like working on distributed systems, most recently I worked on building <a href="https://docs.databricks.com/aws/en/dlt-ref/dlt-sql-ref-create-view">persisted views</a> for Delta Live Tables, <strong>Databricks</strong>' declarative ETL pipeline product.</p>
                <p>Before that, I built an end-to-end testing engine for Azure Landing Zone based services at <strong>Microsoft</strong> and several other projects generally in the realm of cloud and APIs at Thomson Reuters, Loblaw Companies and theScore.</p>
                <b>Present</b>
                <p>Large amounts of my time are spent writing, dreaming, hitting tab and responding to emails as the proprietor of a mildly popular sudoku app. Not Evil Sudoku scratches my itch to do more than just code, I get to design, make videos, talk to customers and so much more.</p>
                <p>You can find my resume <a href="/resume.pdf">here</a>. I open my <a href="https://twitter.com/selvarajashish">x (twitter)</a> every few months. Here's a promo video I made for Not Evil Sudoku back in 2022 that I'm vaguely proud of:</p>
            </div>
            <video controls className="video-player">
                <source src="NotEvilSudoku.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </main>
        </body>
    );
}

export default Simple;
