import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Headset,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { LeadForm } from "@/components/lead-form";
import { capabilities, metrics, serviceOrders, testimonials } from "@/data/service-data";

export default function Home() {
  return (
    <main className="overflow-hidden bg-slate-950 text-slate-50">
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.24),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_24%),linear-gradient(160deg,#020617_0%,#0f172a_48%,#082f49_100%)]" />
        <div className="mx-auto grid min-h-screen w-full max-w-7xl gap-14 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-16">
          <div className="flex flex-col justify-between gap-12">
            <div className="space-y-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
                <Sparkles size={16} />
                Next.js service management product demo
              </div>
              <div className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  A strong end-to-end Next.js project for a 2+ year developer role.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  ServiceOps Pro is a portfolio-ready field service management app with a polished
                  landing experience, API-backed lead capture, and a live dashboard workflow you
                  can show in interviews.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Open operations dashboard
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="#workflow"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore features
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-sm text-slate-300">{metric.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:pt-14">
            <LeadForm />
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-[#f8fafc] text-slate-950">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700">
              Why this project works
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Product thinking, frontend polish, and backend flow in one build.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <CheckCircle2 className="text-cyan-700" />
                <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ecfeff] text-slate-950">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700">
              Core flow
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              From inbound request to completed job.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              The live demo lets you submit a request, move through a realistic operations board,
              and present business-oriented UI decisions instead of only code snippets.
            </p>
            <div className="grid gap-4">
              {[
                "Landing page captures a qualified lead with an API route.",
                "Dashboard visualizes work orders and operational KPIs.",
                "Interactive board advances job stages and persists in local storage.",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-[24px] border border-cyan-100 bg-white px-5 py-4 text-slate-700 shadow-sm"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_22px_60px_rgba(8,47,73,0.12)]">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <ClipboardList className="text-cyan-700" />
              <div>
                <h3 className="text-lg font-semibold">Live job queue snapshot</h3>
                <p className="text-sm text-slate-500">Example service orders shown in the demo</p>
              </div>
            </div>
            <div className="mt-5 grid gap-4">
              {serviceOrders.slice(0, 4).map((order) => (
                <article key={order.id} className="rounded-[24px] bg-slate-50 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">
                      {order.id}
                    </p>
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
                      {order.status}
                    </span>
                  </div>
                  <h4 className="mt-3 text-lg font-semibold">{order.service}</h4>
                  <p className="mt-1 text-slate-600">
                    {order.client} • {order.city}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-950">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700">
              Interview talking points
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Easy to explain, deeper than a template.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              This project gives you a crisp story around App Router, route handlers, reusable
              components, responsive UI, state persistence, and deployment readiness.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              {
                icon: Headset,
                title: "Business domain clarity",
                body: "Built around service operations, dispatching, work orders, and revenue dashboards so the project feels like a real SaaS product.",
              },
              {
                icon: ShieldCheck,
                title: "Clean architecture",
                body: "Data, interactive components, and route handlers are separated cleanly for maintainability and interview discussion.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-[30px] border border-slate-200 bg-slate-50 p-6"
              >
                <Icon className="text-cyan-700" />
                <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
              Feedback framing
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              What this signals in a hiring round.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-[30px] border border-white/10 bg-white/5 p-7 text-slate-200"
              >
                <p className="text-lg leading-8">“{item.quote}”</p>
                <p className="mt-5 font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
