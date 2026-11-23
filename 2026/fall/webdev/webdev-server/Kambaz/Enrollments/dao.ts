import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db: any) {
  const enrollUserInCourse = (userId: string, courseId: string) => {
    const enrollment = { _id: uuidv4(), user: userId, course: courseId };
    db.enrollments = [...db.enrollments, enrollment];
    return enrollment;
  };

  const unenrollUserFromCourse = (userId: string, courseId: string) => {
    db.enrollments = db.enrollments.filter(
      (e: any) => !(e.user === userId && e.course === courseId)
    );
  };

  const findEnrollmentsForUser = (userId: string) =>
    db.enrollments.filter((e: any) => e.user === userId);

  const findAllEnrollments = () => db.enrollments;

  return {
    enrollUserInCourse,
    unenrollUserFromCourse,
    findEnrollmentsForUser,
    findAllEnrollments,
  };
}
