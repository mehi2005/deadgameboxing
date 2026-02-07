"use client";

type ScheduleItem = {
  day: string;
  time: string;
  program: string;
  coach: string;
};

export function ScheduleTable({ items }: { items: ScheduleItem[] }) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-white/10">
      <table className="min-w-[640px] w-full text-left text-sm text-sand/70">
        <thead className="bg-white/5 text-xs uppercase tracking-[0.3em] text-sand/50">
          <tr>
            <th className="px-6 py-4">Day</th>
            <th className="px-6 py-4">Time</th>
            <th className="px-6 py-4">Program</th>
            <th className="px-6 py-4">Coach</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {items.map((item, index) => (
            <tr key={`${item.day}-${item.time}-${index}`} className="bg-black/60">
              <td className="px-6 py-4 text-sand">{item.day}</td>
              <td className="px-6 py-4">{item.time}</td>
              <td className="px-6 py-4">{item.program}</td>
              <td className="px-6 py-4">{item.coach}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
