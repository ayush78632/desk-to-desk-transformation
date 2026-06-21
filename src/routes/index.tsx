import { createFileRoute } from "@tanstack/react-router";
import ebookBlueprint from "@/assets/ebook-blueprint.png";
import ebookMeal from "@/assets/ebook-meal.png";
import ebookWorkout from "@/assets/ebook-workout.png";
import ebookCalorie from "@/assets/ebook-calorie.png";
import transformationMale from "@/assets/transformation-male.jpg";
import transformationFemale from "@/assets/transformation-female.jpg";

const CTA_URL = "https://superprofile.bio/vp/the-indian-office-worker-s-weight-loss-blueprint";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Indian Office Worker's Weight Loss Blueprint — ₹199" },
      {
        name: "description",
        content:
          "Lose weight without giving up Indian food or joining a gym. A step-by-step blueprint built for desk-bound Indian professionals. One-time ₹199.",
      },
      { property: "og:title", content: "The Indian Office Worker's Weight Loss Blueprint" },
      {
        property: "og:description",
        content:
          "Step-by-step weight loss system for Indian office workers. Indian meal plans, 30-min home workouts, calorie handbook. ₹199 one-time.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function CTAButton({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <a
      id={id}
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-base sm:text-lg font-bold text-primary-foreground shadow-gold transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] " +
        className
      }
    >
      {children}
    </a>
  );
}

function SectionTitle({ kicker, children }: { kicker?: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 text-center">
      {kicker && (
        <span className="mb-3 inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">{children}</h2>
    </div>
  );
}

function Landing() {
  const bundle = [
    { img: ebookBlueprint, emoji: "📘", title: "90-Day Weight Loss Blueprint", desc: "Your step-by-step roadmap from day 1 to day 90." },
    { img: ebookMeal, emoji: "🥗", title: "Indian Meal Plan Guide", desc: "Real Indian meals — dal, sabzi, roti — that help you lose weight." },
    { img: ebookWorkout, emoji: "🏠", title: "30-Minute Home Workout System", desc: "Zero equipment. Done before your morning chai." },
    { img: ebookCalorie, emoji: "📊", title: "Indian Food Calorie Handbook", desc: "Calories for 200+ Indian foods — finally in one place." },
  ];

  const why = [
    { emoji: "💺", title: "Long Sitting Hours", solution: "Simple movement system you can do at your desk." },
    { emoji: "🍛", title: "Indian Food Cravings", solution: "Flexible Indian meal plans — no boring salads." },
    { emoji: "⏰", title: "No Time", solution: "30-minute workouts. Zero gym commute." },
    { emoji: "💰", title: "Expensive Diets", solution: "Budget-friendly, kitchen-staple ingredients." },
  ];

  const testimonials = [
    { quote: "I work in IT and sit all day. The meal plan alone helped me lose 5 kg.", name: "Rahul", city: "Pune" },
    { quote: "The calorie handbook changed everything.", name: "Priya", city: "Mumbai" },
    { quote: "Simple and practical for Indian lifestyles.", name: "Aman", city: "Delhi" },
    { quote: "No gym. No fancy foods. Just results.", name: "Sneha", city: "Bengaluru" },
    { quote: "Worth far more than ₹199.", name: "Rohit", city: "Hyderabad" },
    { quote: "Easy to follow and beginner friendly.", name: "Neha", city: "Chennai" },
  ];

  const inside = [
    "90-Day Roadmap",
    "Weekly Tracking System",
    "Indian Meal Plans",
    "Home Workout Plans",
    "Calorie Tracking Guide",
    "Lifetime Access",
    "Instant Download",
  ];

  const faqs = [
    { q: "Is this a physical product?", a: "No. This is a digital download you get instantly." },
    { q: "Do I need a gym?", a: "No. Everything is designed for home." },
    { q: "Is this suitable for beginners?", a: "Yes. Zero experience needed." },
    { q: "Will I receive it instantly?", a: "Yes, immediately after payment." },
    { q: "Can vegetarians follow it?", a: "Yes. Veg and non-veg options included." },
  ];

  return (
    <main className="min-h-screen pb-28 sm:pb-0">
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-gold">
            🇮🇳 Built for Indian Office Workers
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-foreground">
            Your Job Is Making You <span className="text-gradient-gold">Gain Weight.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Most Indian office workers gain weight because they sit for 8–10 hours daily. This step-by-step
            system shows you how to lose weight <strong className="text-foreground">without giving up Indian food</strong>,
            joining a gym, or spending hours exercising.
          </p>

          <ul className="mx-auto mt-7 grid max-w-xl grid-cols-1 gap-2 text-left sm:grid-cols-2">
            {["No Gym Required", "Indian Foods You Already Eat", "30-Minute Home Workouts", "Beginner Friendly", "Instant Digital Access"].map((b) => (
              <li key={b} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-foreground">
                <span className="text-gold">✅</span> {b}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-gold/30 bg-card/60 p-5 shadow-card backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">🔥 One-Time Payment</p>
            <p className="mt-1 text-5xl font-extrabold text-gradient-gold">₹199</p>
            <p className="mt-1 text-sm text-muted-foreground">Lifetime access. No subscription.</p>
          </div>

          <div className="mt-7 flex justify-center">
            <CTAButton>Start My Transformation 🚀</CTAButton>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">⚡ Instant download · 🔒 Secure checkout</p>
        </div>
      </section>

      {/* BUNDLE */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="The Bundle">Everything You Need To Start Losing Weight</SectionTitle>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bundle.map((b) => (
              <div key={b.title} className="group rounded-2xl border border-border bg-card p-6 text-center shadow-card transition hover:-translate-y-1 hover:border-gold/40">
                <div className="mx-auto mb-4 flex h-56 items-end justify-center">
                  <img
                    src={b.img}
                    alt={b.title}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="h-full w-auto object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105 animate-float"
                  />
                </div>
                <div className="text-2xl">{b.emoji}</div>
                <h3 className="mt-2 text-lg font-bold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton>Get The Bundle — ₹199 🚀</CTAButton>
          </div>
        </div>
      </section>

      {/* WHY THIS WORKS */}
      <section className="bg-navy-deep px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle kicker="Why It Works">Designed Specifically For Indian Office Workers</SectionTitle>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="text-3xl">{w.emoji}</div>
                <h3 className="mt-3 text-xl font-bold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm text-gold">Solution</p>
                <p className="text-base text-muted-foreground">{w.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle kicker="Results">Real Transformation Stories</SectionTitle>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              { img: transformationMale, label: "Male · Lost 11 kg in 90 days" },
              { img: transformationFemale, label: "Female · Lost 8 kg in 75 days" },
            ].map((r) => (
              <div key={r.label} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                  <img
                    src={r.img}
                    alt={r.label}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover object-bottom"
                    style={{ objectPosition: "50% 95%" }}
                  />
                  {/* Privacy blur over faces (top portion) */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[38%]"
                    style={{
                      backdropFilter: "blur(18px)",
                      WebkitBackdropFilter: "blur(18px)",
                      background: "linear-gradient(to bottom, oklch(0.13 0.04 260 / 0.55), oklch(0.13 0.04 260 / 0))",
                    }}
                  />
                </div>
                <div className="p-5">
                  <p className="text-lg font-bold text-foreground">{r.label}</p>
                  <p className="mt-1 text-xs italic text-muted-foreground">Results vary based on effort and consistency.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-navy-deep px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="Reviews">What Our Members Are Saying</SectionTitle>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="text-gold text-lg">★★★★★</div>
                <blockquote className="mt-3 text-base text-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">
                  — {t.name}, {t.city}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionTitle kicker="What's Inside">Everything Included In Your Bundle</SectionTitle>
          <ul className="space-y-3 rounded-2xl border border-border bg-card p-6 shadow-card">
            {inside.map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-border/60 pb-3 last:border-0 last:pb-0">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">✓</span>
                <span className="text-base font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <CTAButton>Unlock Everything — ₹199 🚀</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-deep px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionTitle kicker="FAQ">Quick Questions, Quick Answers</SectionTitle>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-5 shadow-card">
                <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-foreground">
                  {f.q}
                  <span className="ml-4 text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-hero relative px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground">
            Your Future Self Will <span className="text-gradient-gold">Thank You.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-muted-foreground">
            You can continue struggling with weight gain from your desk job... or start making progress today.
          </p>
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-gold/40 bg-card/70 p-6 shadow-gold backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">🔥 Complete Bundle</p>
            <p className="mt-1 text-6xl font-extrabold text-gradient-gold">₹199</p>
            <p className="mt-1 text-sm text-muted-foreground">One-time. Lifetime access.</p>
          </div>
          <div className="mt-7 flex justify-center">
            <CTAButton>Start My Transformation 🚀</CTAButton>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span>⚡ Instant Download</span>
            <span>♾️ Lifetime Access</span>
            <span>🔒 Secure Checkout</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-navy-deep px-5 py-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>Instant Download</span>
            <span>·</span>
            <span>Lifetime Access</span>
            <span>·</span>
            <span>Secure Checkout</span>
            <span>·</span>
            <span>Digital Product</span>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Indian Office Worker's Weight Loss Blueprint. All rights reserved.
          </p>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-navy-deep/95 p-3 backdrop-blur sm:hidden">
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-between rounded-full bg-gold-gradient px-5 py-3 font-bold text-primary-foreground shadow-gold"
        >
          <span>Get it for ₹199</span>
          <span>Start Now 🚀</span>
        </a>
      </div>
    </main>
  );
}
