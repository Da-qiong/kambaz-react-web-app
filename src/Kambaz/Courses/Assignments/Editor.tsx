import  {Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Row, } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div
      id="wd-assignments-editor"
      style={{ paddingLeft: "50px", paddingRight: "150px" }}
    >
      <Form>
        <Row className="mb-3 align-items-center">
          <Col sm={2}><FormLabel htmlFor="wd-name" className="mb-0">Assignment Name</FormLabel></Col>
          <Col><FormControl as="textarea" id="wd-name" placeholder="A1" /></Col>
        </Row>
        
        <Row className="mb-3 align-items-center">
          <Col><FormControl as="textarea" id="wd-description" placeholder="Enter description here..." style={{ height: "100px" }} /></Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={2}><FormLabel htmlFor="wd-points" className="mb-0">Points</FormLabel></Col>
          <Col><FormControl type="number" id="wd-points" placeholder="100" /></Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={2}><FormLabel htmlFor="wd-group" className="mb-0">Assignment Group</FormLabel></Col>
          <Col>
            <FormSelect id="wd-group">
              <option selected>ASSIGNMENTS</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={2}><FormLabel htmlFor="wd-display-grade-as" className="mb-0">Display Grade as</FormLabel></Col>
          <Col>
            <FormSelect id="wd-display-grade-as">
              <option selected>Percentage</option>
              <option value="1">Points-based</option>
              <option value="2">Letter grading</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={2}><FormLabel htmlFor="wd-submission-type" className="mb-0">Submission Type</FormLabel></Col>
          <Col>
            <FormSelect id="wd-submission-type">
              <option selected>Online</option>
              <option value="1">Paper</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={2}><FormLabel className="mb-0">Online Entry Options</FormLabel></Col>
          <Col>
            <FormCheck id="wd-text-entry" label="Text Entry" />
            <FormCheck id="wd-website-url" label="Website URL" />
            <FormCheck id="wd-media-recordings" label="Media Recordings" />
            <FormCheck id="wd-student-annotation" label="Student Annotation" />
            <FormCheck id="wd-file-upload" label="File Uploads" />
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={2}><FormLabel htmlFor="wd-assign-to" className="mb-0">Assign</FormLabel></Col>
          <Col><FormControl id="wd-assign-to" placeholder="Assign To" /></Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={2}><FormLabel htmlFor="wd-due-date" className="mb-0">Due</FormLabel></Col>
          <Col><FormControl type="date" id="wd-due-date" /></Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={2}><FormLabel htmlFor="wd-available-from" className="mb-0">Available From</FormLabel></Col>
          <Col><FormControl type="date" id="wd-available-from" /></Col>
          <Col sm={2}><FormLabel htmlFor="wd-available-until" className="mb-0">Until</FormLabel></Col>
          <Col><FormControl type="date" id="wd-available-until" /></Col>
        </Row>

        <Row className="justify-content-end">
          <Col xs="auto"><Button variant="secondary">Cancel</Button></Col>
          <Col xs="auto"><Button variant="danger">Save</Button></Col>
        </Row>
      </Form>
    </div>
  );
}
