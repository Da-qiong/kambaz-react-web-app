import { Button, Col, Row } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { updateAssignment } from './reducer';
import { useState } from 'react';

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  course: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.find((a: Assignment) => a._id === aid);

  const [formData, setFormData] = useState<Assignment>({
    _id: assignment?._id || '',
    title: assignment?.title || 'New Assignment',
    description: assignment?.description || '',
    points: assignment?.points || 100,
    dueDate: assignment?.dueDate || '2025-05-13',
    availableFrom: assignment?.availableFrom || '2025-05-06',
    availableUntil: assignment?.availableUntil || '2025-05-20',
    course: cid || '',
  });

  const handleSave = () => {
    const updatedAssignment = { ...assignment, ...formData };
    dispatch(updateAssignment(updatedAssignment));
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div className="ms-4" id="wd-assignments-editor">
      <Row>
        <label htmlFor="wd-name">Assignment Name</label>
      </Row>
      <Row>
        <input
          className="form-control"
          type="text"
          id="wd-name"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </Row>
      <Row className="mt-3">
        <textarea
          className="form-control"
          id="wd-description"
          rows={6}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" htmlFor="wd-points">
            Points
          </label>
        </Col>
        <Col>
          <input
            className="form-control"
            type="number"
            id="wd-points"
            value={formData.points}
            onChange={(e) => setFormData({ ...formData, points: parseInt(e.target.value) })}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" htmlFor="wd-due-date">
            Due Date
          </label>
        </Col>
        <Col>
          <input
            className="form-control"
            type="date"
            id="wd-due-date"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" htmlFor="wd-available-from">
            Available From
          </label>
        </Col>
        <Col>
          <input
            className="form-control"
            type="date"
            id="wd-available-from"
            value={formData.availableFrom}
            onChange={(e) => setFormData({ ...formData, availableFrom: e.target.value })}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" htmlFor="wd-available-until">
            Available Until
          </label>
        </Col>
        <Col>
          <input
            className="form-control"
            type="date"
            id="wd-available-until"
            value={formData.availableUntil}
            onChange={(e) => setFormData({ ...formData, availableUntil: e.target.value })}
          />
        </Col>
      </Row>
      <hr />
      <div className="d-flex flex-row justify-content-end">
        <Button
          variant="secondary"
          className="ms-2 mb-3"
          onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}
        >
          Cancel
        </Button>
        <Button variant="danger" className="ms-2 mb-3" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
