// Copy courses.json, modules.json, assignments.json, users.json and
// enrollments.json from your Next.js project's app/(kambaz)/database folder
// into this folder. Data lives in memory: changes reset on server restart.
import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
import users from "./users.json";
import enrollments from "./enrollments.json";

export default { courses, modules, assignments, users, enrollments };
