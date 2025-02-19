<<<<<<< Updated upstream
=======
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

>>>>>>> Stashed changes
export default function Modules() {
    const { cid } = useParams();
    const modules = db.modules;
    return (
<<<<<<< Updated upstream
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
=======
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <ul id="wd-modules" className="list-group rounded-0">
                    {modules
                        .filter((module: any) => module.course === cid)
                        .map((module: any) => (
                            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                                <div className="wd-title p-3 ps-2 bg-secondary">
                                    <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
                                </div>
                                {module.lessons && (
                                    <ul className="wd-lessons list-group rounded-0">
                                        {module.lessons.map((lesson: any) => (
                                            <li className="wd-lesson list-group-item p-3 ps-1">
                                                <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                                            </li>
                                        ))}</ul>)}</li>))}</ul>
            </ul>
        </div>
    );
}
>>>>>>> Stashed changes
