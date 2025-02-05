import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (9)</h2> <hr />
            <div id="wd-dashboard-courses"className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kambaz/Courses/1234/Home">
                            <img src="/images/reactjs.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS1234 React JS 
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kambaz/Courses/2345/Home">
                            <img src="/images/nodejs.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS2345 Node js
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Web Design 1
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kambaz/Courses/3456/Home">
                            <img src="/images/htmlcss.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS3456 HTML & CSS
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Web Design 2
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kambaz/Courses/4567/Home">
                            <img src="images/python.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS4567 Python Programming
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Data Science 1
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kambaz/Courses/5678/Home">
                            <img src="/images/ai.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS5678 Artificial Intelligence
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Data Science 2
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kambaz/Courses/6789/Home">
                            <img src="/images/sql.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS6789 SQL Databases
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Data Science 3
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kambaz/Courses/7890/Home">
                            <img src="/images/c.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS7890 C Programming
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Basic Programming 1
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kambaz/Courses/8901/Home">
                            <img src="/images/java.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS8901 Java Programming
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Basic Programming 2
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kambaz/Courses/8901/Home">
                            <img src="/images/algorithm.jpg" width="100%" height={160}/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS9012 Algorithm
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Computer Science
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
);}