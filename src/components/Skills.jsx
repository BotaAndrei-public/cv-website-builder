// import { skills } from "../../public/data";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  const skills = window.cvData.skills;
  return (
    
    <section id="skills" className="scroll-mt-20">
      <SectionHeader label="Skills & Expertise" />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-sm text-stone-600 hover:border-stone-400 hover:text-stone-900 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
