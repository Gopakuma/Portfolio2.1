export default function Navbar() {
  const links = ["About", "Experience", "Work", "Contact"];
  return (
    <nav className="flex items-center justify-between px-6 py-4 card rounded-full max-w-5xl mx-auto mt-6">
      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">G</div>
      <div className="hidden md:flex gap-6 text-sm text-muted">
        {links.map(l => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
      </div>
      <div className="flex items-center gap-3 text-sm">
        <a  href="/GopakumarG.pdf"
            download="GopakumarG.pdf"
            className="text-sm border border-card-border px-4 py-2 rounded-full hover:border-accent/50 transition">Resume</a>
        <button className="bg-white text-black px-4 py-2 rounded-full">Let's Talk</button>
      </div>
    </nav>
  );
}