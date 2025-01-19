export default function Modules() {
    return (
    <div>
        <button>Collapse All</button>
        <button>View Progress</button>
        <select id="wd-select-publish">
            <option selected value="PUBLISHALL">
            Publish All
            </option>
            <option value="PUBLISHONE">Publish One</option>
        </select>
      <button>+ Module</button>
        <ul id="wd-modules">
            <li className="wd-module">
                <div className="wd-title"><strong>Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</strong></div>
                <ul className="wd-lessons">
                    <li className="wd-lesson">
                        <span className="wd-title"><strong>LEARNING OBJECTIVES</strong></span>
                        <ul className="wd-content">
                            <li className="wd-content-item"><strong>Introduction to the course</strong></li>
                            <li className="wd-content-item"><strong>Learn what is Web Development</strong></li>
                        </ul>

                        <span className="wd-title"><strong>READING</strong></span>
                        <ul className="wd-content">
                            <li className="wd-content-item"><strong>Full Stack Developer - Chapter 1 - Introduction</strong></li>
                            <li className="wd-content-item"><strong>Full Stack Developer - Chapter 2 - Creating User</strong></li>
                        </ul>

                        <span className="wd-title"><strong>SLIDES</strong></span>
                        <ul className="wd-content">
                            <li className="wd-content-item"><strong>Introduction to Web Development</strong></li>
                            <li className="wd-content-item"><strong>Creating an HTTP server with Node.js</strong></li>
                            <li className="wd-content-item"><strong>Creating a React Application</strong></li>
                        </ul>

            </li>
        </ul>
        </li>
            <li className="wd-module">
                <div className="wd-title"><strong>Week 1, Lecture 2 - Formatting User Interfaces with HTML</strong></div>
            </li>
            <li className="wd-module">
                <div className="wd-title"><strong>Week 2</strong></div>
            </li>
        </ul>
    </div>
);}