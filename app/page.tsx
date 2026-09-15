"use client";

import { useState } from "react";

const accidents = [
  {
    flight: "Air France 447",
    flightZh: "法国航空447号班机",
    date: "June 1, 2009",
    aircraft: "Airbus A330-203",
    location: "Atlantic Ocean",
    locationZh: "大西洋",
    agency: "BEA France",
    status: "Final report available",
  },
  {
    flight: "United Airlines 232",
    flightZh: "美国联合航空232号班机",
    date: "July 19, 1989",
    aircraft: "McDonnell Douglas DC-10",
    location: "Sioux City, United States",
    locationZh: "美国苏城",
    agency: "NTSB",
    status: "Final report available",
  },
  {
    flight: "Japan Airlines 123",
    flightZh: "日本航空123号班机",
    date: "August 12, 1985",
    aircraft: "Boeing 747SR",
    location: "Gunma, Japan",
    locationZh: "日本群马县",
    agency: "AAIC Japan",
    status: "Final report available",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredAccidents = accidents.filter((accident) =>
    Object.values(accident)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-semibold tracking-wide">
              AeroSafety Archive
            </h1>
            <p className="text-sm text-slate-400">航空安全档案</p>
          </div>

          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#database" className="hover:text-white">
              Database / 数据库
            </a>
            <a href="#about" className="hover:text-white">
              About / 关于
            </a>
            <button className="rounded-md border border-slate-700 px-3 py-2 hover:border-slate-500">
              中文 / EN
            </button>
          </nav>
        </div>
      </header>

      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Aviation safety research
          </p>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Explore aviation accidents through verified records.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            通过经过核对的事故资料、官方调查报告与飞行数据可视化，
            了解事故经过和航空安全改进。
          </p>

          <div className="mt-10 max-w-3xl">
            <label htmlFor="search" className="mb-2 block text-sm text-slate-300">
              Search by flight, aircraft or location / 搜索航班、机型或地点
            </label>
            <input
              id="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Try: Air France 447, A330, Japan..."
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-5 py-4 text-base outline-none transition focus:border-amber-400"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-8 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
          <p className="text-3xl font-bold text-white">{accidents.length}</p>
          <p className="mt-1 text-sm text-slate-400">
            Verified records / 已核对记录
          </p>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
          <p className="text-3xl font-bold text-white">3</p>
          <p className="mt-1 text-sm text-slate-400">
            Investigation agencies / 调查机构
          </p>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
          <p className="text-3xl font-bold text-white">2</p>
          <p className="mt-1 text-sm text-slate-400">
            Languages / 网站语言
          </p>
        </div>
      </section>

      <section id="database" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-amber-400">
              ACCIDENT DATABASE
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Accident records / 事故记录
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            Showing {filteredAccidents.length} records
          </p>
        </div>

        <div className="grid gap-4">
          {filteredAccidents.map((accident) => (
            <article
              key={accident.flight}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-600"
            >
              <div className="flex flex-col justify-between gap-5 md:flex-row">
                <div>
                  <p className="text-sm text-amber-400">{accident.date}</p>
                  <h3 className="mt-2 text-xl font-semibold">
                    {accident.flight}
                  </h3>
                  <p className="mt-1 text-slate-400">{accident.flightZh}</p>
                </div>

                <div className="grid min-w-[55%] grid-cols-1 gap-4 text-sm sm:grid-cols-3">
                  <div>
                    <p className="text-slate-500">Aircraft / 机型</p>
                    <p className="mt-1 text-slate-200">{accident.aircraft}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Location / 地点</p>
                    <p className="mt-1 text-slate-200">{accident.location}</p>
                    <p className="text-slate-400">{accident.locationZh}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Investigator / 调查机构</p>
                    <p className="mt-1 text-slate-200">{accident.agency}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {filteredAccidents.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-700 p-12 text-center text-slate-400">
              No matching records / 没有找到匹配的事故记录
            </div>
          )}
        </div>
      </section>

      <footer
        id="about"
        className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500"
      >
        Independent educational project. Not an official investigation source.
        <br />
        独立教育项目，并非官方事故调查机构。
      </footer>
    </main>
  );
}
