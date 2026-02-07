"use client";

import { useMemo, useState } from "react";
import { ScheduleTable } from "@/components/schedule-table";

type ScheduleItem = {
  day: string;
  time: string;
  program: string;
  coach: string;
};

export function ScheduleFilter({
  items,
  programs,
}: {
  items: ScheduleItem[];
  programs: string[];
}) {
  const [selected, setSelected] = useState("All Programs");

  const filtered = useMemo(() => {
    if (selected === "All Programs") return items;
    return items.filter((item) => item.program === selected);
  }, [items, selected]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        {["All Programs", ...programs].map((program) => (
          <button
            key={program}
            type="button"
            onClick={() => setSelected(program)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
              selected === program
                ? "border-ember bg-ember/20 text-white"
                : "border-white/10 text-sand/60 hover:border-white/30"
            }`}
          >
            {program}
          </button>
        ))}
      </div>
      <ScheduleTable items={filtered} />
    </div>
  );
}
