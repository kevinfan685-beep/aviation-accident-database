import { notFound } from "next/navigation";
import { accidents,getAccident } from "@/lib/accidents";
import { AccidentDetail } from "./accident-detail";
export function generateStaticParams(){return accidents.map(a=>({slug:a.slug}));}
export default async function AccidentPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const accident=getAccident(slug);if(!accident)notFound();return <AccidentDetail accident={accident}/>;}
