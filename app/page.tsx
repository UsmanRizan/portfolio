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

const playerSteps = [
  { title: "Select Sport", desc: "Choose the sport you want to play." },
  { title: "Select Date", desc: "Pick your desired booking date." },
  { title: "Select Time", desc: "Choose morning, evening, or night." },
  { title: "Find Facilities", desc: "Discover nearby available facilities." },
  { title: "Select Facility", desc: "View details, pricing, and slots." },
  { title: "Select Time Slots", desc: "Pick one or more hourly slots." },
  { title: "Payment", desc: "Review and complete online payment." },
  { title: "Confirmation", desc: "Receive instant booking confirmation." },
];

const customers = [
  "Sports Centers",
  "Indoor Facilities",
  "Football Turfs",
  "Tennis Centers",
  "Badminton Centers",
  "Basketball Courts",
  "Multi-sport Complexes",
  "Recreational Businesses",
];

export default function Home() {
  return (
    <main className="bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60">
        <Container className="h-14 flex items-center justify-between">
          <Link href="#" className="text-xl font-semibold tracking-tight">
            Rizan
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="#overview" className="hover:text-gray-900 transition-colors">Overview</Link>
            <Link href="#solution" className="hover:text-gray-900 transition-colors">Solution</Link>
            <Link href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</Link>
            <Link href="#technology" className="hover:text-gray-900 transition-colors">Technology</Link>
            <Link href="#contact" className="hover:text-gray-900 transition-colors">Contact</Link>
          </div>
          <Link href="https://app.rizan.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Try Demo
          </Link>
        </Container>
      </nav>

      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/40 to-white" />
        <Container>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900">
            Sports facility booking,<br className="hidden md:block" /> simplified.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            ToPlay by Rizan connects players with sports facility owners through a simple digital booking experience. Manage locations, courts, and bookings from one elegant platform.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors">
              Contact Us
            </Link>
            <Link href="https://app.rizan.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gray-100 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors">
              Try Demo
            </Link>
          </div>
        </Container>
      </section>

      <Section id="overview" className="bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Built for the future of sports.
              </h2>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                Rizan Technologies is a software company developing cloud-based SaaS solutions for sports facility owners and players. Our platform, ToPlay, streamlines facility management, booking, and payments into one seamless digital experience.
              </p>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                Whether you operate a single tennis court or a multi-sport complex, ToPlay by Rizan provides the tools to manage your business efficiently while giving players a transparent, convenient way to discover and reserve facilities online.
              </p>
            </div>
            <div className="relative">
              <div className="mx-auto w-full max-w-sm">
                <div className="rounded-3xl bg-gray-100 p-3 shadow-2xl">
                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">T</div>
                      <div>
                        <div className="font-semibold">ToPlay</div>
                        <div className="text-sm text-gray-400">by Rizan</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-14 bg-gray-50 rounded-xl border border-gray-100"></div>
                      <div className="h-14 bg-gray-50 rounded-xl border border-gray-100"></div>
                      <div className="h-14 bg-blue-50 rounded-xl border border-blue-100 flex items-center px-5">
                        <div className="h-2.5 w-24 bg-blue-200 rounded"></div>
                      </div>
                      <div className="h-14 bg-gray-50 rounded-xl border border-gray-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="problem" className="bg-gray-50">
        <Container className="max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            The problem we solve.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 leading-relaxed">
            Sports facility booking is often handled through phone calls, messaging apps, social media, or manual records. This creates difficulties for everyone involved.
          </p>
          <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">For Players</h3>
              <ul className="space-y-3 text-gray-500">
                <li className="flex gap-3"><CheckIcon /> Difficulty finding nearby facilities</li>
                <li className="flex gap-3"><CheckIcon /> Unclear availability and pricing</li>
                <li className="flex gap-3"><CheckIcon /> No instant booking confirmation</li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">For Facility Owners</h3>
              <ul className="space-y-3 text-gray-500">
                <li className="flex gap-3"><CheckIcon /> Managing multiple locations and courts</li>
                <li className="flex gap-3"><CheckIcon /> Scheduling conflicts and double bookings</li>
                <li className="flex gap-3"><CheckIcon /> Disorganized customer bookings</li>
              </ul>
            </div>
          </div>
          <p className="mt-12 text-lg text-gray-900 font-medium">
            ToPlay by Rizan provides a centralized digital solution for all these activities.
          </p>
        </Container>
      </Section>

      <Section id="solution" className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Our solution.
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              An end-to-end digital booking experience for every user type.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-3xl bg-gray-50 p-8 border border-gray-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <UsersIcon />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Players</h3>
              <p className="text-gray-500 leading-relaxed">
                Discover sports facilities, search for available courts, select dates and time periods, make online payments, and manage bookings — all from your phone or computer.
              </p>
            </div>
            <div className="rounded-3xl bg-gray-50 p-8 border border-gray-100">
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-6">
                <BuildingIcon />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Facility Owners</h3>
              <p className="text-gray-500 leading-relaxed">
                Manage multiple locations, add facilities, assign supported sports, configure pricing, and handle bookings — all from a centralized dashboard.
              </p>
            </div>
            <div className="rounded-3xl bg-gray-50 p-8 border border-gray-100">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                <ShieldIcon />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Administrators</h3>
              <p className="text-gray-500 leading-relaxed">
                Centralized control over user accounts, sports, facility owners, upcoming bookings, and platform management functions.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="how-it-works" className="bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              How it works.
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              From selecting a sport to booking confirmation in eight simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {playerSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="owners" className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Powerful management for owners.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-gray-50 p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">Location Management</h3>
              <p className="text-gray-500 mb-6">Create multiple locations with detailed information and map-based selection.</p>
              <ul className="space-y-3 text-gray-500">
                <li className="flex gap-3"><CheckIcon /> Location name, address, city, and postal code</li>
                <li className="flex gap-3"><CheckIcon /> Geographic coordinates via map selection</li>
                <li className="flex gap-3"><CheckIcon /> Opening hours and 24-hour availability</li>
                <li className="flex gap-3"><CheckIcon /> Reverse geocoding for automatic address population</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-gray-50 p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">Facility Management</h3>
              <p className="text-gray-500 mb-6">Add multiple facilities to each location with flexible sports support.</p>
              <ul className="space-y-3 text-gray-500">
                <li className="flex gap-3"><CheckIcon /> Indoor and outdoor courts</li>
                <li className="flex gap-3"><CheckIcon /> Multiple sports per facility</li>
                <li className="flex gap-3"><CheckIcon /> Hourly pricing configuration</li>
                <li className="flex gap-3"><CheckIcon /> Real-time booking management</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Flexible sports and pricing.
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Configure hourly prices for each sport at each facility. One facility can support multiple sports, and one sport can be available at multiple facilities.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-200 overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50">
              <div className="font-semibold text-lg">Indoor Court 1</div>
              <div className="text-sm text-gray-500">Example pricing configuration</div>
            </div>
            {[
              { sport: "Basketball", price: "$20/hour" },
              { sport: "Badminton", price: "$15/hour" },
              { sport: "Volleyball", price: "$25/hour" },
            ].map((item) => (
              <div key={item.sport} className="px-8 py-5 flex justify-between items-center border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                <span className="text-gray-900 font-medium">{item.sport}</span>
                <span className="text-gray-500">{item.price}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Simple, scalable pricing.
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Designed as a SaaS platform with multiple revenue streams.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="text-4xl font-semibold text-blue-600 mb-4">%</div>
              <h3 className="text-xl font-semibold mb-2">Booking Commission</h3>
              <p className="text-gray-500">A percentage or fixed fee charged on successful bookings.</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="text-4xl font-semibold text-blue-600 mb-4">SaaS</div>
              <h3 className="text-xl font-semibold mb-2">Subscription Plans</h3>
              <p className="text-gray-500">Tiered plans based on features and number of facilities managed.</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="text-4xl font-semibold text-blue-600 mb-4">$</div>
              <h3 className="text-xl font-semibold mb-2">Transaction Fees</h3>
              <p className="text-gray-500">A service fee applied to online transactions where applicable.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Built for everyone in sports.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {customers.map((c) => (
              <div key={c} className="bg-white rounded-2xl p-6 border border-gray-200 text-center font-medium text-gray-700">
                {c}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="technology" className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Modern technology stack.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Application</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Backend</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Next.js Server APIs</li>
                <li>Authentication & RBAC</li>
                <li>Server-side Validation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Data & Maps</h3>
              <ul className="space-y-3 text-gray-600">
                <li>PostgreSQL</li>
                <li>Prisma ORM</li>
                <li>OpenStreetMap</li>
                <li>Leaflet</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container className="max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Seamless booking experience.
              </h2>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                Players can search for available courts, select time slots, and complete payment online. Facility owners manage everything from a single dashboard.
              </p>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-3"><CheckIcon /> Real-time availability</li>
                <li className="flex gap-3"><CheckIcon /> Secure online payments</li>
                <li className="flex gap-3"><CheckIcon /> Instant booking confirmation</li>
                <li className="flex gap-3"><CheckIcon /> Booking history tracking</li>
              </ul>
            </div>
            <div>
              <div className="max-w-md mx-auto bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                <div className="bg-blue-600 text-white px-8 py-6">
                  <div className="text-sm font-medium opacity-80">Booking Confirmed</div>
                  <div className="text-2xl font-semibold mt-1">Indoor Court 1</div>
                </div>
                <div className="px-8 py-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Customer</span>
                    <span className="font-medium">Alex</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Sport</span>
                    <span className="font-medium">Basketball</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location</span>
                    <span className="font-medium">Colombo Sports Center</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date</span>
                    <span className="font-medium">25 Sep 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time</span>
                    <span className="font-medium">6:00 PM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-medium">2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price</span>
                    <span className="font-medium">$20/hour</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex justify-between">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-semibold text-lg">$40</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-900 text-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-semibold text-blue-400 mb-2">0</div>
              <div className="text-gray-400">Booking Conflicts</div>
              <p className="mt-2 text-sm text-gray-500">Server-side availability checks prevent double bookings.</p>
            </div>
            <div>
              <div className="text-5xl font-semibold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-400">Online Booking</div>
              <p className="mt-2 text-sm text-gray-500">Players can book anytime from any device.</p>
            </div>
            <div>
              <div className="text-5xl font-semibold text-blue-400 mb-2">100%</div>
              <div className="text-gray-400">Secure Payments</div>
              <p className="mt-2 text-sm text-gray-500">PCI-compliant payment processing via trusted providers.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Security and privacy first.
          </h2>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Secure password hashing, role-based access control, server-side authorization, input validation, and secure payment integration. We never store raw payment card information.
          </p>
        </Container>
      </Section>

      <Section id="contact" className="bg-gray-50">
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

      <footer className="bg-gray-50 border-t border-gray-200 py-8">
          <Container className="text-center text-sm text-gray-400">
            © 2026 Rizan Technologies. All rights reserved.
          </Container>
      </footer>
    </main>
  );
}
