// ExperienceCard.jsx
export default function ExperienceCard({ role, company, period, summary, bullets }) {
  return (
    <div className="card mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{role}</h3>
          <p className="text-accent text-sm">{company}</p>
        </div>
        <span className="text-xs text-muted border border-card-border rounded-full px-3 py-1">{period}</span>
      </div>
      <p className="text-muted text-sm mt-3">{summary}</p>
      <ul className="mt-3 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-muted flex gap-2">
            <span className="text-accent">•</span>{b}
          </li>
        ))}
      </ul>
    </div>
  );
}