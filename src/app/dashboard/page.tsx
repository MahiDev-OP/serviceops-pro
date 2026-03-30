import Link from "next/link";
import { ArrowLeft, BarChart3, CalendarRange, CircleGauge } from "lucide-react";

import { DashboardBoard } from "@/components/dashboard-board";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eff6ff_100%)] text-slate-950">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-950"
            >
              <ArrowLeft size={16} />
              Back to overview
            </Link>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              ServiceOps control center
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-slate-600">
              This dashboard shows the product side of the project: queue health, revenue
              visibility, and a lightweight end-to-end work order flow.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-sm">
            <BarChart3 className="text-cyan-700" />
            <h2 className="mt-4 text-lg font-semibold">Revenue pipeline</h2>
            <p className="mt-2 text-sm text-slate-600">
              Forecast visibility across emergency repairs, preventive maintenance, and site
              renewals.
            </p>
          </article>
          <article className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-sm">
            <CalendarRange className="text-cyan-700" />
            <h2 className="mt-4 text-lg font-semibold">Dispatch planning</h2>
            <p className="mt-2 text-sm text-slate-600">
              Coordinate technicians, ETAs, and service windows while keeping client updates in
              sync.
            </p>
          </article>
          <article className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-sm">
            <CircleGauge className="text-cyan-700" />
            <h2 className="mt-4 text-lg font-semibold">SLA performance</h2>
            <p className="mt-2 text-sm text-slate-600">
              Surface bottlenecks before they hurt response times or monthly retention.
            </p>
          </article>
        </div>

        <DashboardBoard />
      </section>
    </main>
  );
}
