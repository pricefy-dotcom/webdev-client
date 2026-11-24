"use client";
import { create } from "zustand";
import * as client from "../courses/client";
export type Enrollment = { _id: string; user: string; course: string };
type EnrollmentsStore = {
  enrollments: Enrollment[];
  loaded: boolean;
  loadEnrollments: () => Promise<void>;
  enroll: (userId: string, courseId: string) => Promise<void>;
  unenroll: (userId: string, courseId: string) => Promise<void>;
};
export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: [],
  loaded: false,
  loadEnrollments: async () => {
    const enrollments = await client.findAllEnrollments();
    set({ enrollments, loaded: true });
  },
  enroll: async (userId, courseId) => {
    const enrollment = await client.enrollUserInCourse(userId, courseId);
    set((state) => ({ enrollments: [...state.enrollments, enrollment] }));
  },
  unenroll: async (userId, courseId) => {
    await client.unenrollUserFromCourse(userId, courseId);
    set((state) => ({
      enrollments: state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId),
      ),
    }));
  },
}));