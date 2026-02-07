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
      <table className="min-w-[520px] w-full text-left text-xs text-sand/70 sm:min-w-[640px] sm:text-sm">
        <thead className="bg-ink/5 text-[10px] uppercase tracking-[0.3em] text-sand/50 sm:text-xs">
          <tr>
            <th className="px-4 py-3 sm:px-6 sm:py-4">Day</th>
            <th className="px-4 py-3 sm:px-6 sm:py-4">Time</th>
            <th className="px-4 py-3 sm:px-6 sm:py-4">Program</th>
            <th className="px-4 py-3 sm:px-6 sm:py-4">Coach</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/10">
          {items.map((item, index) => (
            <tr key={`${item.day}-${item.time}-${index}`} className="bg-fog/80">
              <td className="px-4 py-3 text-sand sm:px-6 sm:py-4">{item.day}</td>
              <td className="px-4 py-3 sm:px-6 sm:py-4">{item.time}</td>
              <td className="px-4 py-3 sm:px-6 sm:py-4">{item.program}</td>
              <td className="px-4 py-3 sm:px-6 sm:py-4">{item.coach}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
