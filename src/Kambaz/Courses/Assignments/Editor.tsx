<<<<<<< Updated upstream
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><strong>Assignment Name</strong></label> <br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /> <br /><br />
            <textarea id="wd-description">
            The assignment is available online Submit a link to the landing page of your Web 
            application running on Netlify. The landing page should include the following: 
            Your full name and section Links to each of the lab assignments Link to the Kanbas application 
            Links to all relevant source code repositories The Kanbas application should include a link 
            to navigate back to the landing page.
            </textarea>
            <br /><br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr> <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-select-one-group"> Assignment Group: </label>
                    </td>
                    <td>
                        <select id="wd-select-one-group">
                            <option value="ASSIGNMENT1">ASSIGNMENT1</option>
                            <option value="ASSIGNMENT2">ASSIGNMENT2</option>
                            <option value="ASSIGNMENT3">ASSIGNMENT3</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-select-one-display"> Display Grade as: </label>
                    </td>
                    <td>
                        <select id="wd-select-one-display">
                            <option value="Percentage">Percentage</option>
                            <option value="Points-based">Points-based</option>
                            <option value="Letter grading">Letter grading</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-select-one-submission-type"> Submission Type: </label>
                    </td>
                    <td>
                        <select id="wd-select-one-submission-type">
                            <option value="Online">Online</option>
                            <option value="Paper">Paper</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top"></td>
                    <td>
                        <label>Online Entry Options:</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-text" />
                        <label htmlFor="wd-chkbox-text">Text Entry</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-web" />
                        <label htmlFor="wd-chkbox-web">Website URL</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-media" />
                        <label htmlFor="wd-chkbox-media">Media Recordings</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-student" />
                        <label htmlFor="wd-chkbox-student">Student Annotation</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-file" />
                        <label htmlFor="wd-chkbox-file">File Uploads</label>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">Assign</td>
                    <td>
                        <label>Assign to:</label><br />

                        <input id="wd-assign" value={"Everyone"} /><br /><br />

                        <label>Due</label><br />
                        <input type="date"
                               value="2025-01-22"
                               id="wd-text-fields-dob"/><br/>

                        <tr>
                            <td>
                                <label htmlFor="wd-available-from">Available from</label> <br />
                                <input type="date" id="wd-available-from" value="2025-01-03" />
                            </td>
                            <td>
                                <label htmlFor="wd-until">Until</label> <br />
                                <input type="date" id="wd-until" value="2025-01-22" />
                            </td>
                        </tr>
                    </td>
                </tr><br />

            </table>

            <hr />

            <table style={{ width: '100%' }}>
                <tr>
                    <td style={{ textAlign: 'right' }}>
                        <button style={{ marginRight: '10px' }}>Cancel</button>
                        <button>Save</button>
                    </td>
                </tr>
            </table>

        </div>
);}
=======
import { Button, Col, Row } from 'react-bootstrap';
import * as db from '../../Database';
import { useParams } from 'react-router';

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(
    (assignment) => aid === assignment._id
  );
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
          value={assignment?.title || 'New Assignment'}
        />
      </Row>
      <Row className="mt-3">
        <textarea className="form-control" id="wd-name" rows={6}>
          The assignment is available online Submit a link to the landing page of your Web
          application running on Netlify. The landing page should include the following:
          Your full name and section Links to each of the lab assignments Link to the Kanbas application
          Links to all relevant source code repositories The Kanbas application should include a link
          to navigate back to the landing page.
        </textarea>
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
            value={100}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" htmlFor="wd-group">
            Assignment Group
          </label>
        </Col>
        <Col>
          <select className="form-select" id="wd-group">
            <option selected value="ASSIGNMENTS">
              Assignments
            </option>
            <option value="QUIZZES">Quizzes</option>
            <option value="EXAMS">Exams</option>
            <option value="PROJECT">Project</option>
          </select>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" htmlFor="wd-display-grade-as">
            Display Grade as
          </label>
        </Col>
        <Col>
          <select className="form-select" id="wd-display-grade-as">
            <option selected value="PERCENTAGE">
              Percentage
            </option>
            <option value="POINTS">Points</option>
            <option value="LETTER">Letter Grade</option>
          </select>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end">Submission Type</label>
        </Col>
        <Col>
          <div className="form-control">
            <select className="form-select mt-2" id="wd-submission-type">
              <option selected value="ONLINE">
                Online
              </option>
              <option value="PHYSICAL">Physical Copy</option>
            </select>
            <br />
            <strong className="mt-3">Online Entry Options</strong>
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-text-entry"
              />
              <label className="form-check-label" htmlFor="wd-text-entry">
                Text Entry
              </label>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-website-url"
              />
              <label className="form-check-label" htmlFor="wd-website-url">
                Website URL
              </label>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-media-recordings"
              />
              <label className="form-check-label" htmlFor="wd-media-recordings">
                Media Recordings
              </label>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-student-annotation"
              />
              <label
                className="form-check-label"
                htmlFor="wd-student-annotation"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check mt-3 mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-file-upload"
              />
              <label className="form-check-label" htmlFor="wd-file-upload">
                File Uploads
              </label>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end">Assign</label>
        </Col>
        <Col>
          <div className="form-control">
            <label htmlFor="wd-assign-to">
              <strong className="mt-2">Assign to</strong>
            </label>
            <input
              className="form-control"
              type="text"
              id="wd-points"
              value="Everyone"
            />
            <label className="mt-2" htmlFor="wd-due-date">
              <strong>Due</strong>
            </label>
            <input
              className="form-control"
              type="date"
              id="wd-due-date"
              value="2025-05-13"
            />
            <div className="d-flex flex-row justify-content-evenly mb-3">
              <div className="me-2" style={{ width: '100%' }}>
                <label className="mt-2" htmlFor="wd-available-from">
                  <strong>Available from</strong>
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="wd-available-from"
                  value="2025-05-06"
                />
              </div>
              <div style={{ width: '100%' }}>
                <label className="mt-2" htmlFor="wd-until">
                  <strong>Until</strong>
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="wd-until"
                  value="2025-05-20"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <div className="d-flex flex-row justify-content-end">
        <Button
          href={`#/Kambaz/Courses/${cid}/Assignments`}
          variant="secondary"
          className="ms-2 mb-3"
          id="wd-add-group-btn"
        >
          Cancel
        </Button>
        <Button
          href={`#/Kambaz/Courses/${cid}/Assignments`}
          variant="danger"
          className="ms-2 mb-3"
          id="wd-add-group-btn"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
>>>>>>> Stashed changes
