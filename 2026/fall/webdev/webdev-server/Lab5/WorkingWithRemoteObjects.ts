import type { Express, Request, Response } from "express";

// In-memory objects. They reset whenever the server restarts.
const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

const lab5Module = {
  id: "M101",
  name: "Introduction to Express",
  description: "Build HTTP routes with Express and Node.js",
  course: "CS5610",
};

export default function WorkingWithRemoteObjects(app: Express) {
  // ----- Assignment -----
  const getAssignment = (req: Request, res: Response) => {
    res.json(assignment);
  };
  const getAssignmentTitle = (req: Request, res: Response) => {
    res.json(assignment.title);
  };
  const setAssignmentTitle = (req: Request, res: Response) => {
    const { newTitle } = req.params as Record<string, string>;
    assignment.title = newTitle;
    res.json(assignment);
  };
  const setAssignmentScore = (req: Request, res: Response) => {
    const { score } = req.params as Record<string, string>;
    assignment.score = parseInt(score);
    res.json(assignment);
  };
  const setAssignmentCompleted = (req: Request, res: Response) => {
    const { completed } = req.params as Record<string, string>;
    assignment.completed = completed === "true";
    res.json(assignment);
  };
  app.get("/lab5/assignment", getAssignment);
  app.get("/lab5/assignment/title", getAssignmentTitle);
  app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);
  app.get("/lab5/assignment/score/:score", setAssignmentScore);
  app.get("/lab5/assignment/completed/:completed", setAssignmentCompleted);

  // ----- Module (on your own) -----
  const getModule = (req: Request, res: Response) => {
    res.json(lab5Module);
  };
  const getModuleName = (req: Request, res: Response) => {
    res.json(lab5Module.name);
  };
  const setModuleName = (req: Request, res: Response) => {
    const { name } = req.params as Record<string, string>;
    lab5Module.name = name;
    res.json(lab5Module);
  };
  const setModuleDescription = (req: Request, res: Response) => {
    const { description } = req.params as Record<string, string>;
    lab5Module.description = description;
    res.json(lab5Module);
  };
  app.get("/lab5/module", getModule);
  app.get("/lab5/module/name", getModuleName);
  app.get("/lab5/module/name/:name", setModuleName);
  app.get("/lab5/module/description/:description", setModuleDescription);
}
