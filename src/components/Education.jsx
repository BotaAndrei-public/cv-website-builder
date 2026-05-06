// import { education } from "../../public/data";
import SectionHeader from "./SectionHeader";
import Timeline from "./Timeline";

export default function Education() {
  const education = window.cvData.education;
  return (
    <section id="education" className="scroll-mt-20">
      <SectionHeader label="Education" />
      <Timeline items={education} roleKey="degree" orgKey="school" />
    </section>
  );
}
