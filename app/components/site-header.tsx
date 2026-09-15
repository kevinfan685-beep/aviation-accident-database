"use client";
import Link from "next/link";
import { useLanguage } from "./language-provider";
export function SiteHeader() {
  const { language, toggleLanguage } = useLanguage();
  const zh = language === "zh";
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand"><span className="brand-mark">✈</span><span><strong>{zh ? "航空安全档案" : "AeroSafety Archive"}</strong><small>{zh ? "全球航空事故资料库" : "Global aviation accident records"}</small></span></Link>
    <nav><Link href="/">{zh ? "首页" : "Home"}</Link><Link href="/#database">{zh ? "事故数据库" : "Database"}</Link><button onClick={toggleLanguage}>{zh ? "English" : "中文"}</button></nav>
  </div></header>;
}
