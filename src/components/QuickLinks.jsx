// src/components/QuickLinks.jsx
import { GithubIcon, LinkedinIcon } from "./icons";

export default function QuickLinks() {
  const stack = [
    { name: "Node.js", primary: true },
    { name: "TypeScript", primary: false },
    { name: "Java Spring Boot", primary: true },
    { name: "PostgreSQL", primary: true },
    { name: "MsSQL", primary: true },
    { name: "Redis", primary: false },
    { name: "Microservices", primary: true },
  ];

  return (
    <section className="max-w-5xl mx-auto mt-4 grid md:grid-cols-3 gap-4">
      <a href="https://www.linkedin.com/in/gopakumar-g-838b1b216/" target="_blank" rel="noreferrer"
         className="card flex flex-col items-center justify-center gap-2 hover:border-accent/50 transition">
        <LinkedinIcon size={20} />
        <span className="text-sm">LinkedIn</span>
      </a>

      <a href="https://github.com/Gopakuma" target="_blank" rel="noreferrer"
         className="card flex flex-col items-center justify-center gap-2 hover:border-accent/50 transition">
        <GithubIcon size={20} />
        <span className="text-sm">GitHub</span>
      </a>

      <div className="card">
        <p className="text-xs text-muted text-center mb-3">CORE STACK</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {stack.map(({ name, primary }) => (
            <span
              key={name}
              className={`text-xs px-3 py-1 rounded-full border ${
                primary
                  ? "bg-accent/20 text-accent border-accent/40"
                  : "text-muted border-card-border"
              }`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}