import type { Express, Request, Response } from "express";
import ModulesDao from "./dao";

export default function ModuleRoutes(app: Express, db: any) {
  const dao = ModulesDao(db);

  const findModulesForCourse = (req: Request, res: Response) => {
    const { courseId } = req.params as Record<string, string>;
    res.json(dao.findModulesForCourse(courseId));
  };

  const createModuleForCourse = (req: Request, res: Response) => {
    const { courseId } = req.params as Record<string, string>;
    const module = { ...req.body, course: courseId };
    const newModule = dao.createModule(module);
    res.json(newModule);
  };

  const updateModule = (req: Request, res: Response) => {
    const { moduleId } = req.params as Record<string, string>;
    const updated = dao.updateModule(moduleId, req.body);
    if (!updated) {
      res.status(404).json({ message: `Unable to update module ${moduleId}` });
      return;
    }
    res.json(updated);
  };

  const deleteModule = (req: Request, res: Response) => {
    const { moduleId } = req.params as Record<string, string>;
    dao.deleteModule(moduleId);
    res.sendStatus(200);
  };

  app.get("/api/courses/:courseId/modules", findModulesForCourse);
  app.post("/api/courses/:courseId/modules", createModuleForCourse);
  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModule);
}
