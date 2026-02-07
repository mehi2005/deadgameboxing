"use client";

type ScheduleItem = {
  day: string;
  time: string;
  program: string;
  coach: string;
};

export function ScheduleTable({ items }: { items: ScheduleItem[] }) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-ink/10">
      <table className="min-w-[640px] w-full text-left text-sm text-sand/70">
        <thead className="bg-ink/5 text-xs uppercase tracking-[0.3em] text-sand/50">
          <tr>
            <th className="px-5 py-4">Day</th>
            <th className="px-5 py-4">Time</th>
            <th className="px-5 py-4">Program</th>
            <th className="px-5 py-4">Coach</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/10">
          {items.map((item, index) => (
            <tr key={`${item.day}-${item.time}-${index}`} className="bg-fog/80">
              <td className="px-5 py-4 text-sand">{item.day}</td>
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
