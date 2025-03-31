import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as userClient from "../../Account/client";
import * as enrollClient from "../../Account/enrollments-client";



export default function PeopleTable() {
    const { cid } = useParams();

    const [users, setUsers] = useState<any[]>([]);
    const [enrollments, setEnrollments] = useState<any[]>([]);

    useEffect(() => {
        const load = async () => {
          const allUsers = await userClient.findAllUsers();
          const courseEnrollments = await enrollClient.findEnrollmentsForCourse(cid!);
          setUsers(allUsers);
          setEnrollments(courseEnrollments);
        };
        load();
      }, [cid]);      

    const enrolledUsers = users.filter((usr) =>
        enrollments.some((enr) => enr.user === usr._id && enr.course === cid)
    );

    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    {enrolledUsers.map((user: any) => (
                        <tr key={user._id}>
                            <td className="wd-full-name text-nowrap">
                                <FaUserCircle className="me-2 fs-1 text-secondary" />
                                <span className="wd-first-name">{user.firstName}</span>
                                <span className="wd-last-name">{user.lastName}</span>
                            </td>
                            <td className="wd-login-id">{user.loginId}</td>
                            <td className="wd-section">{user.section}</td>
                            <td className="wd-role">{user.role}</td>
                            <td className="wd-last-activity">{user.lastActivity}</td>
                            <td className="wd-total-activity">{user.totalActivity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
