import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
    const courses = db.courses;
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
<<<<<<< Updated upstream
            <h2 id="wd-dashboard-published">Published Courses (9)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                          className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/2345/Home"
                          className="wd-dashboard-course-link" >
                        <img src="/images/nodejs.jpg" width={200} />
                        <div>
                            <h5> CS2345 Node js </h5>
                            <p className="wd-dashboard-course-title">
                                Web Design 1 </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/3456/Home"
                          className="wd-dashboard-course-link" >
                        <img src="/images/htmlcss.jpg" width={200} />
                        <div>
                            <h5> CS3456 HTML & CSS </h5>
                            <p className="wd-dashboard-course-title">
                                Web Design 2 </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/4567/Home"
                          className="wd-dashboard-course-link" >
                        <img src="/images/python.jpg" width={200} />
                        <div>
                            <h5> CS4567 Python Programming </h5>
                            <p className="wd-dashboard-course-title">
                                Data Science 1 </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/5678/Home"
                          className="wd-dashboard-course-link" >
                        <img src="/images/ai.jpg" width={200} />
                        <div>
                            <h5> CS5678 Artificial Intelligence </h5>
                            <p className="wd-dashboard-course-title">
                                Data Science 2 </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/6789/Home"
                          className="wd-dashboard-course-link" >
                        <img src="/images/sql.jpg" width={200} />
                        <div>
                            <h5> CS6789 SQL Databases </h5>
                            <p className="wd-dashboard-course-title">
                                Data Science 3 </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/7890/Home"
                          className="wd-dashboard-course-link" >
                        <img src="/images/c.jpg" width={200} />
                        <div>
                            <h5> CS7890 C Programming </h5>
                            <p className="wd-dashboard-course-title">
                                Basic Programming 1 </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/8901/Home"
                          className="wd-dashboard-course-link" >
                        <img src="/images/java.jpg" width={200} />
                        <div>
                            <h5> CS8901 Java Programming </h5>
                            <p className="wd-dashboard-course-title">
                                Basic Programming 2 </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/9012/Home"
                          className="wd-dashboard-course-link" >
                        <img src="/images/algorithm.jpg" width={200} />
                        <div>
                            <h5> CS9012 Algorithm </h5>
                            <p className="wd-dashboard-course-title">
                                Computer Science </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
);}
=======
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name} </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description} </p>
                                        <button className="btn btn-primary"> Go </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>);
}
>>>>>>> Stashed changes
