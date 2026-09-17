// Experience.jsx
import { experience } from "../data/Experience";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      {experience.map((item, i) => (
        <ExperienceCard key={i} {...item} />
      ))}
    </section>
  );
}