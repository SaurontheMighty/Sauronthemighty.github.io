import { Link } from 'react-router-dom';

function Simple() {
    return (
        <body>
            <main class="">
            <div className="title">
                <h1>Ashish Selvaraj</h1>
            </div>
            <div className="main-text">
                <p className="nav-links"><Link to="/writing">Writing</Link></p>
                <p>I enjoy building software. Built my first website back in 2014 after discovering HTML and have been hooked ever since. To me the beauty of software is its meritocracy, a single person with a laptop can challenge software giants and win. My past projects have been mostly for myself and my friends, including a 2D adventure RPG, a productivity extension that messed with your tabs if you spent too long on them, a journaling app and Not Evil Sudoku.</p>
                <p>Here's a promo video I made for Not Evil Sudoku back in 2022 that I'm vaguely proud of:</p>
                <video controls className="video-player">
                    <source src="NotEvilSudoku.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video><br></br><br></br>
                <b>Present</b>
                <p>After 5 years of non-stop work or study, I'm taking a break to have fun with software again.</p>
                <ul>
                    <li><a href="https://appsidekit.com">Sidekit</a>: A backend for your app in one package with lightweight analytics, feature flags, version gating and more.</li>
                    <li><a href="https://posturing.app">Posturing</a>: Posture reminders for Mac that show you a live feed of your posture every X minutes</li>
                    <li><a href="https://notevil.io">Not Evil Sudoku</a>: More sudoku updates!</li>
                </ul>
                <p>You can find my resume <a href="/resume.pdf">here</a>. I open my <a href="https://twitter.com/asheeeeeshh">x (twitter)</a> every few months.</p>
                <b>Past</b>
                <p>Graduated with a double degree in Computer Science and Business from the University of Waterloo in August 2025 🎉 after 5 years and 5 internships (the Waterloo classic).</p>
                <p>Professionally, I like working on distributed systems, most recently I worked on building <a href="https://docs.databricks.com/aws/en/dlt-ref/dlt-sql-ref-create-view">persisted views</a> for Delta Live Tables, <strong>Databricks</strong>' declarative ETL pipeline product.</p>
                <p>Before that, I built an end-to-end testing engine for Azure Landing Zone based services at <strong>Microsoft</strong> and several other projects generally in the realm of cloud and APIs at Thomson Reuters, Loblaw Companies and theScore.</p>
            </div>

        </main>
        </body>
    );
}

export default Simple;
