"use client"

import { useEffect, useState } from "react"

type ContributionDay = {
  date: string
  contributionCount: number
  contributionLevel: string
  weekday: number
}

type ContributionWeek = {
  contributionDays: ContributionDay[]
}

type GitHubData = {
  username: string
  totalContributions: number
  weeks: ContributionWeek[]
}

const levelColors: Record<string, string> = {
  NONE: "var(--contribution-none)",
  FIRST_QUARTILE: "var(--contribution-first)",
  SECOND_QUARTILE: "var(--contribution-second)",
  THIRD_QUARTILE: "var(--contribution-third)",
  FOURTH_QUARTILE: "var(--contribution-fourth)",
}

const weekdayLabels: Record<number, string> = {
  1: "Mon",
  3: "Wed",
  5: "Fri",
}

export default function GithubActivity() {
  const [data, setData] = useState<GitHubData | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadContributions() {
      try {
        const response = await fetch("/api/github-contributions")

        if (!response.ok) {
          throw new Error("Gagal mengambil data")
        }

        const result: GitHubData = await response.json()
        setData(result)
      } catch {
        setError(true)
      }
    }

    loadContributions()
  }, [])

  if (error) {
    return (
      <p className="w-full max-w-[720px] rounded-md border border-border bg-[var(--content-background)] p-5 text-sm text-muted-foreground sm:p-7">
        Data kontribusi GitHub gagal dimuat.
      </p>
    )
  }

  if (!data) {
    return (
      <p className="w-full max-w-[720px] rounded-md border border-border bg-[var(--content-background)] p-5 text-sm text-muted-foreground sm:p-7">
        Memuat aktivitas GitHub...
      </p>
    )
  }

  return (
    <section className="w-full max-w-[720px] rounded-md border border-border bg-[var(--content-background)] p-4 text-foreground sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-foreground">
          {data.totalContributions.toLocaleString("en-US")} contributions in the
          last year
        </p>
        <a
          href={`https://github.com/${data.username}`}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          @{data.username} ↗
        </a>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="w-max">
          <div className="mb-2 flex">
            <div className="w-8 shrink-0" aria-hidden="true" />
            <div className="flex gap-[3px]">
              {data.weeks.map((week, weekIndex) => {
                const monthDay =
                  week.contributionDays.find(
                    (day) => day.date.slice(-2) === "01"
                  ) ?? (weekIndex === 0 ? week.contributionDays[0] : undefined)
                const monthLabel = monthDay
                  ? new Date(`${monthDay.date}T00:00:00`).toLocaleDateString(
                      "en-US",
                      { month: "short" }
                    )
                  : ""

                return (
                  <div
                    key={`month-${weekIndex}`}
                    className="relative h-4 w-[11px] shrink-0"
                  >
                    {monthLabel && (
                      <span className="absolute left-0 text-[10px] whitespace-nowrap text-muted-foreground">
                        {monthLabel}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex">
            <div className="mr-2 flex w-6 shrink-0 flex-col gap-[3px] text-[9px] text-muted-foreground">
              {Array.from({ length: 7 }, (_, weekday) => (
                <span key={weekday} className="flex h-[11px] items-center">
                  {weekdayLabels[weekday] ?? ""}
                </span>
              ))}
            </div>

            <div
              aria-label="Contribution activity by day for the last year"
              className="flex gap-[3px]"
              role="grid"
            >
              {data.weeks.map((week, weekIndex) => (
                <div
                  key={`${weekIndex}-${week.contributionDays[0]?.date}`}
                  className="flex flex-col gap-[3px]"
                  role="row"
                >
                  {Array.from({ length: 7 }, (_, weekday) => {
                    const day = week.contributionDays.find(
                      (item) => item.weekday === weekday
                    )

                    if (!day) {
                      return (
                        <span
                          key={weekday}
                          className="size-[11px]"
                          aria-hidden="true"
                        />
                      )
                    }

                    return (
                      <span
                        key={day.date}
                        title={`${day.contributionCount} contributions on ${day.date}`}
                        aria-label={`${day.contributionCount} contributions on ${day.date}`}
                        className="size-[11px] rounded-[2px] outline outline-1 outline-border transition-colors hover:outline-foreground"
                        role="gridcell"
                        style={{
                          backgroundColor:
                            levelColors[day.contributionLevel] ??
                            levelColors.NONE,
                        }}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[10px] text-muted-foreground">
        <a
          href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graph-settings/viewing-contributions-on-your-profile"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-foreground"
        >
          Learn how we count contributions
        </a>
        <div className="flex items-center gap-[3px]">
          <span className="mr-1">Less</span>
          {Object.values(levelColors).map((color) => (
            <span
              key={color}
              className="size-[11px] rounded-[2px]"
              style={{ backgroundColor: color }}
            />
          ))}
          <span className="ml-1">More</span>
        </div>
      </div>
    </section>
  )
}
