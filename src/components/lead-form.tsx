"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  teamSize: "10-25",
};

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Unable to submit the request.");
      }

      setStatus("success");
      setMessage(payload.message ?? "Thanks! Your request has been received.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.38)] backdrop-blur"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Request a demo
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white">
          Test the lead-to-booking flow
        </h3>
      </div>

      <label className="grid gap-2 text-sm text-slate-200">
        Full name
        <input
          required
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
          placeholder="Akhil Sharma"
        />
      </label>

      <label className="grid gap-2 text-sm text-slate-200">
        Work email
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
          placeholder="akhil@serviceops.com"
        />
      </label>

      <label className="grid gap-2 text-sm text-slate-200">
        Company
        <input
          required
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
          placeholder="ServiceOps Pro"
        />
      </label>

      <label className="grid gap-2 text-sm text-slate-200">
        Team size
        <select
          value={form.teamSize}
          onChange={(event) => updateField("teamSize", event.target.value)}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
        >
          <option value="1-10">1-10</option>
          <option value="10-25">10-25</option>
          <option value="25-50">25-50</option>
          <option value="50+">50+</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-2xl bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-cyan-100"
      >
        {status === "loading" ? "Sending..." : "Submit request"}
      </button>

      <p
        className={`min-h-6 text-sm ${
          status === "error" ? "text-rose-300" : "text-emerald-300"
        }`}
      >
        {message}
      </p>
    </form>
  );
}
