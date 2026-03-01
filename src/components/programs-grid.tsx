"use client";

import { useEffect, useMemo, useState } from "react";
import { programs as allPrograms } from "@/lib/data";
import { ProgramCard } from "@/components/program-card";
import { ScrollReveal } from "@/components/scroll-reveal";

type Program = (typeof allPrograms)[number];

type ProgramItem = {
  program: Program;
  index: number;
};

function getColumnCount(width: number) {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

export function ProgramsGrid({
  items = allPrograms,
  maxColumns,
  className,
}: {
  items?: Program[];
  maxColumns?: number;
  className?: string;
}) {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const next = getColumnCount(window.innerWidth);
      setColumns(maxColumns ? Math.min(next, maxColumns) : next);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxColumns]);

  const columned = useMemo(() => {
    const normalized: ProgramItem[] = items.map((program, index) => ({
      program,
      index,
    }));
    const cols: ProgramItem[][] = Array.from({ length: columns }, () => []);
    normalized.forEach((item) => {
      cols[item.index % columns].push(item);
    });
    return cols;
  }, [columns, items]);

  return (
    <div
      className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${
        className ?? ""
      }`.trim()}
    >
      {columned.map((column, columnIndex) => (
        <div key={columnIndex} className="flex min-w-0 flex-col gap-6">
          {column.map((item) => (
            <ScrollReveal
              key={item.program.slug}
              from="fade"
              durationMs={1000}
              delayMs={item.index * 120}
            >
              <ProgramCard program={item.program} />
            </ScrollReveal>
          ))}
        </div>
      ))}
    </div>
  );
}
