"use client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";
import * as client from "../courses/client";
export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const { currentUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const isEnrolled = (courseId: string) =>
    !!currentUser &&
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === courseId,
    );

  const loadCourses = async () => {
    try {
      const data =
        currentUser && !showAllCourses
          ? await client.findMyCourses()
          : await client.fetchAllCourses();
      setCourses(data);
    } catch {
      setCourses([]);
    }
  };
  useEffect(() => {
    loadCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, showAllCourses]);
  const onAddCourse = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...newCourseFields } = course;
    const newCourse = await client.createCourse(newCourseFields);
    addCourse(newCourse);
    if (currentUser) {
      enroll(currentUser._id, newCourse._id);
    }
  };
  const onUpdateCourse = async () => {
    const updated = await client.updateCourse(course);
    updateCourse(updated);
  };

  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button
          type="button"
          id="wd-enrollments-click"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </button>
      </div>
      <hr />
      <h5 className="flex flex-wrap items-center justify-between gap-2">
        New Course
        <span className="flex gap-2">
          <button
            type="button"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            id="wd-add-new-course-click"
            onClick={onAddCourse}
          >
            Add
          </button>
          <button
            type="button"
            className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
            id="wd-update-course-click"
            onClick={onUpdateCourse}
          >
            Update
          </button>
        </span>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        type="date"
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            enrolled={isEnrolled(c._id)}
            onToggleEnrollment={
              currentUser
                ? () =>
                    isEnrolled(c._id)
                      ? unenroll(currentUser._id, c._id)
                      : enroll(currentUser._id, c._id)
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}