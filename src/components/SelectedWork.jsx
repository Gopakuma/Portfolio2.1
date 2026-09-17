// SelectedWork.jsx
import { projects } from "../data/projects";
import WorkCard from "./WorkCard";

export default function SelectedWork() {
  return (
    <section id="work" className="max-w-5xl mx-auto mt-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Selected Work</h2>
        <a href="#" className="text-sm text-muted flex items-center gap-1">View All →</a>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <WorkCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}