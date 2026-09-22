"use client";

import Link from "next/link";
import type { Accident } from "@/lib/accidents";
import { FlightChart } from "@/app/components/flight-chart";
import { SiteHeader } from "@/app/components/site-header";
import { useLanguage } from "@/app/components/language-provider";

export function AccidentDetail({ accident }: { accident: Accident }) {
  const { language } = useLanguage();
  const zh = language === "zh";
  const facts = [
    [zh ? "飞机型号" : "Aircraft", accident.aircraft], [zh ? "注册号" : "Registration", accident.registration],
    [zh ? "运营方" : "Operator", accident.operator[language]], [zh ? "事故日期" : "Date", accident.date],
    [zh ? "飞行阶段" : "Flight phase", accident.phase[language]], [zh ? "事故地点" : "Location", accident.location[language]],
    [zh ? "机上人数" : "Persons aboard", String(accident.personsOnBoard)], [zh ? "报告编号" : "Report number", accident.reportNumber],
  ];

  return <main><SiteHeader /><div className="container detail-shell">
    <Link href="/#database" className="back-link">← {zh ? "返回事故数据库" : "Back to database"}</Link>
    <section className="detail-hero"><div><p className="eyebrow">{accident.date} · {accident.agency}</p><h1>{accident.flight[language]}</h1><p>{accident.route[language]}</p></div><span className="status large">{zh ? "调查已结束" : "Investigation closed"}</span></section>
    <figure className="case-image"><img src={accident.image.url} alt={accident.image.alt[language]} /><figcaption><span>{accident.image.caption[language]}</span><a href={accident.image.sourceUrl} target="_blank" rel="noreferrer">{accident.image.credit} · {accident.image.license} ↗</a></figcaption></figure>
    <section className="fact-grid">{facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section>
    <div className="detail-layout"><article className="detail-content">
      <section><p className="eyebrow">01 / {zh ? "概况" : "OVERVIEW"}</p><h2>{zh ? "事件概述" : "Event overview"}</h2><p className="body-copy">{accident.summary[language]}</p></section>
      <section><p className="eyebrow">02 / {zh ? "调查" : "INVESTIGATION"}</p><h2>{zh ? "主要调查结论" : "Key findings"}</h2><ul className="finding-list">{accident.findings.map((finding, index) => <li key={index}><span>{String(index + 1).padStart(2, "0")}</span><p>{finding[language]}</p></li>)}</ul></section>
      <section><p className="eyebrow">03 / {zh ? "安全意义" : "SAFETY IMPACT"}</p><h2>{zh ? "此案例为何重要" : "Why this case matters"}</h2><p className="body-copy">{accident.safetyImpact[language]}</p></section>
      <section><p className="eyebrow">04 / {zh ? "飞行数据" : "FLIGHT DATA"}</p><h2>{zh ? "高度与空速趋势" : "Altitude and airspeed trend"}</h2><FlightChart data={accident.chart} note={accident.chartNote} /></section>
    </article><aside className="detail-sidebar">
      <section className="panel"><h2>{zh ? "事件时间线" : "Event timeline"}</h2><ol className="timeline">{accident.timeline.map((event) => <li key={event.time}><time>{event.time}</time><p>{event.text[language]}</p></li>)}</ol></section>
      <section className="panel"><h2>{zh ? "原始资料" : "Primary records"}</h2><p>{zh ? "以下链接指向官方调查资料或可信的历史档案。" : "These links lead to official investigation material or trusted historical archives."}</p><a href={accident.sourceUrl} target="_blank" rel="noreferrer">{zh ? "查看调查或档案记录" : "Open investigation or archive record"} ↗</a><a href={accident.reportUrl} target="_blank" rel="noreferrer">{zh ? "阅读主要报告或记录" : "Read primary report or record"} ↗</a></section>
    </aside></div>
  </div><footer>{zh ? "航空安全档案 · 数据来源：调查报告与历史档案" : "AeroSafety Archive · Sources: investigation reports and historical archives"}</footer></main>;
}
