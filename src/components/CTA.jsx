import { Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="max-w-5xl mx-auto mt-16">
      <div className="card text-center py-16 bg-gradient-to-b from-accent/10 to-transparent">
        <h2 className="text-4xl font-bold">Ready to collaborate?</h2>
        <p className="text-muted mt-3 max-w-md mx-auto">
          I specialize in building backend systems that scale. Open to new challenges.
        </p>
        <button className="mt-6 bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 mx-auto">
          Gopakumarg893@gmail.com <Mail size={16} />
        </button>
      </div>
    </section>
  );
}