import { v4 as uuidv4 } from "uuid";

export default function ModulesDao(db: any) {
  const findModulesForCourse = (courseId: string) =>
    db.modules.filter((m: any) => m.course === courseId);

  const createModule = (module: any) => {
    const newModule = { lessons: [], ...module, _id: uuidv4() };
    db.modules = [...db.modules, newModule];
    return newModule;
  };

  const updateModule = (moduleId: string, updates: any) => {
    const module = db.modules.find((m: any) => m._id === moduleId);
    if (!module) return null;
    Object.assign(module, updates, { _id: moduleId });
    return module;
  };

  const deleteModule = (moduleId: string) => {
    db.modules = db.modules.filter((m: any) => m._id !== moduleId);
  };

  return { findModulesForCourse, createModule, updateModule, deleteModule };
}
