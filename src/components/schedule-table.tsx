"use client";

type ScheduleItem = {
  day: string;
  time: string;
  program: string;
  coach: string;
};

export function ScheduleTable({ items }: { items: ScheduleItem[] }) {
  return (
    <div className="surface-card overflow-x-auto rounded-3xl">
      <table className="min-w-[640px] w-full text-left text-sm text-sand/74">
        <thead className="bg-fog-lift/60 text-xs uppercase tracking-[0.3em] text-sand/55">
          <tr>
            <th className="px-5 py-4">Day</th>
            <th className="px-5 py-4">Time</th>
            <th className="px-5 py-4">Program</th>
            <th className="px-5 py-4">Coach</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/10">
          {items.map((item, index) => (
            <tr
              key={`${item.day}-${item.time}-${index}`}
              className="bg-fog-soft/60 transition hover:bg-fog-lift/70"
            >
              <td className="px-5 py-4 text-ink-soft">{item.day}</td>
              <td className="px-5 py-4">{item.time}</td>
              <td className="px-5 py-4">{item.program}</td>
              <td className="px-5 py-4">{item.coach}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
