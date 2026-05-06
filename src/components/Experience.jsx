// import { experience } from "../../public/data";
import SectionHeader from "./SectionHeader";
import Timeline from "./Timeline";

export default function Experience() {
  const experience = window.cvData.experience;
  return (
    <section id="experience" className="scroll-mt-20">
      <SectionHeader label="Experience" />
      <Timeline items={experience} roleKey="role" orgKey="company" />
    </section>
  );
}
