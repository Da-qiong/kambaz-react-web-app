import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const [module, setModule] = useState({
        id: "CS5610",
        name: "Full Stack Development",
        description: "Learn React and Node",
        course: "Web Dev 2025",
    });

    return (
        <div>
            <h3>Working With Objects</h3>

            <h4>Get Assignment</h4>
            <a href={`${REMOTE_SERVER}/lab5/assignment`} className="btn btn-primary">
                Get Assignment
            </a>

            <h4>Get Assignment Title</h4>
            <a href={`${REMOTE_SERVER}/lab5/assignment/title`} className="btn btn-secondary">
                Get Title
            </a>

            <h4>Update Assignment Title</h4>
            <input
                value={assignment.title}
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                className="form-control mb-2"
            />
            <a
                className="btn btn-warning"
                href={`${REMOTE_SERVER}/lab5/assignment/title/${assignment.title}`}
            >
                Update Title
            </a>

            <h4>Update Score & Completed</h4>
            <input
                type="number"
                value={assignment.score}
                onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
                className="form-control mb-2"
            />
            <a
                className="btn btn-success me-2"
                href={`${REMOTE_SERVER}/lab5/assignment/score/${assignment.score}`}
            >
                Update Score
            </a>
            <div className="form-check my-2">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={assignment.completed}
                    onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
                />
                <label className="form-check-label">Completed</label>
            </div>
            <a
                className="btn btn-success"
                href={`${REMOTE_SERVER}/lab5/assignment/completed/${assignment.completed}`}
            >
                Update Completed
            </a>

            <hr />

            <h4>Get Module</h4>
            <a href={`${REMOTE_SERVER}/lab5/module`} className="btn btn-info me-2">
                Get Module
            </a>

            <h4>Update Module Name</h4>
            <input
                className="form-control mb-2"
                value={module.name}
                onChange={(e) => setModule({ ...module, name: e.target.value })}
            />
            <a
                href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}
                className="btn btn-dark me-2"
            >
                Update Module Name
            </a>

            <h4>Update Module Description</h4>
            <input
                className="form-control mb-2"
                value={module.description}
                onChange={(e) => setModule({ ...module, description: e.target.value })}
            />
            <a
                href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}
                className="btn btn-dark"
            >
                Update Module Description
            </a>
        </div>
    );
}
