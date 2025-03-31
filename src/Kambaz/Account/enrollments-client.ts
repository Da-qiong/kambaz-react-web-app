import axios from "axios";
export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enroll = async (userId: string, courseId: string) => {
    const response = await axios.post(ENROLLMENTS_API, { userId, courseId });
    return response.data;
};

export const unenroll = async (userId: string, courseId: string) => {
    const response = await axios.delete(ENROLLMENTS_API, {
        data: { userId, courseId },
    });
    return response.data;
};

export const findEnrollments = async (userId: string) => {
    const response = await axios.get(`${REMOTE_SERVER}/api/users/${userId}/enrollments`);
    return response.data;
};

export const findEnrollmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${REMOTE_SERVER}/api/courses/${courseId}/enrollments`);
    return response.data;
};

