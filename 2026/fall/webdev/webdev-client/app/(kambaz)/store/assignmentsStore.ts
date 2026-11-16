"use client";
import { create } from "zustand";
import * as client from "../courses/client";
export type Assignment = {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  due: string;
  available: string;
  until?: string;
};
export const emptyAssignment: Omit<Assignment, "_id" | "course"> = {
  title: "New Assignment",
  description: "New Assignment Description",
  points: 100,
  due: "",
  available: "",
  until: "",
};
type AssignmentsStore = {
  assignments: Assignment[];
  loadAssignments: (courseId: string) => Promise<void>;
  addAssignment: (assignment: Omit<Assignment, "_id">) => Promise<void>;
  deleteAssignment: (assignmentId: string) => Promise<void>;
  updateAssignment: (assignment: Assignment) => Promise<void>;
  findAssignment: (assignmentId: string) => Assignment | undefined;
};
export const useAssignmentsStore = create<AssignmentsStore>((set, get) => ({
  assignments: [],
  findAssignment: (assignmentId) =>
    get().assignments.find((a) => a._id === assignmentId),
  // GET /api/courses/:courseId/assignments
  loadAssignments: async (courseId) => {
    const assignments = await client.findAssignmentsForCourse(courseId);
    set({ assignments });
  },
  // POST /api/courses/:courseId/assignments
  addAssignment: async (assignment) => {
    const newAssignment = await client.createAssignmentForCourse(
      assignment.course,
      assignment,
    );
    set((state) => ({ assignments: [...state.assignments, newAssignment] }));
  },
  // DELETE /api/assignments/:assignmentId
  deleteAssignment: async (assignmentId) => {
    await client.deleteAssignment(assignmentId);
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== assignmentId),
    }));
  },
  // PUT /api/assignments/:assignmentId
  updateAssignment: async (assignment) => {
    const updated = await client.updateAssignment(assignment);
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? updated : a,
      ),
    }));
  },
}));
