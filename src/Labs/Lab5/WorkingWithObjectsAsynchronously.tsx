import { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithObjectsAsynchronously() {
    const [assignment, setAssignment] = useState<any>({});

    const fetchAssignment = async () => {
        const data = await client.fetchAssignment();
        setAssignment(data);
    };

    const updateTitle = async () => {
        const updated = await client.updateTitle(assignment.title);
        setAssignment(updated);
    };

    const updateCompleted = async (completed: boolean) => {
        const updated = await client.updateAssignmentCompleted(completed);
        setAssignment(updated);
    };

    useEffect(() => {
        fetchAssignment();
    }, []);

    return (
        <div id="wd-asynchronous-objects">
            <h3>Working with Objects Asynchronously</h3>
            <h4>Assignment</h4>

            <label className="form-label">Title</label>
            <input
                value={assignment.title || ""}
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                className="form-control mb-2"
            />
            <button onClick={updateTitle} className="btn btn-primary mb-3">
                Update Title
            </button>

            <label className="form-label">Description</label>
            <textarea
                value={assignment.description || ""}
                onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
                className="form-control mb-3"
            />

            <label className="form-label">Due Date</label>
            <input
                type="date"
                value={assignment.due || ""}
                onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                className="form-control mb-3"
            />

            <div className="form-check form-switch mb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={assignment.completed || false}
                    onChange={(e) => updateCompleted(e.target.checked)}
                />
                <label className="form-check-label">Completed</label>
            </div>

            <pre>{JSON.stringify(assignment, null, 2)}</pre>
        </div>
    );
}
