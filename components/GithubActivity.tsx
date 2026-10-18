"use client";

import { useEffect, useState } from "react";

type ContributionDay = {
  date: string;
  contributionCount: number;
  contributionLevel: string;
  weekday: number;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type GitHubData = {
  username: string;
  totalContributions: number;
  weeks: ContributionWeek[];
};

const levelColors: Record<string, string> = {
  NONE: "#e9e9e7",
  FIRST_QUARTILE: "#d5f5a3",
  SECOND_QUARTILE: "#a9ed5d",
  THIRD_QUARTILE: "#72cf32",
  FOURTH_QUARTILE: "#347d16",
};

export default function GithubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadContributions() {
      try {
        const response = await fetch("/api/github-contributions");

        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }

        const result: GitHubData = await response.json();
        setData(result);
      } catch {
        setError(true);
      }
    }

    loadContributions();
  }, []);

  if (error) {
    return (
      <p className="text-sm text-neutral-500">
        Data kontribusi GitHub gagal dimuat.
      </p>
    );
  }

  if (!data) {
    return (
      <p className="text-sm text-neutral-500">
        Memuat aktivitas GitHub...
      </p>
    );
  }

  return (
    <section className="w-full border border-neutral-200 bg-white p-5 text-neutral-900 sm:p-7">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Open source / Activity
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            GitHub Contributions
          </h2>
        </div>

        <a
          href={`https://github.com/${data.username}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm underline underline-offset-4"
        >
          @{data.username} ↗
        </a>
      </div>

      <p className="mb-5 text-sm text-neutral-600">
        <strong className="text-neutral-900">
          {data.totalContributions.toLocaleString("en-US")}
        </strong>{" "}
        contributions in the last year
      </p>

      <div className="overflow-x-auto pb-3">
        <div className="flex min-w-max gap-[4px]">
          {data.weeks.map((week, weekIndex) => (
            <div
              key={`${weekIndex}-${week.contributionDays[0]?.date}`}
              className="flex flex-col gap-[4px]"
            >
              {Array.from({ length: 7 }, (_, weekday) => {
                const day = week.contributionDays.find(
                  (item) => item.weekday === weekday
                );

                if (!day) {
                  return (
                    <div
                      key={weekday}
                      className="h-[11px] w-[11px]"
                    />
                  );
                }

                return (
                  <div
                    key={day.date}
                    title={`${day.contributionCount} contributions on ${day.date}`}
                    aria-label={`${day.contributionCount} contributions on ${day.date}`}
                    className="h-[11px] w-[11px] rounded-[2px] transition-transform hover:scale-125"
                    style={{
                      backgroundColor:
                        levelColors[day.contributionLevel] ??
                        levelColors.NONE,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 text-xs text-neutral-500">

        <div className="flex items-center gap-[4px] ">
        <span className="mr-2">Less</span>
          {Object.values(levelColors).map((color) => (
            <div
              key={color}
              className="h-[11px] w-[11px] rounded-[2px]"
              style={{ backgroundColor: color }}
            />
          ))}
        <span className="ml-2">More</span>
        </div>

      </div>

      <div className="mt-5 border-t border-neutral-200 pt-4">
        <p className="text-xs text-neutral-500">
          Data provided by GitHub GraphQL API
        </p>
      </div>
    </section>
  );
}