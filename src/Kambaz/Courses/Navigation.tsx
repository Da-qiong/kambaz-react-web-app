import { Link, useLocation, useParams } from 'react-router-dom';
export default function CourseNavigation() {
<<<<<<< Updated upstream
    return (
        <div id="wd-courses-navigation">
            <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link">Home</Link><br/>
            <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link">Modules
                </Link><br/>
            <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link">Piazza</Link><br/>
            <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link">Zoom</Link><br/>
            <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link">
                Assignments</Link><br/>
            <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link">Quizzes
                </Link><br/>
            <Link to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link">Grades</Link><br/>
            <Link to="/Kambaz/People" id="wd-course-people-link">People</Link><br/>
        </div>
    );
=======
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    'Home',
    'Modules',
    'Piazza',
    'Zoom',
    'Assignments',
    'Quizzes',
    'Grades',
    'People',
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kambaz/Courses/${cid}/${link}`}
          className={`list-group-item border border-0 ${pathname.includes(link) ? 'active' : 'text-danger'}`}
          id={`wd-course-${link.toLocaleLowerCase()}-link`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
>>>>>>> Stashed changes
}