
function WIP() {
    return (
        <main className="mainContent">
            <div className='bannerContent'>
                <img src="./construction.png" alt="construction" className="constructionImg"/>
            </div>
            <h2>Construction in progress...</h2>
            <div className="resumeBox">
                <div className="resumeTitle">
                    <h3>Work Experience</h3>
                </div>
                <div className="resumeContent">
                    <p>Software Engineer (Backend - Data Ingestion) Intern @ theScore [Jan 2023 - Apr 2023]</p>
                    <p>Software Engineer (Backend - APIs) Intern @ Loblaw [Jan 2022 - Apr 2022]</p>
                    <p>DevOps Intern @ Thomson Reuters [May 2021 - Aug 2021]</p>
                </div>
            </div>
            <div className="resumeBox">
                <div className="resumeTitle">
                    <h3>Education</h3>
                </div>
                <div className="resumeContent">
                    <p>Double Degree [Sep 2020 - Current]</p>
                    <ul>
                        <li>Bachelor of Computer Science @ University of Waterloo</li>
                        <li>Bachelor of Business Administration @ Wilfrid Laurier University</li>
                    </ul>
                </div>
            </div>
            <div className="resumeBox">
                <div className="resumeTitle">
                    <h3>Projects</h3>
                </div>
                <div className="resumeContent">
                    <p><a href="https://apps.apple.com/app/not-evil-sudoku/id1614071642">Not Evil Sudoku</a>- a clean, minimalist sudoku app with 75,000+ installs on the App Store.</p>
                </div>
            </div>
            <div className="resumeBox">
                <div className="resumeTitle">
                    <h3><a href="https://ashishselvaraj.com/blog/">Blog</a></h3>
                </div>
                <div className="resumeContent">
                    {/* <p>gi</p> */}
                </div>
            </div>
        </main>
    );
}

export default WIP;