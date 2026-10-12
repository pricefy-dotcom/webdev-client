import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { GiAbstract036 } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import { HiMiniSparkles } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <GiAbstract036 />
      </div>
      <div id="wd-ai-icons" className="flex gap-3 mt-2">
        <MdFavorite className="text-4xl text-red-600" />
        <HiMiniSparkles className="text-4xl text-blue-600" />
      </div>
    </div>
  );
}