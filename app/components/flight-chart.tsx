"use client";

import { useLanguage } from "./language-provider";

export function FlightChart({ data, note }: { data: { minute: number; altitude: number; speed: number }[]; note: { en: string; zh: string } }) {
  const { language } = useLanguage();
  const zh = language === "zh";
  const width = 800, height = 330, left = 65, right = 65, top = 35, bottom = 55;
  const plotWidth = width - left - right, plotHeight = height - top - bottom;
  const maxMinute = Math.max(...data.map((item) => item.minute), 1);
  const maxAltitude = Math.ceil(Math.max(...data.map((item) => item.altitude), 1) / 5000) * 5000;
  const maxSpeed = Math.ceil(Math.max(...data.map((item) => item.speed), 1) / 50) * 50;
  const x = (minute: number) => left + (minute / maxMinute) * plotWidth;
  const y = (value: number, max: number) => top + plotHeight - (value / max) * plotHeight;
  const path = (key: "altitude" | "speed", max: number) => data.map((item, index) => `${index ? "L" : "M"}${x(item.minute).toFixed(1)},${y(item[key], max).toFixed(1)}`).join(" ");
  const ticks = [0, 1, 2, 3, 4];

  return <figure className="chart-wrap">
    <div className="chart-legend"><span><i className="altitude-dot" />{zh ? "高度（英尺 ft）" : "Altitude (ft)"}</span><span><i className="speed-dot" />{zh ? "空速（节 kt）" : "Airspeed (kt)"}</span></div>
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={zh ? "带单位的飞行数据趋势图" : "Flight trend chart with units"}>
      {ticks.map((tick) => { const ratio = tick / 4; const lineY = top + ratio * plotHeight; return <g key={tick}><line x1={left} x2={width - right} y1={lineY} y2={lineY} className="grid-line" /><text x={left - 9} y={lineY + 4} textAnchor="end">{Math.round(maxAltitude * (1 - ratio)).toLocaleString()}</text><text x={width - right + 9} y={lineY + 4}>{Math.round(maxSpeed * (1 - ratio))}</text></g>; })}
      {ticks.map((tick) => { const minute = (maxMinute * tick) / 4; return <text key={`x-${tick}`} x={x(minute)} y={height - 23} textAnchor="middle">{Number.isInteger(minute) ? minute : minute.toFixed(1)}</text>; })}
      <text className="axis-title" x={15} y={top - 12}>{zh ? "高度 ft" : "Altitude ft"}</text><text className="axis-title" x={width - 15} y={top - 12} textAnchor="end">{zh ? "空速 kt" : "Airspeed kt"}</text><text className="axis-title" x={width / 2} y={height - 3} textAnchor="middle">{zh ? "时间（分钟）" : "Time (minutes)"}</text>
      <path d={path("altitude", maxAltitude)} className="altitude-line" /><path d={path("speed", maxSpeed)} className="speed-line" />
      {data.map((item) => <g key={item.minute}><circle cx={x(item.minute)} cy={y(item.altitude, maxAltitude)} r="4" className="altitude-point" /><circle cx={x(item.minute)} cy={y(item.speed, maxSpeed)} r="4" className="speed-point" /></g>)}
    </svg>
    <figcaption>{note[language]}</figcaption>
  </figure>;
}
