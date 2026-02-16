import React from 'react';

const DATA = {
  name: "ALEX DEV",
  role: "Full Stack Engineer",
  availability: "Available for Hire",
  location: "San Francisco, CA",
  bio: "I build high-density, performant web interfaces. Specializing in React architectures that turn complex data into intuitive user experiences.",
  skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS", "Docker", "Python", "GraphQL", "Redis", "Next.js", "Framer Motion"],
  projects: [
    { title: "Hyper-Task", desc: "Keyboard-optimized task management.", stack: "Next.js / Prisma", link: "#" },
    { title: "DataViz Engine", desc: "WebGL wrapper for 100k+ data points.", stack: "Three.js / React", link: "#" },
    { title: "Cloud-Sync", desc: "Real-time file orchestration service.", stack: "Go / S3", link: "#" },
    { title: "Auth-Gate", desc: "Open-source biometric auth provider.", stack: "Rust / WASM", link: "#" }
  ],
  contact: { email: "alex@example.com", linkedin: "#", github: "#" }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 flex flex-col">
      
      {/* FULL WIDTH NAV */}
      <nav className="w-full border-b border-slate-100 px-6 lg:px-12 h-20 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <span className="font-black text-2xl tracking-tighter text-blue-600 leading-none">{DATA.name}</span>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-green-700">{DATA.availability}</span>
          </div>
        </div>
        <div className="flex gap-8 items-center text-xs font-black uppercase tracking-[0.2em]">
          <a href={`mailto:${DATA.contact.email}`} className="hover:text-blue-600 transition">Email</a>
          <a href={DATA.contact.github} className="hover:text-blue-600 transition">GitHub</a>
          <a href="#" className="bg-slate-900 text-white px-5 py-3 rounded-full hover:bg-blue-600 transition">Get Resume</a>
        </div>
      </nav>

      {/* SPLIT SCREEN LAYOUT: MAXIMIZES INFO DENSITY */}
      <main className="flex-grow flex flex-col lg:flex-row">
        
        {/* LEFT PANEL: Static Info (Sticky on Desktop) */}
        <section className="lg:w-2/5 lg:h-[calc(100vh-5rem)] lg:sticky lg:top-20 p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between">
          <div>
            <h1 className="text-6xl xl:text-8xl font-black tracking-tighter mb-8 leading-[0.85]">
              {DATA.role.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            <p className="text-xl text-slate-500 max-w-md leading-relaxed mb-12">
              {DATA.bio}
            </p>

            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6 italic">Tech Stack_</h2>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 border border-slate-200 rounded text-xs font-bold hover:border-blue-500 hover:text-blue-600 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2">Location</p>
            <p className="font-bold">{DATA.location}</p>
          </div>
        </section>

        {/* RIGHT PANEL: Scrollable Content (Projects) */}
        <section className="lg:w-3/5 p-6 lg:p-12 space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 italic">Featured Projects_</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DATA.projects.map((project, i) => (
              <div key={i} className="group p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-500 hover:bg-white transition-all duration-500 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{project.stack}</span>
                    <span className="text-slate-300 group-hover:text-blue-500 transition-colors">↗</span>
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter mb-3">{project.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{project.desc}</p>
                </div>
                <div className="pt-8 flex gap-4">
                  <a href={project.link} className="text-xs font-bold underline underline-offset-4 hover:text-blue-600">View Project</a>
                  <a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors">Source Code</a>
                </div>
              </div>
            ))}
          </div>

          {/* FINAL CTA AREA */}
          <div className="pt-20 pb-12">
             <div className="bg-blue-600 rounded-[3rem] p-12 text-white text-center">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Let's build the future.</h2>
                <a href={`mailto:${DATA.contact.email}`} className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform">
                  Start a Conversation
                </a>
             </div>
          </div>
        </section>

      </main>
    </div>
  );
}