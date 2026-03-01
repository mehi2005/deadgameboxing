"use client";

import { useMemo } from "react";

type ScheduleItem = {
  day: string;
  time: string;
  program: string;
  coach: string;
  durationMinutes?: number;
};

const DAY_ORDER = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

type ProgramStyle = {
  swatch: string;
  fill: string;
  title: string;
  meta: string;
};

const PROGRAM_STYLES = [
  {
    swatch: "border-emerald-300/80 bg-emerald-600",
    fill: "bg-emerald-600",
    title: "text-white",
    meta: "text-white/80",
  },
  {
    swatch: "border-violet-300/80 bg-violet-600",
    fill: "bg-violet-600",
    title: "text-white",
    meta: "text-white/80",
  },
  {
    swatch: "border-yellow-200/90 bg-yellow-400",
    fill: "bg-yellow-400",
    title: "text-black",
    meta: "text-black/70",
  },
  {
    swatch: "border-red-300/80 bg-red-600",
    fill: "bg-red-600",
    title: "text-white",
    meta: "text-white/80",
  },
  {
    swatch: "border-sky-300/80 bg-sky-600",
    fill: "bg-sky-600",
    title: "text-white",
    meta: "text-white/80",
  },
  {
    swatch: "border-pink-300/80 bg-pink-600",
    fill: "bg-pink-600",
    title: "text-white",
    meta: "text-white/80",
  },
  {
    swatch: "border-orange-200/90 bg-orange-500",
    fill: "bg-orange-500",
    title: "text-black",
    meta: "text-black/70",
  },
  {
    swatch: "border-cyan-200/90 bg-cyan-500",
    fill: "bg-cyan-500",
    title: "text-black",
    meta: "text-black/70",
  },
] satisfies ProgramStyle[];

const FALLBACK_STYLE: ProgramStyle = {
  swatch: "border-white/40 bg-white/20",
  fill: "bg-white/20",
  title: "text-white",
  meta: "text-white/80",
};

function parseTimeToMinutes(value: string) {
  const [timePart, meridiemPart] = value.trim().split(" ");
  const [rawHours, rawMinutes] = timePart.split(":");
  let hours = Number(rawHours) % 12;
  const minutes = Number(rawMinutes);
  if (meridiemPart?.toUpperCase() === "PM") {
    hours += 12;
  }
  return hours * 60 + minutes;
}

function formatMinutesToTime(totalMinutes: number) {
  const normalized = ((totalMinutes % 1440) + 1440) % 1440;
  const hours24 = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  const meridiem = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 || 12;
  return `${hours12}:${String(minutes).padStart(2, "0")} ${meridiem}`;
}

function getTimeRangeLabel(startTime: string, durationMinutes: number) {
  const startMinutes = parseTimeToMinutes(startTime);
  const endMinutes = startMinutes + durationMinutes;
  return `${formatMinutesToTime(startMinutes)} - ${formatMinutesToTime(endMinutes)}`;
}

export function ScheduleFilter({
  items,
  programs,
}: {
  items: ScheduleItem[];
  programs: string[];
}) {
  const programOptions = useMemo(() => {
    const usedPrograms = Array.from(new Set(items.map((item) => item.program)));
    const prioritized = programs.filter((program) => usedPrograms.includes(program));
    const extras = usedPrograms.filter((program) => !prioritized.includes(program));
    return [...prioritized, ...extras];
  }, [items, programs]);

  const dayColumns = DAY_ORDER;

  const timeRows = useMemo(() => {
    const uniqueTimes = Array.from(new Set(items.map((item) => item.time)));
    return uniqueTimes.sort(
      (a, b) => parseTimeToMinutes(a) - parseTimeToMinutes(b)
    );
  }, [items]);

  const slotMap = useMemo(() => {
    const map = new Map<string, ScheduleItem[]>();
    for (const item of items) {
      const key = `${item.day}|${item.time}`;
      const slotItems = map.get(key) ?? [];
      slotItems.push(item);
      map.set(key, slotItems);
    }
    return map;
  }, [items]);

  const programStyleMap = useMemo(() => {
    const map = new Map<string, ProgramStyle>();
    for (const [index, program] of programOptions.entries()) {
      map.set(program, PROGRAM_STYLES[index % PROGRAM_STYLES.length]);
    }
    return map;
  }, [programOptions]);

  const programCoachMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const program of programOptions) {
      const coaches = Array.from(
        new Set(
          items
            .filter((item) => item.program === program)
            .map((item) => item.coach)
        )
      );
      map.set(program, coaches.join(", "));
    }
    return map;
  }, [items, programOptions]);

  return (
    <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
      <aside className="surface-card h-fit rounded-3xl p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-sand/55">
          Programs
        </p>
        <p className="mt-3 text-sm text-sand/70">
          Full weekly schedule is shown on the right. Each class uses its own
          color block for quick scanning.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          {programOptions.map((program) => {
            const totalSessions = items.filter((item) => item.program === program).length;
            const style = programStyleMap.get(program) ?? FALLBACK_STYLE;
            const coaches = programCoachMap.get(program);

            return (
              <div
                key={program}
                className="flex w-full items-center justify-between rounded-2xl border border-ink/15 bg-fog-soft/45 px-4 py-3 text-sm text-sand/80"
              >
                <div className="flex items-center gap-3 pr-3">
                  <span className={`h-4 w-4 rounded-sm border ${style.swatch}`} />
                  <div>
                    <p>{program}</p>
                    <p className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-sand/55">
                      {coaches}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-fog-lift/85 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-sand/60">
                  {totalSessions}
                </span>
              </div>
            );
          })}
        </div>
      </aside>

      <div className="surface-card overflow-hidden rounded-3xl">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-separate border-spacing-0 text-left">
            <thead className="bg-fog-lift/55 text-xs uppercase tracking-[0.28em] text-sand/55">
              <tr>
                {dayColumns.map((day) => (
                  <th
                    key={day}
                    className="border-b border-ink/10 px-2 py-4 md:px-3"
                  >
                    {day.slice(0, 3)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeRows.map((time) => (
                <tr key={time} className="align-top">
                  {dayColumns.map((day) => {
                    const slotItems = slotMap.get(`${day}|${time}`) ?? [];

                    return (
                      <td
                        key={`${day}-${time}`}
                        className="min-w-[124px] border-b border-l border-ink/10 p-0"
                      >
                        {slotItems.length === 0 ? (
                          <div className="min-h-[96px] bg-fog-soft/20" />
                        ) : (
                          <div className="flex min-h-[96px] flex-col">
                            {slotItems.map((entry, index) => {
                              const style = programStyleMap.get(entry.program) ?? FALLBACK_STYLE;
                              const durationMinutes = entry.durationMinutes ?? 60;
                              const timeRange = getTimeRangeLabel(entry.time, durationMinutes);
                              return (
                                <div
                                  key={`${entry.program}-${entry.coach}-${index}`}
                                  className={`flex flex-1 flex-col justify-between px-3 py-3 ${style.fill} ${
                                    index < slotItems.length - 1 ? "border-b border-white" : ""
                                  }`}
                                >
                                  <p
                                    className={`text-xs font-semibold uppercase tracking-[0.08em] leading-tight ${style.title}`}
                                  >
                                    {entry.program}
                                  </p>
                                  <p
                                    className={`mt-2 text-[11px] tracking-[0.06em] ${style.meta}`}
                                  >
                                    {timeRange}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
