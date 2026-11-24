"use client";
import { create } from "zustand";
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
// The store is now a cache of what the server sends back.
type AssignmentsStore = {
  assignments: Assignment[];
  setAssignments: (assignments: Assignment[]) => void;
  addAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: Assignment) => void;
  findAssignment: (assignmentId: string) => Assignment | undefined;
};
export const useAssignmentsStore = create<AssignmentsStore>((set, get) => ({
  assignments: [],
  setAssignments: (assignments) => set({ assignments }),
  findAssignment: (assignmentId) =>
    get().assignments.find((a) => a._id === assignmentId),
  addAssignment: (assignment) =>
    set((state) => ({ assignments: [...state.assignments, assignment] })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== assignmentId),
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a,
      ),
    })),
}));