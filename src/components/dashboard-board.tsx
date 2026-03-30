"use client";

import { useEffect, useState } from "react";

import type { ServiceOrder } from "@/data/service-data";
import { serviceOrders } from "@/data/service-data";

const storageKey = "serviceops-orders";

export function DashboardBoard() {
  const [orders, setOrders] = useState<ServiceOrder[]>(() => {
    if (typeof window === "undefined") {
      return serviceOrders;
    }

    const stored = window.localStorage.getItem(storageKey);
    return stored ? (JSON.parse(stored) as ServiceOrder[]) : serviceOrders;
  });
  const [filter, setFilter] = useState<"All" | ServiceOrder["status"]>("All");

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(orders));
  }, [orders]);

  function moveOrder(id: string) {
    setOrders((current) =>
      current.map((order) => {
        if (order.id !== id) {
          return order;
        }

        const nextStatus: Record<ServiceOrder["status"], ServiceOrder["status"]> = {
          New: "Scheduled",
          Scheduled: "In Progress",
          "In Progress": "Completed",
          Completed: "Completed",
        };

        return {
          ...order,
          status: nextStatus[order.status],
        };
      }),
    );
  }

  const visibleOrders =
    filter === "All" ? orders : orders.filter((order) => order.status === filter);

  const completed = orders.filter((order) => order.status === "Completed").length;
  const openRevenue = orders
    .filter((order) => order.status !== "Completed")
    .reduce((total, order) => total + Number(order.amount.replace(/[$,]/g, "")), 0);

  return (
    <section className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Open orders</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">{orders.length}</p>
        </article>
        <article className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Completed today</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">{completed}</p>
        </article>
        <article className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Open revenue</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">
            ${openRevenue.toLocaleString()}
          </p>
        </article>
      </div>

      <div className="flex flex-wrap gap-3">
        {(["All", "New", "Scheduled", "In Progress", "Completed"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === item
                ? "bg-slate-950 text-white"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {visibleOrders.map((order) => (
          <article
            key={order.id}
            className="grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[1.2fr_1fr_auto]"
          >
            <div className="grid gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-[0.24em] text-slate-600">
                  {order.id}
                </span>
                <span className="text-sm font-medium text-cyan-700">{order.priority} priority</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-950">{order.service}</h3>
              <p className="text-slate-600">
                {order.client} • {order.city}
              </p>
            </div>

            <div className="grid gap-2 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-950">Current stage:</span> {order.status}
              </p>
              <p>
                <span className="font-semibold text-slate-950">ETA:</span> {order.eta}
              </p>
              <p>
                <span className="font-semibold text-slate-950">Contract value:</span> {order.amount}
              </p>
            </div>

            <button
              type="button"
              onClick={() => moveOrder(order.id)}
              disabled={order.status === "Completed"}
              className="h-fit rounded-2xl bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500"
            >
              {order.status === "Completed" ? "Closed" : "Advance stage"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
