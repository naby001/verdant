'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleHelp,
  Compass,
  Flame,
  Leaf,
  Menu,
  MessageCircle,
  Play,
  Sparkles,
  Users,
  X,
  Zap,
} from 'lucide-react'

const images = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-24%20at%2011.28.13%20AM-3YWpXFizNTZMMfozrMizffHtZerlmt.jpeg',
  stage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-24%20at%2011.12.14%20AM%20%282%29-2iT8YdqxUU0knwlWHWY3vRa8ofLxXR.jpeg',
  community: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-24%20at%2011.12.14%20AM-X3MYNdKYfGc2xazwn45unPPIr4lRZL.jpeg',
}

const steps = [
  { day: '01', label: 'Meet your people', icon: Users, title: 'Welcome & connect', window: 'Days 1–3', description: 'Settle in, meet your cohort, and learn who to turn to when you need context or support.', sessions: ['Welcome to Esyasoft and the graduate cohort', 'Meet your buddy, manager, and immediate team', 'Office tour, tools setup, and first-week checklist'], outcome: 'You leave your first three days knowing where to go, who to ask, and how your team works.' },
  { day: '02', label: 'Find your rhythm', icon: Compass, title: 'Ways of working', window: 'Days 4–7', description: 'See how ideas move from a conversation to a shipped outcome, and find a routine that helps you learn.', sessions: ['How teams communicate, plan, and share feedback', 'Shadow a stand-up, review, or customer conversation', 'Set your personal goals for the first month'], outcome: 'You have a clear weekly rhythm and a small, realistic goal to own.' },
  { day: '03', label: 'Learn the domain', icon: BookOpen, title: 'Product & customer context', window: 'Days 8–14', description: 'Build the context behind our work: the products, customers, problems, and decisions that shape the business.', sessions: ['Product walkthrough and domain vocabulary', 'Customer journey: who we serve and why it matters', 'Ask-me-anything with a subject-matter expert'], outcome: 'You can explain what we build, who it helps, and where your work fits.' },
  { day: '04', label: 'Build your edge', icon: Zap, title: 'Practice & contribute', window: 'Days 15–30', description: 'Turn your learning into action with a guided starter project, feedback, and a plan for what comes next.', sessions: ['Pick a starter task with your manager', 'Pair with a teammate and share an early draft', '30-day reflection and next-step conversation'], outcome: 'You finish with a first contribution, useful feedback, and momentum for month two.' },
]

export function OnboardingDashboard() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [checked, setChecked] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f8f1] text-[#102c24]">
      <div className="fixed inset-0 -z-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#c8ff39]/30 blur-3xl" />
        <div className="absolute right-0 top-[30rem] h-96 w-96 rounded-full bg-[#b3e8da]/40 blur-3xl" />
      </div>

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight" aria-label="Esyasoft Graduate Program home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#a9f229] text-[#102c24]"><Leaf size={18} strokeWidth={2.5} /></span>
          <span className="text-lg">esya<span className="text-[#57b85c]">soft</span></span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a href="#start" className="transition-colors hover:text-[#57b85c]">Start here</a>
          <a href="#journey" className="transition-colors hover:text-[#57b85c]">Your journey</a>
          <a href="#community" className="transition-colors hover:text-[#57b85c]">Community</a>
          <button className="rounded-full border border-[#102c24]/20 px-4 py-2 transition-all hover:border-[#102c24] hover:bg-white">Need help?</button>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-[#102c24]/15 bg-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      {menuOpen && <div className="relative z-20 mx-5 rounded-2xl border border-[#102c24]/10 bg-white p-4 shadow-lg md:hidden"><div className="grid gap-3 text-sm font-semibold"><a href="#start" onClick={() => setMenuOpen(false)}>Start here</a><a href="#journey" onClick={() => setMenuOpen(false)}>Your journey</a><a href="#community" onClick={() => setMenuOpen(false)}>Community</a></div></div>}

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-28 lg:pt-20">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#84c957]/40 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[.18em] text-[#428c4c]"><Sparkles size={14} /> Graduate program 2026</div>
          <h1 className="max-w-3xl text-5xl font-black leading-[.93] tracking-[-.055em] sm:text-7xl">Your first 30 days.<br /><span className="text-[#59bd4e]">Made simple.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#41615a]">Welcome to Esyasoft. Think of this as your friendly map for finding your people, learning how things work, and building something you&apos;ll be proud of.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#start" className="group inline-flex items-center gap-3 rounded-full bg-[#102c24] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(16,44,36,.18)] transition-all hover:-translate-y-1 hover:bg-[#1f5143]">Show me the way <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a><a href="#journey" className="inline-flex items-center gap-2 rounded-full border border-[#102c24]/15 bg-white/60 px-5 py-3.5 text-sm font-bold transition-all hover:bg-white"><Play size={15} fill="currentColor" /> See the journey</a></div>
          <div className="mt-10 flex items-center gap-3 text-sm text-[#56746b]"><div className="flex -space-x-2"><span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#f5f8f1] bg-[#bceba3] text-xs font-bold">A</span><span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#f5f8f1] bg-[#ffd39d] text-xs font-bold">R</span><span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#f5f8f1] bg-[#b9d9ff] text-xs font-bold">S</span></div><span>Join 40+ new explorers</span></div>
        </div>
        <div className="relative animate-in fade-in zoom-in-95 duration-1000">
          <div className="absolute -right-2 top-4 z-10 rotate-6 rounded-2xl bg-[#a9f229] px-4 py-3 text-xs font-black uppercase tracking-wider text-[#102c24] shadow-lg sm:right-8">Explore · Grow · Prosper</div>
          <div className="aspect-[.9] overflow-hidden rounded-[2.2rem] border-[10px] border-white shadow-2xl shadow-[#1c513b]/15 sm:aspect-[1.05] lg:aspect-[.9]"><img src={images.hero} alt="Esyasoft Graduate Program 2026 welcome artwork" className="h-full w-full object-cover object-left transition-transform duration-700 hover:scale-105" /></div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur sm:left-5"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eaffd1] text-[#4da749]"><Flame size={20} /></span><div><p className="text-xs text-[#678079]">Today&apos;s energy</p><p className="font-black">Curious &amp; ready</p></div></div></div>
        </div>
      </section>

      <section id="start" className="relative z-10 border-y border-[#102c24]/8 bg-white/60 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-[#62b95b]">Before you begin</p><h2 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">No silly questions.<br />Just good <span className="text-[#59bd4e]">first steps.</span></h2><p className="mt-5 leading-7 text-[#55716a]">You don&apos;t need to know everything on day one. Start with these four small moves and let the rest unfold.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">{steps.map((step, index) => { const Icon = step.icon; const isActive = activeStep === index; return <button key={step.day} onClick={() => setActiveStep(index)} className={`group relative rounded-3xl p-5 text-left transition-all duration-300 ${isActive ? 'bg-[#102c24] text-white shadow-xl shadow-[#102c24]/15 -translate-y-1' : 'border border-[#102c24]/10 bg-[#f7faf4] hover:-translate-y-1 hover:bg-white'}`}><div className="flex items-start justify-between"><span className={`text-xs font-black ${isActive ? 'text-[#b8f73a]' : 'text-[#70b76c]'}`}>STEP {step.day}</span><Icon size={20} className={isActive ? 'text-[#b8f73a]' : 'text-[#74a98a'} /></div><p className="mt-12 font-black">{step.label}</p><ChevronRight size={16} className={`absolute bottom-5 right-5 transition-transform group-hover:translate-x-1 ${isActive ? 'text-[#b8f73a]' : 'text-[#9ab2a9'}`} /></button> })}</div>
          {(() => { const selected = steps[activeStep]; return <div className="mt-6 overflow-hidden rounded-3xl border border-[#102c24]/10 bg-white shadow-sm"><div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaffd1] text-sm font-black text-[#4d994b]">{selected.day}</span><div><p className="text-xs font-black uppercase tracking-[.16em] text-[#62b95b]">{selected.window}</p><h3 className="text-2xl font-black tracking-tight">{selected.title}</h3></div></div><p className="mt-5 leading-7 text-[#55716a]">{selected.description}</p><div className="mt-5 rounded-2xl bg-[#f1f9e9] p-4"><p className="text-xs font-black uppercase tracking-[.16em] text-[#4d994b]">By the end of this phase</p><p className="mt-2 text-sm font-semibold leading-6 text-[#315e3c]">{selected.outcome}</p></div></div><div><p className="text-xs font-black uppercase tracking-[.16em] text-[#62b95b]">What happens in the sessions</p><ol className="mt-4 space-y-3">{selected.sessions.map((session, index) => <li key={session} className="flex items-start gap-3 rounded-2xl bg-[#f7faf4] p-4"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#102c24] text-xs font-black text-[#b8f73a]">{index + 1}</span><span className="text-sm font-semibold leading-6 text-[#315e3c]">{session}</span></li>)}</ol></div></div></div> })()}
          <div className="mt-6 flex flex-col gap-4 rounded-3xl bg-[#eaffd1] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div className="flex items-start gap-3"><CircleHelp className="mt-0.5 shrink-0 text-[#4d994b]" size={20} /><p className="max-w-2xl text-sm leading-6 text-[#315e3c]"><strong>New here?</strong> That&apos;s exactly where you&apos;re meant to be. Find a buddy, ask one question, and write down one thing you learned today.</p></div><button onClick={() => setChecked(!checked)} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#315e3c] shadow-sm transition hover:shadow-md">{checked && <Check size={15} />} {checked ? 'I’m ready' : 'Mark as read'}</button></div>
        </div>
      </section>

      <section id="journey" className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:py-28"><div className="overflow-hidden rounded-[2rem] bg-[#183b30] p-3 shadow-xl"><img src={images.stage} alt="New graduates gathered at the Esyasoft program stage" className="aspect-[.85] w-full rounded-[1.5rem] object-cover transition-transform duration-700 hover:scale-105 sm:aspect-[1.3] lg:aspect-[.85]" /></div><div><p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-[#62b95b]">The bigger picture</p><h2 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">A journey, not a<br /><span className="text-[#59bd4e]">test.</span></h2><p className="mt-5 max-w-lg leading-7 text-[#55716a]">Over the next 30 days, you&apos;ll move from meeting the team to understanding the world we build for. Every day adds one small spark to your bigger picture.</p><div className="mt-8 space-y-3"><div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eaffd1] font-black text-[#4d994b]">01</span><div><p className="font-bold">Absorb</p><p className="text-sm text-[#71877f]">Meet, listen, and get comfortable.</p></div></div><div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#d8f7ef] font-black text-[#317f70]">02</span><div><p className="font-bold">Explore</p><p className="text-sm text-[#71877f]">Ask why and connect the dots.</p></div></div><div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#dbe8ff] font-black text-[#4f79b4]">03</span><div><p className="font-bold">Own</p><p className="text-sm text-[#71877f]">Bring your point of view forward.</p></div></div></div></div></section>

      <section id="community" className="relative z-10 bg-[#102c24] px-5 py-20 text-white sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center"><div><p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-[#b8f73a]">You&apos;re not doing this alone</p><h2 className="max-w-xl text-4xl font-black tracking-[-.04em] sm:text-5xl">The best part of starting is finding your <span className="text-[#b8f73a]">people.</span></h2><p className="mt-5 max-w-lg leading-7 text-[#bad0c7]">Say hello in the room, join a coffee chat, or ask for a hand. Everyone here remembers their first day.</p><button className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#b8f73a] px-6 py-3.5 text-sm font-black text-[#102c24] transition hover:-translate-y-1 hover:bg-[#d3ff71]">Meet the community <ArrowRight size={17} /></button></div><div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3"><img src={images.community} alt="Esyasoft team and new graduates together" className="aspect-[1.25] w-full rounded-[1.5rem] object-cover" /><div className="absolute bottom-7 left-7 flex items-center gap-2 rounded-full bg-[#102c24]/85 px-3 py-2 text-xs font-bold backdrop-blur"><span className="h-2 w-2 rounded-full bg-[#b8f73a]" /> Community is online</div></div></div></section>

      <footer className="relative z-10 flex flex-col items-center justify-between gap-4 bg-[#102c24] px-5 pb-8 text-sm text-[#bad0c7] sm:flex-row sm:px-8"><span className="font-bold text-white">esya<span className="text-[#b8f73a]">soft</span> · Graduate Program 2026</span><span className="inline-flex items-center gap-2"><MessageCircle size={15} /> Questions are a superpower.</span></footer>
    </main>
  )
}

export { images }

// Short visual guide to supplied images: a green Graduate Program 2026 hero artwork with a friendly robot; a live event stage with a QR scavenger-hunt display; and two wide team/event photos showing the graduate cohort together.
