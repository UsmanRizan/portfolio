import Link from "next/link";
import ContactForm from "./contact-form";

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-24 md:py-32 ${className}`}>
    {children}
  </section>
);

const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-7xl px-6 ${className}`}>
    {children}
  </div>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const sports = [
  { name: "Badminton", emoji: "🏸" },
  { name: "Cricket", emoji: "🏏" },
  { name: "Football", emoji: "⚽" },
];

const steps = [
  { title: "Choose a sport", desc: "Badminton, cricket or football — pick your game." },
  { title: "Pick a time", desc: "See real-time availability and hourly pricing." },
  { title: "Book & pay", desc: "Pay by wallet or card and get instant confirmation." },
];

const teamTypes = ["Friends", "School", "Work", "Club", "Family"];

const teamSteps = [
  { title: "Create your squad", desc: "Start a team in seconds and share an invite code." },
  { title: "Invite your players", desc: "Friends, classmates or colleagues join with one code." },
  { title: "Shared team wallet", desc: "Members top up a common wallet for court fees." },
  { title: "Captain books & pays", desc: "The captain reserves the court from the team wallet." },
];

const recurringSteps = [
  { title: "Checkout", desc: "Choose a court and slot as usual." },
  { title: "Set frequency", desc: "Every 3 days, weekly, every 2 or 3 weeks, or monthly — up to 6 months." },
  { title: "Sessions reserved", desc: "Every session in the series is held for you." },
  { title: "Pay per session", desc: "Each session is charged to your card at the same price." },
];

const playerBenefits = [
  "Real-time court availability",
  "Transparent hourly pricing",
  "Wallet and card payments",
  "Recurring bookings and teams",
  "Instant confirmation and SMS reminders",
  "Refunds to your wallet",
];

const ownerBenefits = [
  "Easy facility and court listing",
  "Booking and staff management",
  "Weekly bank payouts",
  "Analytics on bookings and revenue",
];

const features = [
  { title: "Find Nearby Courts", desc: "Map-based discovery of verified venues around you." },
  { title: "Book by the Hour", desc: "Reserve exactly the slots you need." },
  { title: "Pay Your Way", desc: "Use your wallet or a card." },
  { title: "Instant Confirmation", desc: "Know your court is yours straight away." },
  { title: "Recurring Bookings", desc: "Book once and play on repeat." },
  { title: "SMS Reminders", desc: "Never miss a session." },
  { title: "Easy Cancellations", desc: "Cancel and get refunded to your wallet." },
  { title: "Reviews & Favourites", desc: "Save the venues you love and rate them." },
];

const customers = [
  "Sports Centers",
  "Indoor Facilities",
  "Football Turfs",
  "Cricket Nets",
  "Badminton Centers",
  "Multi-sport Complexes",
  "Schools & Clubs",
  "Recreational Businesses",
];

const APP_URL = "https://app.rizan.dev/";
const primaryBtn = "inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors";
const secondaryBtn = "inline-flex items-center justify-center bg-gray-100 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors";

const StepGrid = ({ items }: { items: { title: string; desc: string }[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {items.map((step, i) => (
      <div key={step.title} className="text-center">
        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold mx-auto mb-4">
          {i + 1}
        </div>
        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
      </div>
    ))}
  </div>
);

const Checklist = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 text-gray-600">
    {items.map((item) => (
      <li key={item} className="flex gap-3 items-start">
        <span className="mt-1 text-blue-600"><CheckIcon /></span> {item}
      </li>
    ))}
  </ul>
);

export default function Home() {
  return (
    <main className="bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60">
        <Container className="h-14 flex items-center justify-between">
          <Link href="#" className="text-xl font-semibold tracking-tight">
            Rizan
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="#sports" className="hover:text-gray-900 transition-colors">Sports</Link>
            <Link href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</Link>
            <Link href="#teams" className="hover:text-gray-900 transition-colors">Teams</Link>
            <Link href="#owners" className="hover:text-gray-900 transition-colors">For Owners</Link>
            <Link href="#contact" className="hover:text-gray-900 transition-colors">Contact</Link>
          </div>
          <Link href={APP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Try Demo
          </Link>
        </Container>
      </nav>

      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/40 to-white" />
        <Container>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900">
            Game on.<br className="hidden md:block" /> Book your court.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            ToPlay by Rizan lets players discover courts in real time, pay securely and book in seconds — while facility owners fill their empty slots.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={APP_URL} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              Book a court
            </Link>
            <Link href="#contact" className={secondaryBtn}>
              List your facility
            </Link>
          </div>
        </Container>
      </section>

      <Section id="sports" className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Find a court for your game.</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Browse verified venues for the sports you love.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sports.map((s) => (
              <Link key={s.name} href={APP_URL} target="_blank" rel="noopener noreferrer" className="rounded-3xl bg-gray-50 p-8 border border-gray-100 text-center hover:bg-gray-100 transition-colors">
                <div className="text-6xl mb-4">{s.emoji}</div>
                <h3 className="text-2xl font-semibold mb-2">{s.name}</h3>
                <span className="text-blue-600 font-medium">View available courts →</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="how-it-works" className="bg-gray-50">
        <Container className="max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Three steps to play.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold mx-auto mb-4">{i + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="teams" className="bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">New feature</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Team booking is here.</h2>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                Build a team, pool money in a shared wallet and let the captain book courts for everyone.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {teamTypes.map((t) => (
                  <span key={t} className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">{t}</span>
                ))}
              </div>
              <ol className="mt-8 space-y-4">
                {teamSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">{i + 1}</span>
                    <span><span className="font-semibold">{s.title}.</span> <span className="text-gray-500">{s.desc}</span></span>
                  </li>
                ))}
              </ol>
              <Link href={APP_URL} target="_blank" rel="noopener noreferrer" className={`${primaryBtn} mt-8`}>
                Sign in to start a team
              </Link>
              <p className="mt-3 text-sm text-gray-400">Free for every player.</p>
            </div>
            <div className="mx-auto w-full max-w-sm rounded-3xl bg-gray-100 p-3 shadow-2xl">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="font-semibold text-lg">Colombo Strikers</div>
                <div className="text-sm text-gray-400 mb-5">8 members</div>
                <div className="rounded-xl bg-blue-600 text-white p-4 mb-4">
                  <div className="text-sm opacity-80">Team wallet</div>
                  <div className="text-2xl font-semibold">Rs. 12,500.00</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between rounded-lg bg-gray-50 px-4 py-3"><span className="text-gray-600">Wallet top-up</span><span className="font-medium text-green-600">+ Rs. 2,000</span></div>
                  <div className="flex justify-between rounded-lg bg-gray-50 px-4 py-3"><span className="text-gray-600">Futsal booking</span><span className="font-medium">− Rs. 3,500</span></div>
                  <div className="flex justify-between rounded-lg bg-gray-50 px-4 py-3"><span className="text-gray-600">Invite code</span><span className="font-mono font-medium">STRK-2026</span></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">New feature</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Book once. Play on repeat.</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Lock in your regular slot every 3 days, weekly, every 2 or 3 weeks, or monthly.
            </p>
          </div>
          <StepGrid items={recurringSteps} />
          <p className="mt-10 text-center text-sm text-gray-400">
            Card payments only. Same price every session. Paid sessions stay booked if you cancel the series.
          </p>
          <div className="mt-8 text-center">
            <Link href={APP_URL} target="_blank" rel="noopener noreferrer" className={primaryBtn}>Find a court to repeat</Link>
          </div>
        </Container>
      </Section>

      <Section id="owners" className="bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-gray-50 p-8 md:p-10 border border-gray-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6"><UsersIcon /></div>
              <h2 className="text-3xl font-semibold tracking-tight mb-6">For players: get on the court, faster.</h2>
              <Checklist items={playerBenefits} />
              <Link href={APP_URL} target="_blank" rel="noopener noreferrer" className={`${primaryBtn} mt-8`}>Start booking</Link>
            </div>
            <div className="rounded-3xl bg-gray-50 p-8 md:p-10 border border-gray-100">
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-6"><BuildingIcon /></div>
              <h2 className="text-3xl font-semibold tracking-tight mb-6">For facility owners: fill your empty slots.</h2>
              <Checklist items={ownerBenefits} />
              <Link href="#contact" className={`${secondaryBtn} mt-8 bg-white`}>List your facility</Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Everything you need.</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-3xl bg-white p-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Built for everyone in sports.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {customers.map((c) => (
              <div key={c} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center font-medium text-gray-700">{c}</div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container className="max-w-4xl text-center">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6"><ShieldIcon /></div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Security and privacy first.</h2>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Secure password hashing, role-based access control, server-side authorization, input validation, and secure payment integration. We never store raw payment card information.
          </p>
        </Container>
      </Section>

      <Section id="contact" className="bg-white">
        <Container className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Ready to get started?
          </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Whether you are a facility owner looking to modernize your booking system or a player seeking convenient court reservations, ToPlay by Rizan is here for you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors">
              Contact Us
            </Link>
            <Link href="https://app.rizan.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gray-100 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors">
              Try Demo
            </Link>
          </div>
          <div className="mt-10">
            <ContactForm />
          </div>
          <div className="mt-20 pt-12 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="font-semibold text-gray-900">Rizan Technologies</div>
              <div className="mt-1 text-gray-500">Product: ToPlay</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Contact</div>
              <div className="mt-1 text-gray-500">usmanrizan6@gmail.com</div>
              <div className="text-gray-500">+94 743 922 176</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Location</div>
              <div className="mt-1 text-gray-500">78 Hill Street, Kalutara</div>
              <div className="text-gray-500">Sri Lanka 12000</div>
            </div>
          </div>
        </Container>
      </Section>

      <footer className="bg-white border-t border-gray-200 py-8">
          <Container className="text-center text-sm text-gray-400">
            © 2026 Rizan Technologies. All rights reserved.
          </Container>
      </footer>
    </main>
  );
}
