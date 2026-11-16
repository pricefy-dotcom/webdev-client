"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import { useModulesStore } from "../../../store/modulesStore";

export default function Modules() {
  const { cid } = useParams();
  const loadModules = useModulesStore((state) => state.loadModules);
  // 5.4.6.1: load this course's modules from the server
  useEffect(() => {
    if (typeof cid === "string") loadModules(cid);
  }, [cid, loadModules]);
  const modules = useModulesStore((state) => state.modules).filter(
    (module) => module.course === cid
  );
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}
