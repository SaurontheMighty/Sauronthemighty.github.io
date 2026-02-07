function Simple() {
    return (
        <body>
            <main class="">
            <div className="title">
                <h1>Ashish Selvaraj</h1>
            </div>
            <div className="main-text">
                <p>I enjoy building software. Built my first website back in 2014 after discovering HTML and have been hooked ever since. To me the beauty of software is its meritocracy, a single person with a laptop can challenge software giants and win.</p>
                <b>Present</b>
                <p>I'm building <a href="https://appsidekit.com">Sidekit</a> full-time, backed by Y Combinator. Sidekit is a backend for your app in one package with lightweight analytics, feature flags, version gating and more.</p>
                <p>You can find my resume <a href="/resume.pdf">here</a> and my x (twitter) <a href="https://twitter.com/asheeeeeshh">here</a>.</p>
                <b>Past</b>
                <p>Graduated with a double degree in Computer Science and Business from the University of Waterloo in August 2025 after 5 years and 5 internships (the Waterloo classic).</p>
                <p>Professionally, I like working on distributed systems. Most recently I worked on building <a href="https://docs.databricks.com/aws/en/dlt-ref/dlt-sql-ref-create-view">persisted views</a> for Delta Live Tables, <strong>Databricks</strong>' declarative ETL pipeline product.</p>
                <p>Before that, I built an end-to-end testing engine for Azure Landing Zone based services at <strong>Microsoft</strong> and several other projects in the realm of cloud and APIs at <strong>Thomson Reuters</strong>, <strong>Loblaw Companies</strong> and <strong>theScore</strong>.</p>
                <b>Projects</b>
                <ul className="project-list">
                    <li><span className="status-live" title="Live">●</span><span className="project-year">2026</span><a href="https://landingleaderboard.com">Landing Leaderboard</a> — Elo rankings for landing pages</li>
                    <li><span className="status-live" title="Live">●</span><span className="project-year">2025</span><a href="https://appsidekit.com">Sidekit</a> — Backend for your app in one package (YC W26)</li>
                    <li><span className="status-live" title="Live">●</span><span className="project-year">2025</span><a href="https://posturing.app">Posturing</a> — Posture reminders for Mac that show you a live feed of your posture</li>
                    <li><span className="status-live" title="Live">●</span><span className="project-year">2024</span>kanbanned</li>
                    <li><span className="status-live" title="Live">●</span><span className="project-year">2022</span><a href="https://notevil.io">Not Evil Sudoku</a> — Clean, minimal and joyful sudoku for iPhone</li>
                    <li><span className="status-archived" title="Archived">●</span><span className="project-year">2020</span><a href="https://addons.mozilla.org/en-US/firefox/addon/ductivitypro/">DuctivityPro</a> — Productivity extension that messes with your tabs if you spend too long on them</li>
                    <li><span className="status-archived" title="Archived">●</span><span className="project-year">2020</span><a href="https://www.introspekt.app/">Introspekt</a> — Friendly journal you can chat with [before chat interfaces where cool]</li>
                    <li><span className="status-archived" title="Archived">●</span><span className="project-year">2016</span>Bobrun — Bob runs, a 2D monster fighting adventure game</li>
                </ul>
                <p>Here's a promo video I made for Not Evil Sudoku that I'm vaguely proud of:</p>
                <video controls className="video-player">
                    <source src="NotEvilSudoku.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video><br /><br />
                <b>Writing</b>
                <ul className="post-list">
                    <li>
                        <span className="post-date-inline">2026-01-15</span>
                        <a href="https://appsidekit.com/blog/why-does-sidekit-exist">Why does Sidekit exist?</a>
                    </li>
                </ul>
            </div>

        </main>
        </body>
    );
}

export default Simple;
