"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { accidents } from "@/lib/accidents";
import { SiteHeader } from "./components/site-header";
import { useLanguage } from "./components/language-provider";

export default function Home() {
  const router = useRouter();
  const { language } = useLanguage(); const [query,setQuery]=useState(""); const [sortBy,setSortBy]=useState("date"); const zh=language==="zh";
  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  const normalize = (value: string) => value.toLowerCase().normalize("NFKD").replace(/[^a-z0-9\u3400-\u9fff]/g, "");
  const searchParts = query.trim().split(/\s+/).map(normalize).filter(Boolean);
  const filteredResults = accidents.filter((accident) => {
    const fields = [
      ...accident.aliases,
      accident.slug,
      accident.flight.en,
      accident.flight.zh,
      accident.aircraft,
      accident.registration,
      accident.route.en,
      accident.route.zh,
      accident.location.en,
      accident.location.zh,
      accident.agency,
      accident.date,
    ].map(normalize);
    return searchParts.every((part) => fields.some((field) => field.includes(part)));
  });
  const sortableDate = (value: string) => Date.parse(value.length === 4 ? `${value}-12-31` : value);
  const results = [...filteredResults].sort((a, b) => {
    if (sortBy === "fatalities") return b.fatalities - a.fatalities || a.date.localeCompare(b.date);
    if (sortBy === "investigation") return sortableDate(a.investigationClosed) - sortableDate(b.investigationClosed) || a.date.localeCompare(b.date);
    return a.date.localeCompare(b.date);
  });
  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (query.trim() && results.length === 1) {
      router.push(`/accidents/${results[0].slug}`);
      return;
    }
    document.getElementById("database")?.scrollIntoView({ behavior: "smooth" });
  }
  return <main><SiteHeader/>
    <section className="hero"><div className="hero-grid"/><div className="container hero-content"><p className="eyebrow">{zh?"航空安全研究与数据可视化":"AVIATION SAFETY RESEARCH & VISUALIZATION"}</p><h1>{zh?"从官方记录中理解每一次事故。":"Understand each accident through official records."}</h1><p className="hero-copy">{zh?"搜索干线客机事故资料，阅读调查结论、事件时间线和飞行数据。":"Search commercial aviation accidents and explore investigation findings, timelines and flight data."}</p><form className="search-box" onSubmit={submitSearch}><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={zh?"搜索航班号、机型、注册号或地点":"Search flight, aircraft, registration or location"}/><button type="submit">{zh?"搜索":"Search"}</button></form></div></section>
    <section className="container stat-grid"><div><strong>{accidents.length}</strong><span>{zh?"已核对案例":"Verified cases"}</span></div><div><strong>{new Set(accidents.map(a=>a.agency)).size}</strong><span>{zh?"官方调查机构":"Official agencies"}</span></div></section>
    <section id="database" className="container database-section"><div className="section-heading"><div><p className="eyebrow">{zh?"事故数据库":"ACCIDENT DATABASE"}</p><h2>{zh?"浏览案例":"Explore cases"}</h2></div><div className="database-tools"><label htmlFor="sort-cases">{zh?"排序方式":"Sort by"}</label><select id="sort-cases" value={sortBy} onChange={e=>setSortBy(e.target.value)}><option value="date">{zh?"事故日期（由早到晚）":"Accident date (oldest first)"}</option><option value="fatalities">{zh?"死亡人数（由高到低）":"Fatalities (highest first)"}</option><option value="investigation">{zh?"调查结束时间（由早到晚）":"Investigation closed (oldest first)"}</option></select><span>{results.length} {zh?"条结果":"results"}</span></div></div>
      <div className="record-grid">{results.map(a=><Link href={`/accidents/${a.slug}`} className="record-card" key={a.slug}><div className="record-top"><span>{a.date}</span><span className="status">{zh?"调查已结束":"Investigation closed"}</span></div><h3>{a.flight[language]}</h3><p className="route">{a.route[language]}</p><dl><div><dt>{zh?"机型":"Aircraft"}</dt><dd>{a.aircraft}</dd></div><div><dt>{zh?"地点":"Location"}</dt><dd>{a.location[language]}</dd></div><div><dt>{zh?"调查机构":"Agency"}</dt><dd>{a.agency}</dd></div></dl><span className="read-link">{zh?"打开完整记录":"Open full record"} →</span></Link>)}</div>
      {!results.length&&<div className="empty-state">{zh?"没有找到匹配记录。":"No matching records found."}</div>}
    </section><footer>{zh?"航空安全档案 · 数据来源：官方调查机构":"AeroSafety Archive · Sources: official investigation authorities"}</footer>
  </main>;
}
