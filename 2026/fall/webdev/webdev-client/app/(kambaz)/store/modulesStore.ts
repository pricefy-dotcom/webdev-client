"use client";
import { create } from "zustand";
import * as client from "../courses/client";
export type Lesson = {
  _id: string;
  name: string;
  description: string;
  module: string;
};
export type CourseModule = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
};
type ModulesStore = {
  modules: CourseModule[];
  loadModules: (courseId: string) => Promise<void>;
  addModule: (module: { name: string; course: string }) => Promise<void>;
  deleteModule: (moduleId: string) => Promise<void>;
  updateModule: (module: CourseModule) => Promise<void>;
  editModule: (moduleId: string) => void;
};
export const useModulesStore = create<ModulesStore>((set) => ({
  modules: [],
  // GET /api/courses/:courseId/modules
  loadModules: async (courseId) => {
    const modules = await client.findModulesForCourse(courseId);
    set({ modules });
  },
  // POST /api/courses/:courseId/modules
  addModule: async (module) => {
    const newModule = await client.createModuleForCourse(module.course, {
      name: module.name,
      description: "",
      lessons: [],
    });
    set((state) => ({ modules: [...state.modules, newModule] }));
  },
  // DELETE /api/modules/:moduleId
  deleteModule: async (moduleId) => {
    await client.deleteModule(moduleId);
    set((state) => ({
      modules: state.modules.filter((m) => m._id !== moduleId),
    }));
  },
  // While typing (editing: true) only the screen updates.
  // Pressing Enter sends editing: false, which saves to the server.
  updateModule: async (module) => {
    set((state) => ({
      modules: state.modules.map((m) => (m._id === module._id ? module : m)),
    }));
    if (!module.editing) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { editing, ...toSave } = module;
      await client.updateModule(toSave);
    }
  },
  // Local only: show the name input for one module
  editModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m,
      ),
    })),
}));
