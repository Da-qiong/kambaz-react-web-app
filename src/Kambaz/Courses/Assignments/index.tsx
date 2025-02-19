import { Button, ListGroup } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import AssignmentControlButtons from './AssignmentControlButtons';
import AssignmentButtons from './AssignmentsButtons';
import { MdOutlineAssignment } from 'react-icons/md';
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div>
      <div className="d-flex flex-row">
        <div className="input-group mb-3 float-left" style={{ width: '25%' }}>
          <span className="input-group-text" id="basic-addon1">
            <IoSearch />
          </span>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <div className="ms-auto d-flex">
          <Button
            variant="secondary"
            size="lg"
            className="ms-2 mb-3"
            id="wd-add-group-btn"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: '1px' }}
            />
            Group
          </Button>
          <Button
            variant="danger"
            size="lg"
            className="ms-2 mb-3"
            id="wd-add-assignment-btn"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: '1px' }}
            />
            Assignment
          </Button>
        </div>
      </div>
      <li className="wd-assignment-list-item">
        <a href="#/Kambaz/Courses/1234/Assignments/3"
          className="wd-assignment-link" >
          A3 - JAVASCRIPT + REACT
        </a>
        <p>
          Multiple Modules | <strong>Not Available until</strong> May 20 at 12:00am | <br />
          <strong>Due</strong> May 27 at 11:59pm | 100 pts
        </p>
      </li>

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <strong>ASSIGNMENTS</strong>
            <AssignmentControlButtons />
          </div>

          <ListGroup className="rounded-0">
            {assignments
              .filter((assignment) => cid === assignment.course)
              .map((assignment) => (
                <a
                  href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex flex-row align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment color="green" className="fs-3 me-3" />
                    <div className="d-flex flex-column">
                      <strong>{assignment.title}</strong>
                      <div className="fs-6">
                        <strong className="text-danger">
                          Multiple Modules
                        </strong>{' '}
                        | <strong>Not available until</strong>{' '}
                        {assignment.available_at} | <strong>Due</strong>{' '}
                        {assignment.due_date} | {assignment.points} pts
                      </div>
                    </div>
                    <AssignmentButtons />
                  </ListGroup.Item>
                </a>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>

    </div >
  );
}
