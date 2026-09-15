export type LocalizedText = { en: string; zh: string };

export type Accident = {
  slug: string;
  aliases: string[];
  flight: LocalizedText;
  date: string;
  aircraft: string;
  registration: string;
  operator: LocalizedText;
  phase: LocalizedText;
  personsOnBoard: number;
  reportNumber: string;
  route: LocalizedText;
  location: LocalizedText;
  agency: string;
  summary: LocalizedText;
  findings: LocalizedText[];
  safetyImpact: LocalizedText;
  timeline: { time: string; text: LocalizedText }[];
  chart: { minute: number; altitude: number; speed: number }[];
  chartNote: LocalizedText;
  image: {
    url: string;
    alt: LocalizedText;
    caption: LocalizedText;
    credit: string;
    license: string;
    sourceUrl: string;
  };
  sourceUrl: string;
  reportUrl: string;
};

export const accidents: Accident[] = [
  {
    slug: "af447",
    aliases: ["AF447", "AF 447", "Air France 447", "法航447", "法国航空447"],
    flight: { en: "Air France Flight 447", zh: "法国航空447号班机" },
    date: "2009-06-01",
    aircraft: "Airbus A330-203",
    registration: "F-GZCP",
    operator: { en: "Air France", zh: "法国航空" },
    phase: { en: "Cruise", zh: "巡航" },
    personsOnBoard: 228,
    reportNumber: "BEA F-GZCP",
    route: { en: "Rio de Janeiro → Paris", zh: "里约热内卢 → 巴黎" },
    location: { en: "North Atlantic Ocean", zh: "北大西洋" },
    agency: "BEA France",
    summary: {
      en: "During a night crossing of the Atlantic, measured airspeed temporarily became inconsistent after ice crystals obstructed the pitot probes. The autopilot disconnected. The investigation examined aircraft handling, crew response and the information available in the cockpit.",
      zh: "飞机夜间飞越大西洋时，皮托管受冰晶影响，测量空速短暂出现不一致，自动驾驶随后断开。调查重点分析了飞机操纵、机组反应以及驾驶舱当时能够获得的信息。",
    },
    findings: [
      { en: "Temporary airspeed inconsistencies led to autopilot disconnection.", zh: "短暂的空速不一致导致自动驾驶断开。" },
      { en: "The aircraft entered and remained in an aerodynamic stall.", zh: "飞机进入并持续处于气动失速状态。" },
      { en: "Recommendations addressed training, cockpit systems and oceanic search capability.", zh: "安全建议涉及训练、驾驶舱系统及远洋搜寻能力。" },
    ],
    safetyImpact: {
      en: "The investigation influenced training for unreliable airspeed and high-altitude stall recognition, pitot-probe oversight, cockpit alerting, and the tracking and recovery of flight data over oceans.",
      zh: "此次调查推动了不可靠空速与高空失速识别训练、皮托管监督、驾驶舱警告设计，以及远洋飞行追踪和飞行数据搜寻方面的改进。",
    },
    timeline: [
      { time: "22:29", text: { en: "Departure from Rio de Janeiro.", zh: "从里约热内卢起飞。" } },
      { time: "01:35", text: { en: "Last radio communication with Brazilian air traffic control.", zh: "与巴西空管完成最后一次无线电通信。" } },
      { time: "02:10", text: { en: "Autopilot disconnected after airspeed indications became inconsistent.", zh: "空速指示出现不一致，自动驾驶断开。" } },
      { time: "2012", text: { en: "BEA published its final investigation report.", zh: "法国航空事故调查局发布最终调查报告。" } },
    ],
    chart: [
      { minute: 0, altitude: 35000, speed: 275 }, { minute: 1, altitude: 35400, speed: 250 },
      { minute: 2, altitude: 37500, speed: 170 }, { minute: 3, altitude: 36000, speed: 105 },
      { minute: 4, altitude: 25000, speed: 95 }, { minute: 5, altitude: 10000, speed: 100 },
    ],
    chartNote: {
      en: "Reconstructed trend from the official investigation narrative; values are rounded.",
      zh: "根据官方调查资料重建的趋势；数值经过取整。",
    },
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/PKIERZKOWSKI%20070328%20FGZCP%20CDG.jpg?width=1600",
      alt: { en: "Air France Airbus A330 F-GZCP at Paris Charles de Gaulle", zh: "法国航空A330客机F-GZCP在巴黎戴高乐机场" },
      caption: { en: "The aircraft involved, photographed at Paris Charles de Gaulle in 2007.", zh: "涉事飞机，2007年摄于巴黎戴高乐机场。" },
      credit: "Pawel Kierzkowski / Wikimedia Commons",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:PKIERZKOWSKI_070328_FGZCP_CDG.jpg",
    },
    sourceUrl: "https://bea.aero/en/investigation-reports/notified-events/detail/accident-to-the-airbus-a330-203-registered-f-gzcp-and-operated-by-air-france-occured-on-06-01-2009-in-the-atlantic-ocean/",
    reportUrl: "https://bea.aero/fileadmin/documents/docspa/2009/f-cp090601.en/pdf/f-cp090601.en.pdf",
  },
  {
    slug: "ua232",
    aliases: ["UA232", "UA 232", "United 232", "美联航232", "联合航空232"],
    flight: { en: "United Airlines Flight 232", zh: "美国联合航空232号班机" },
    date: "1989-07-19",
    aircraft: "McDonnell Douglas DC-10-10",
    registration: "N1819U",
    operator: { en: "United Airlines", zh: "美国联合航空" },
    phase: { en: "Cruise / emergency approach", zh: "巡航／紧急进近" },
    personsOnBoard: 296,
    reportNumber: "NTSB/AAR-90/06",
    route: { en: "Denver → Chicago", zh: "丹佛 → 芝加哥" },
    location: { en: "Sioux City, Iowa, United States", zh: "美国艾奥瓦州苏城" },
    agency: "NTSB",
    summary: {
      en: "A failure in the tail-mounted engine damaged all three hydraulic systems that powered the normal flight controls. The crew used differential engine thrust to retain limited control and attempted an emergency landing at Sioux Gateway Airport.",
      zh: "尾部发动机发生故障并影响了为常规飞行操纵系统提供动力的三套液压系统。机组利用左右发动机推力差维持有限控制，并尝试在苏城机场紧急着陆。",
    },
    findings: [
      { en: "The initiating event was a failure of the stage-one fan disk in the number-two engine.", zh: "起始事件是二号发动机一级风扇盘失效。" },
      { en: "Debris damage resulted in the loss of all three hydraulic systems.", zh: "部件碎片造成三套液压系统全部失效。" },
      { en: "The investigation highlighted crew coordination and damage-tolerant engine design.", zh: "调查强调了机组协作以及发动机损伤容限设计的重要性。" },
    ],
    safetyImpact: {
      en: "The accident became an important case study in crew resource management, damage-tolerant engine inspection, hydraulic-system protection, and the value of coordinated improvisation during a system-wide emergency.",
      zh: "该事故成为机组资源管理、发动机损伤容限检查、液压系统防护以及系统性紧急情况下协同处置的重要研究案例。",
    },
    timeline: [
      { time: "14:09", text: { en: "Flight departed Denver for Chicago.", zh: "航班从丹佛起飞前往芝加哥。" } },
      { time: "15:16", text: { en: "The number-two engine fan disk failed during cruise.", zh: "巡航期间二号发动机风扇盘失效。" } },
      { time: "15:20", text: { en: "The crew coordinated an emergency diversion to Sioux City.", zh: "机组开始协调备降苏城。" } },
      { time: "1990", text: { en: "NTSB adopted the final accident report.", zh: "美国国家运输安全委员会通过最终报告。" } },
    ],
    chart: [
      { minute: 0, altitude: 37000, speed: 285 }, { minute: 8, altitude: 34000, speed: 270 },
      { minute: 16, altitude: 26000, speed: 250 }, { minute: 24, altitude: 18000, speed: 230 },
      { minute: 32, altitude: 9000, speed: 215 }, { minute: 40, altitude: 1500, speed: 190 },
    ],
    chartNote: {
      en: "Reconstructed descent trend from the official report; values are rounded.",
      zh: "根据官方报告重建的下降趋势；数值经过取整。",
    },
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/McDonnell%20Douglas%20DC-10-10%2C%20United%20Airlines%20AN1599703.jpg?width=1600",
      alt: { en: "A United Airlines McDonnell Douglas DC-10-10", zh: "一架美国联合航空麦道DC-10-10" },
      caption: { en: "Representative United Airlines DC-10-10; this is not registration N1819U.", zh: "美国联合航空DC-10-10同型机代表图；图中并非注册号N1819U的涉事飞机。" },
      credit: "Eduard Marmet / Wikimedia Commons",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:McDonnell_Douglas_DC-10-10,_United_Airlines_AN1599703.jpg",
    },
    sourceUrl: "https://www.ntsb.gov/investigations/Pages/DCA89MA063.aspx",
    reportUrl: "https://www.ntsb.gov/investigations/accidentreports/reports/aar-90-06.pdf",
  },
  {
    slug: "asiana214",
    aliases: ["OZ214", "OZ 214", "Asiana 214", "韩亚214", "韩亚航空214"],
    flight: { en: "Asiana Airlines Flight 214", zh: "韩亚航空214号班机" },
    date: "2013-07-06",
    aircraft: "Boeing 777-200ER",
    registration: "HL7742",
    operator: { en: "Asiana Airlines", zh: "韩亚航空" },
    phase: { en: "Visual approach", zh: "目视进近" },
    personsOnBoard: 307,
    reportNumber: "NTSB/AAR-14/01",
    route: { en: "Seoul → San Francisco", zh: "首尔 → 旧金山" },
    location: { en: "San Francisco, California, United States", zh: "美国加利福尼亚州旧金山" },
    agency: "NTSB",
    summary: {
      en: "During a visual approach to San Francisco, the aircraft descended below the desired glidepath and its airspeed decreased. The investigation focused on monitoring, automation understanding, approach management and the crew response.",
      zh: "飞机目视进近旧金山机场期间低于预定下滑路径，空速随之降低。调查重点包括飞行状态监控、对自动化系统的理解、进近管理以及机组反应。",
    },
    findings: [
      { en: "The approach was not stabilized as altitude and airspeed decreased.", zh: "随着高度和空速下降，此次进近未保持稳定。" },
      { en: "Monitoring and understanding of automated systems were central investigation topics.", zh: "机组监控以及对自动化系统的理解是调查重点。" },
      { en: "Recommendations concerned training, procedures and emergency response.", zh: "安全建议涉及训练、程序和应急响应。" },
    ],
    safetyImpact: {
      en: "The report emphasized stabilized-approach criteria, monitoring of energy state, clearer understanding of automation modes, and timely go-around decisions.",
      zh: "报告强调了稳定进近标准、飞机能量状态监控、对自动化模式的清晰理解以及及时作出复飞决定的重要性。",
    },
    timeline: [
      { time: "11:21", text: { en: "The flight was cleared for a visual approach.", zh: "航班获准进行目视进近。" } },
      { time: "11:27", text: { en: "The aircraft continued toward runway 28L below the desired path.", zh: "飞机低于预定路径继续接近28L跑道。" } },
      { time: "11:28", text: { en: "A go-around was initiated very late in the approach.", zh: "机组在进近末段开始复飞。" } },
      { time: "2014", text: { en: "NTSB adopted the final accident report.", zh: "美国国家运输安全委员会通过最终报告。" } },
    ],
    chart: [
      { minute: 0, altitude: 5200, speed: 185 }, { minute: 1, altitude: 3900, speed: 175 },
      { minute: 2, altitude: 2700, speed: 165 }, { minute: 3, altitude: 1700, speed: 150 },
      { minute: 4, altitude: 900, speed: 137 }, { minute: 5, altitude: 200, speed: 112 },
    ],
    chartNote: {
      en: "Reconstructed approach trend from the official report; values are rounded.",
      zh: "根据官方报告重建的进近趋势；数值经过取整。",
    },
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Asiana%20Airlines%20Boeing%20777-200ER%3B%20HL7742%40HKG%3B31.07.2011%20614fz%20%286052589349%29.jpg?width=1600",
      alt: { en: "Asiana Airlines Boeing 777 HL7742 landing at Hong Kong", zh: "韩亚航空波音777客机HL7742在香港降落" },
      caption: { en: "The aircraft involved, photographed landing at Hong Kong in 2011.", zh: "涉事飞机，2011年摄于香港国际机场进近阶段。" },
      credit: "Aero Icarus / Wikimedia Commons",
      license: "CC BY-SA 2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Asiana_Airlines_Boeing_777-200ER;_HL7742@HKG;31.07.2011_614fz_(6052589349).jpg",
    },
    sourceUrl: "https://www.ntsb.gov/investigations/Pages/DCA13MA120.aspx",
    reportUrl: "https://www.ntsb.gov/investigations/accidentreports/reports/aar1401.pdf",
  },
  {
    slug: "us1549",
    aliases: ["US1549", "US 1549", "AWE1549", "Cactus 1549", "US Airways 1549", "全美航空1549"],
    flight: { en: "US Airways Flight 1549", zh: "全美航空1549号班机" },
    date: "2009-01-15",
    aircraft: "Airbus A320-214",
    registration: "N106US",
    operator: { en: "US Airways", zh: "全美航空" },
    phase: { en: "Initial climb / ditching", zh: "初始爬升／水上迫降" },
    personsOnBoard: 155,
    reportNumber: "NTSB/AAR-10/03",
    route: { en: "New York LaGuardia → Charlotte", zh: "纽约拉瓜迪亚 → 夏洛特" },
    location: { en: "Hudson River, New York, United States", zh: "美国纽约哈德逊河" },
    agency: "NTSB",
    summary: {
      en: "Shortly after departure from LaGuardia, the aircraft encountered a flock of large birds and lost almost all thrust from both engines. With limited altitude and time available, the crew completed a controlled ditching on the Hudson River and all 155 people aboard survived.",
      zh: "飞机从拉瓜迪亚机场起飞不久后遭遇大型鸟群，两台发动机几乎全部失去推力。在高度和处置时间有限的情况下，机组在哈德逊河完成受控水上迫降，机上155人全部生还。",
    },
    findings: [
      { en: "Large-bird ingestion caused an almost complete loss of thrust in both engines.", zh: "大型鸟类被吸入发动机，导致两台发动机几乎完全失去推力。" },
      { en: "The available altitude did not provide a reliable return path to an airport.", zh: "当时可用高度不足以保证安全返回机场。" },
      { en: "Crew coordination, aircraft handling and rapid ferry response supported the successful outcome.", zh: "机组协作、飞机操纵以及渡轮的快速响应共同促成了成功撤离。" },
    ],
    safetyImpact: {
      en: "The report led to recommendations involving bird-ingestion certification, dual-engine-failure checklists, ditching training, passenger brace guidance and emergency equipment.",
      zh: "报告推动了鸟击吸入认证、双发失效检查单、水上迫降训练、旅客防冲击姿势指导以及应急设备方面的改进。",
    },
    timeline: [
      { time: "15:25", text: { en: "The flight departed LaGuardia Airport.", zh: "航班从拉瓜迪亚机场起飞。" } },
      { time: "15:27", text: { en: "The aircraft encountered birds and both engines lost most thrust.", zh: "飞机遭遇鸟群，两台发动机大部分推力丧失。" } },
      { time: "15:30", text: { en: "A controlled ditching was completed on the Hudson River.", zh: "飞机在哈德逊河完成受控水上迫降。" } },
      { time: "2010", text: { en: "NTSB adopted the final accident report.", zh: "美国国家运输安全委员会通过最终报告。" } },
    ],
    chart: [
      { minute: 0, altitude: 0, speed: 150 }, { minute: 1, altitude: 700, speed: 180 },
      { minute: 2, altitude: 2800, speed: 210 }, { minute: 3, altitude: 2500, speed: 185 },
      { minute: 4, altitude: 1700, speed: 160 }, { minute: 5, altitude: 800, speed: 140 },
      { minute: 6, altitude: 0, speed: 125 },
    ],
    chartNote: { en: "Reconstructed flight-path trend from the NTSB report; values are rounded.", zh: "根据NTSB报告重建的飞行轨迹趋势；数值经过取整。" },
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/US%20Airways%20Flight%201549%20%28N106US%29%20after%20crashing%20into%20the%20Hudson%20River%20%28crop%204%29.jpg?width=1600",
      alt: { en: "US Airways Flight 1549 on the Hudson River", zh: "哈德逊河上的全美航空1549号班机" },
      caption: { en: "N106US on the Hudson River shortly after the ditching.", zh: "水上迫降后不久，位于哈德逊河上的N106US。" },
      credit: "Greg L / Wikimedia Commons", license: "CC BY 2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:US_Airways_Flight_1549_(N106US)_after_crashing_into_the_Hudson_River_(crop_4).jpg",
    },
    sourceUrl: "https://www.ntsb.gov/investigations/Pages/DCA09MA026.aspx",
    reportUrl: "https://www.ntsb.gov/investigations/accidentreports/reports/aar1003.pdf",
  },
  {
    slug: "ba38",
    aliases: ["BA38", "BA 38", "BAW38", "Speedbird 38", "British Airways 38", "英国航空38", "英航38"],
    flight: { en: "British Airways Flight 38", zh: "英国航空38号班机" },
    date: "2008-01-17",
    aircraft: "Boeing 777-236ER",
    registration: "G-YMMM",
    operator: { en: "British Airways", zh: "英国航空" },
    phase: { en: "Final approach", zh: "最后进近" },
    personsOnBoard: 152,
    reportNumber: "AAIB AAR 1/2010",
    route: { en: "Beijing Capital → London Heathrow", zh: "北京首都 → 伦敦希思罗" },
    location: { en: "London Heathrow Airport, United Kingdom", zh: "英国伦敦希思罗机场" },
    agency: "AAIB",
    summary: {
      en: "During the final approach to Heathrow, both engines failed to respond to commanded thrust increases. The aircraft descended short of the runway. The investigation traced the thrust restriction to ice released within the fuel system and accumulating at the fuel-oil heat exchangers.",
      zh: "飞机最后进近希思罗机场期间，两台发动机未能响应增推指令，飞机在跑道前方下降。调查认定，燃油系统中的冰被释放后在燃油—滑油热交换器处聚集，限制了燃油流量。",
    },
    findings: [
      { en: "Ice accumulated in the fuel system during the long, cold cruise.", zh: "长时间低温巡航期间，燃油系统内形成并积聚了冰。" },
      { en: "The ice restricted fuel flow at both engine fuel-oil heat exchangers during approach.", zh: "进近阶段，冰在两台发动机的燃油—滑油热交换器处限制了燃油流量。" },
      { en: "Aircraft response and crew actions reduced the consequences of the short landing.", zh: "飞机结构表现和机组操作降低了跑道外接地造成的后果。" },
    ],
    safetyImpact: {
      en: "The investigation drove fuel-system design changes, revised operating procedures and new certification attention to ice accumulation in wide-body aircraft fuel systems.",
      zh: "调查推动了燃油系统设计修改、运行程序更新，以及对宽体客机燃油系统积冰问题的进一步认证审查。",
    },
    timeline: [
      { time: "Cruise", text: { en: "The flight crossed very cold regions during the journey from Beijing.", zh: "航班从北京起飞后在巡航中经过低温区域。" } },
      { time: "Final approach", text: { en: "Both engines failed to deliver the commanded increase in thrust.", zh: "两台发动机未能提供指令要求的推力增量。" } },
      { time: "12:42", text: { en: "The aircraft came to rest short of runway 27L.", zh: "飞机在27L跑道前方停止。" } },
      { time: "2010", text: { en: "AAIB published the final report and safety recommendations.", zh: "英国航空事故调查局发布最终报告和安全建议。" } },
    ],
    chart: [
      { minute: 0, altitude: 3000, speed: 180 }, { minute: 1, altitude: 2100, speed: 165 },
      { minute: 2, altitude: 1200, speed: 150 }, { minute: 3, altitude: 720, speed: 140 },
      { minute: 4, altitude: 250, speed: 125 }, { minute: 5, altitude: 0, speed: 110 },
    ],
    chartNote: { en: "Reconstructed final-approach trend from the AAIB report; values are rounded.", zh: "根据AAIB报告重建的最后进近趋势；数值经过取整。" },
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/British%20Airways%20Boeing%20777-200ER%20SYD%20Monty.jpg?width=1600",
      alt: { en: "British Airways Boeing 777 G-YMMM before the accident", zh: "事故前的英国航空波音777客机G-YMMM" },
      caption: { en: "The aircraft involved, photographed at Sydney in 2007.", zh: "涉事飞机，2007年摄于悉尼机场。" },
      credit: "Montague Smith / Wikimedia Commons", license: "GFDL 1.2",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:British_Airways_Boeing_777-200ER_SYD_Monty.jpg",
    },
    sourceUrl: "https://www.gov.uk/aaib-reports/1-2010-boeing-777-236er-g-ymmm-17-january-2008",
    reportUrl: "https://assets.publishing.service.gov.uk/media/5422f3dbe5274a1314000495/1-2010_G-YMMM.pdf",
  },
  {
    slug: "qf32",
    aliases: ["QF32", "QF 32", "QFA32", "Qantas 32", "澳洲航空32", "澳航32"],
    flight: { en: "Qantas Flight 32", zh: "澳洲航空32号班机" },
    date: "2010-11-04",
    aircraft: "Airbus A380-842",
    registration: "VH-OQA",
    operator: { en: "Qantas", zh: "澳洲航空" },
    phase: { en: "Initial climb", zh: "初始爬升" },
    personsOnBoard: 469,
    reportNumber: "ATSB AO-2010-089",
    route: { en: "Singapore → Sydney", zh: "新加坡 → 悉尼" },
    location: { en: "Near Batam Island, Indonesia", zh: "印度尼西亚巴淡岛附近" },
    agency: "ATSB",
    summary: {
      en: "Soon after departure from Singapore, the number-two engine suffered an uncontained failure that damaged several aircraft systems. The crew assessed numerous warnings, stabilized the aircraft, prepared for a return and landed at Singapore.",
      zh: "飞机从新加坡起飞不久后，二号发动机发生非包容性故障，并影响多个飞机系统。机组处理大量警告、稳定飞机状态、完成返航准备并在新加坡着陆。",
    },
    findings: [
      { en: "A manufacturing defect in an engine oil-feed pipe led to an oil leak and fire.", zh: "发动机滑油供油管制造缺陷导致滑油泄漏并引发火情。" },
      { en: "The resulting turbine-disk failure damaged multiple, partly redundant aircraft systems.", zh: "随后发生的涡轮盘故障影响了多个原本具有冗余设计的飞机系统。" },
      { en: "The crew used extensive system knowledge and structured coordination to manage the event.", zh: "机组依靠系统知识和有序协作完成了复杂故障处置。" },
    ],
    safetyImpact: {
      en: "The investigation led to engine inspections, manufacturing-control changes, design action and wider study of how flight crews manage large numbers of simultaneous system alerts.",
      zh: "调查促成了发动机检查、制造质量控制修改、设计改进，并推动业界研究机组如何处理大量同时出现的系统警告。",
    },
    timeline: [
      { time: "09:56", text: { en: "The flight departed Singapore Changi Airport.", zh: "航班从新加坡樟宜机场起飞。" } },
      { time: "10:01", text: { en: "The number-two engine failed during the climb.", zh: "爬升期间二号发动机发生故障。" } },
      { time: "In flight", text: { en: "The crew assessed system status and prepared the aircraft for return.", zh: "机组评估系统状态并为返航着陆做准备。" } },
      { time: "11:45", text: { en: "The aircraft landed at Singapore Changi Airport.", zh: "飞机在新加坡樟宜机场着陆。" } },
    ],
    chart: [
      { minute: 0, altitude: 0, speed: 160 }, { minute: 5, altitude: 5000, speed: 220 },
      { minute: 10, altitude: 7400, speed: 250 }, { minute: 45, altitude: 7400, speed: 235 },
      { minute: 80, altitude: 6000, speed: 220 }, { minute: 100, altitude: 3000, speed: 180 },
      { minute: 110, altitude: 0, speed: 145 },
    ],
    chartNote: { en: "Reconstructed altitude and speed trend from the ATSB report; values are rounded.", zh: "根据ATSB报告重建的高度和速度趋势；数值经过取整。" },
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Qantas%20a380%20vh-oqa%20takeoff%20heathrow%20arp.jpg?width=1600",
      alt: { en: "Qantas Airbus A380 VH-OQA taking off at Heathrow", zh: "澳洲航空A380客机VH-OQA从希思罗机场起飞" },
      caption: { en: "The aircraft involved, photographed taking off at Heathrow in 2009.", zh: "涉事飞机，2009年摄于伦敦希思罗机场。" },
      credit: "Adrian Pingstone / Wikimedia Commons", license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Qantas_a380_vh-oqa_takeoff_heathrow_arp.jpg",
    },
    sourceUrl: "https://www.atsb.gov.au/publications/investigation_reports/2010/aair/ao-2010-089",
    reportUrl: "https://www.atsb.gov.au/sites/default/files/media/4173625/ao-2010-089_final.pdf",
  },
];

export function getAccident(slug: string) { return accidents.find((item) => item.slug === slug); }
