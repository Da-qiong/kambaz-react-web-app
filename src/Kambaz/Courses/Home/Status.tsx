import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { MdHome } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { BiSolidMegaphone } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { FaBell } from "react-icons/fa";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "300px" }}>
            <h2>Course Status</h2>
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
                        <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
                </div>
                <div className="w-50">
                    <button className="btn btn-lg btn-success w-100">
                        <FaCheckCircle className="me-2 fs-5" /> Publish </button>
                </div>
            </div><br />
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5" /> Import Existing Content </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <MdHome className="me-2 fs-5" /> Choose Home Page{" "}
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <FaEye className="me-2 fs-5" />
                View Course Stream{" "}
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BiSolidMegaphone className="me-2 fs-5" />
                New Annoucement{" "}
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BsGraphUp className="me-2 fs-5" /> New Analytics{" "}
            </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <FaBell className="me-2 fs-5" /> View Course Notifications{" "}
            </Button>
        </div> 
);}