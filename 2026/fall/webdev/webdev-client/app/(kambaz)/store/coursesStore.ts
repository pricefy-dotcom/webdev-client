"use client";
import { create } from "zustand";
import coursesJson from "../database/courses.json";
import * as client from "../courses/client";
import { useEnrollmentsStore } from "./enrollmentsStore";

// courses.json is now only used for the Course type — data comes from the server
export type Course = (typeof coursesJson)[number];
const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
  term: "Fall 2023",
  department: "D123",
  credits: 4,
  description: "New Description",
  image: "/images/reactjs.jpg",
};
type CoursesStore = {
  courses: Course[];
  loadCourses: (scope: "mine" | "all") => Promise<void>;
  addCourse: (course: Course) => Promise<void>;
  deleteCourse: (courseId: string) => Promise<void>;
  updateCourse: (course: Course) => Promise<void>;
};
export const useCoursesStore = create<CoursesStore>((set) => ({
  courses: [],
  // "mine" -> GET /api/users/current/courses, "all" -> GET /api/courses
  loadCourses: async (scope) => {
    try {
      const courses =
        scope === "mine"
          ? await client.findMyCourses()
          : await client.fetchAllCourses();
      set({ courses });
    } catch {
      set({ courses: [] });
    }
  },
  // POST /api/users/current/courses (server also enrolls you)
  addCourse: async (course) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...fields } = { ...emptyCourse, ...course };
    const newCourse = await client.createCourse(fields);
    set((state) => ({ courses: [...state.courses, newCourse] }));
    await useEnrollmentsStore.getState().loadEnrollments();
  },
  // DELETE /api/courses/:courseId (server also removes its enrollments)
  deleteCourse: async (courseId) => {
    await client.deleteCourse(courseId);
    set((state) => ({
      courses: state.courses.filter((course) => course._id !== courseId),
    }));
    await useEnrollmentsStore.getState().loadEnrollments();
  },
  // PUT /api/courses/:courseId
  updateCourse: async (course) => {
    const updated = await client.updateCourse(course);
    set((state) => ({
      courses: state.courses.map((c) => (c._id === course._id ? updated : c)),
    }));
  },
}));
export { emptyCourse };
