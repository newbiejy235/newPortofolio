import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token || !username) {
    return NextResponse.json(
      { error: "GitHub environment variables belum diatur." },
      { status: 500 }
    );
  }

  const query = `
    query ($username: String!) {
      user(login: $username) {
        login
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
                weekday
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(
      "https://api.github.com/graphql",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables: { username },
        }),
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Gagal mengambil data dari GitHub." },
        { status: 502 }
      );
    }

    const result = await response.json();

    if (result.errors || !result.data?.user) {
      return NextResponse.json(
        { error: "Data GitHub tidak ditemukan atau token tidak valid." },
        { status: 502 }
      );
    }

    const calendar =
      result.data.user.contributionsCollection.contributionCalendar;

    return NextResponse.json({
      username: result.data.user.login,
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
    });
  } catch {
    return NextResponse.json(
      { error: "Tidak dapat terhubung ke GitHub." },
      { status: 502 }
    );
  }
}