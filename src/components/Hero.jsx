export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto mt-6 grid md:grid-cols-3 gap-4">
      <div className="card md:col-span-2">
        <span className="text-xs text-accent border border-accent/40 rounded-full px-3 py-1">
          ● Available for projects
        </span>
        <h1 className="text-5xl font-bold mt-4 leading-tight">
          BACKEND<br/>
          <span className="text-gray-600">DRIVEN</span><br/>
          SOLUTIONS
        </h1>
        <p className="text-muted mt-4">
          Hi, I'm <strong className="text-white">Gopakumar G</strong>. I architect scalable systems and build robust APIs that power complex business operations.
        </p>
      </div>
      <div className="card flex flex-col items-center justify-center text-center">
        <span className="text-6xl font-bold text-gray-500">T</span>
        <p className="text-xs text-muted mt-4">ROLE</p>
        <p className="font-semibold">Backend Engineer</p>
      </div>
    </section>
  );
}