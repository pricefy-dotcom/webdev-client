import type { Express, Request, Response } from "express";
import EnrollmentsDao from "./dao";

// 5.4.8 Enrollments (on your own)
export default function EnrollmentRoutes(app: Express, db: any) {
  const dao = EnrollmentsDao(db);

  // "current" means the signed-in user from the session
  const resolveUserId = (req: Request, res: Response): string | null => {
    let { userId } = req.params as Record<string, string>;
    if (userId === "current") {
      const currentUser = req.session.currentUser;
      if (!currentUser) {
        res.sendStatus(401);
        return null;
      }
      userId = currentUser._id;
    }
    return userId;
  };

  const findAllEnrollments = (req: Request, res: Response) => {
    res.json(dao.findAllEnrollments());
  };

  const findEnrollmentsForUser = (req: Request, res: Response) => {
    const userId = resolveUserId(req, res);
    if (!userId) return;
    res.json(dao.findEnrollmentsForUser(userId));
  };

  const enroll = (req: Request, res: Response) => {
    const userId = resolveUserId(req, res);
    if (!userId) return;
    const enrollment = dao.enrollUserInCourse(userId, req.params.courseId as string);
    res.json(enrollment);
  };

  const unenroll = (req: Request, res: Response) => {
    const userId = resolveUserId(req, res);
    if (!userId) return;
    dao.unenrollUserFromCourse(userId, req.params.courseId as string);
    res.sendStatus(200);
  };

  app.get("/api/enrollments", findAllEnrollments);
  app.get("/api/users/:userId/enrollments", findEnrollmentsForUser);
  app.post("/api/users/:userId/courses/:courseId", enroll);
  app.delete("/api/users/:userId/courses/:courseId", unenroll);
}
