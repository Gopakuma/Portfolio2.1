export default function WorkCard({ title, label, tags }) {
  return (
    <div className="card h-56 flex flex-col justify-between">
      <h3 className="text-3xl font-bold text-accent">{title}</h3>
      <div className="flex justify-between items-end">
        <div>
          <p className="font-semibold">{label}</p>
          <p className="text-xs text-muted">{tags}</p>
        </div>
        <span className="w-8 h-8 rounded-full border border-card-border flex items-center justify-center">↗</span>
      </div>
    </div>
  );
}