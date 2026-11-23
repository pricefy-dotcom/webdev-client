import { v4 as uuidv4 } from "uuid";

export default function CoursesDao(db: any) {
  const findAllCourses = () => db.courses;

  const findCoursesForEnrolledUser = (userId: string) =>
    db.courses.filter((course: any) =>
      db.enrollments.some(
        (e: any) => e.user === userId && e.course === course._id
      )
    );

  const createCourse = (course: any) => {
    const newCourse = { ...course, _id: uuidv4() };
    db.courses = [...db.courses, newCourse];
    return newCourse;
  };

  const updateCourse = (courseId: string, updates: any) => {
    const course = db.courses.find((c: any) => c._id === courseId);
    if (!course) return null;
    Object.assign(course, updates, { _id: courseId });
    return course;
  };

  // Deleting a course also removes its enrollments
  const deleteCourse = (courseId: string) => {
    db.courses = db.courses.filter((c: any) => c._id !== courseId);
    db.enrollments = db.enrollments.filter((e: any) => e.course !== courseId);
  };

  return {
    findAllCourses,
    findCoursesForEnrolledUser,
    createCourse,
    updateCourse,
    deleteCourse,
  };
}
