import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronRight, Copy, Mail, X, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";

import portImage from "@/assets/uae-port-night.jpg";
import wechatQr from "@/assets/wechat-qr.png.asset.json";
import whatsappQr from "@/assets/whatsapp-qr.png.asset.json";
import logo from "@/assets/agss-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { CONTACT, PORTS } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arabian Gulf Ship Supplies | UAE Ship Chandler" },
      {
        name: "description",
        content: "Provisions, bonded stores and private crew orders for Chinese vessels across all UAE ports and anchorages.",
      },
      { property: "og:title", content: "Arabian Gulf Ship Supplies | UAE Ship Chandler" },
      {
        property: "og:description",
        content: "Chinese-friendly marine provisions and ship supply across every UAE port and anchorage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Language = "en" | "zh";

const copy = {
  en: {
    navServices: "Services",
    navPorts: "Ports",
    navFaq: "FAQ",
    navRfq: "Request quote",
    eyebrow: "UAE SHIP SUPPLY · CHINESE/GREEK/FILIPINO/INDIAN-FRIENDLY SERVICES",
    title: "Your reliable supply partner in every UAE port.",
    intro: "Provisions, bonded stores and private crew orders for vessels at ports and anchorages across the UAE. We also provide services specially tailored to meet the requirements of Chinese vessels and crew.",
    submitRfq: "Submit RFQ",
    contactOps: "Contact sales",
    status: "Direct contact",
    active: "AVAILABLE",
    directLine: "Direct Line (Available 24/7):",
    language: "Language",
    coverage: "Coverage",
    allPorts: "Coverage: All UAE Ports and Anchorages",
    serviceTitle: "One-stop supply",
    serviceKicker: "Three core business lines",
    services: [
      { title: "Provisions", zh: "伙食供应", body: "Vessel provisions selected for multinational and Chinese crews.", items: ["Frozen foods", "Fresh produce", "Dry provisions", "Cabin & galley supplies"] },
      { title: "Bonded Stores", zh: "保税物品", body: "Bonded goods coordinated for delivery in line with local requirements.", items: ["Tobacco products", "Beverages", "Personal care", "Bonded consumables"] },
      { title: "Private Crew Orders", zh: "船员私人订购", body: "Personal purchases consolidated for convenient vessel delivery.", items: ["Gadgets & electronics", "Crew purchases", "Toiletries", "Personal essentials"] },
    ],
    technical: "Technical supplies are also available on request, including selected engine, deck, cabin, galley, electrical and safety stores.",
    portTitle: "UAE port coverage",
    portIntro: "24/7 Supply coordination at ports and anchorages throughout the United Arab Emirates.",
    otherPorts: "All other UAE ports & anchorages",
    notice: "Service notice",
    disclaimer: "Port and customs charges, and supply boat charges if any, are excluded.",
    faqTitle: "Frequently asked questions",
    faqs: [
      ["Which UAE ports do you serve?", "We coordinate supplies at Fujairah, Khorfakkan, Jebel Ali, Khalifa, RAK Mina Saqr, Sharjah, and all other UAE ports and anchorages."],
      ["Can Chinese crews place orders in Chinese?", "Yes. Switch this page to Simplified Chinese and contact us through WeChat, WhatsApp or email."],
      ["What provisions can you supply?", "We supply frozen, fresh and dry provisions, together with cabin and galley requirements."],
      ["Can crew members request private items?", "Yes. We handle private crew purchases, gadgets, personal essentials and bonded-store requirements."],
      ["Do you also supply technical stores?", "Yes. Selected engine, deck, cabin, galley, electrical and safety items are available on request."],
      ["What should an RFQ include?", "Please provide the vessel name, vessel email, port of call, ETA and a clear requested-items list."],
    ],
    rfqTitle: "Request for quotation",
    rfqIntro: "Send vessel details by email or continue through WhatsApp.",
    vessel: "Vessel name",
    vesselEmail: "Vessel email",
    port: "Port of call",
    eta: "ETA",
    items: "Requested items",
    emailRfq: "Send by email",
    whatsappRfq: "Send by WhatsApp",
    po: "Purchase orders can also be sent directly to",
    scan: "Scan to contact",
    copyWechat: "Copy WeChat ID",
    copyWhatsapp: "Copy WhatsApp number",
    copied: "Copied",
    address: "Office address",
    validation: "Please complete every field with a valid email address.",
    navAbout: "About Us",
    navContact: "Contact Us",
    aboutKicker: "Who we are · Arabian Gulf Ship Supplies",
    aboutTitle: "Supply starts with understanding.",
    aboutBody: [
      "Every vessel has different requirements, and every seafarer has different needs. We have built working relationships with many ship crews and pay close attention to the practical details behind each request.",
      "Our approach is simple: listen carefully, source suitable products, supply accurately and build relationships that last. We are especially attentive to the preferences and everyday needs of crews from across Asia and beyond.",
    ],
    diffTitle: "Your needs. Our priority.",
    pillars: [
      ["We listen", "Every request starts with understanding exactly what the vessel and crew need."],
      ["We source carefully", "Suitable products, correct specifications and practical availability."],
      ["We supply accurately", "The right items, quantities and packing — essential when supplying a vessel."],
      ["We build trust", "Earned through communication, care and consistent follow-through."],
    ],
    contactTitle: "Let's talk about your next supply",
    contactKicker: "Alongside & anchorage supply · All UAE ports",
    salesManager: "Sales Manager",
    mobile: "Mobile / WhatsApp",
    email: "Email",
    callLabel: "Call",
    wechatLabel: "WeChat:",
  },
  zh: {
    navServices: "服务项目",
    navPorts: "服务港口",
    navFaq: "常见问题",
    navRfq: "提交询价",
    eyebrow: "阿联酋船舶供应 · 中文/希腊/菲律宾/印度船员友好服务",
    title: "您在阿联酋各港口值得信赖的船舶供应伙伴。",
    intro: "为阿联酋各港口及锚地的船舶提供伙食、保税物品及船员私人订购服务。我们同时提供专为中国船舶及船员量身定制的服务。",
    submitRfq: "提交询价",
    contactOps: "联系销售",
    status: "直接联系",
    active: "可联系",
    directLine: "直线电话（24/7 全天候）：",
    language: "语言",
    coverage: "覆盖范围",
    allPorts: "服务覆盖：阿联酋所有港口及锚地",
    serviceTitle: "一站式供应",
    serviceKicker: "三大核心业务",
    services: [
      { title: "伙食供应", zh: "Provisions", body: "为国际及中国船员精心挑选船舶伙食物资。", items: ["冷冻食品", "新鲜果蔬", "干货食品", "舱室及厨房用品"] },
      { title: "保税物品", zh: "Bonded Stores", body: "按照当地规定协调保税物品并安排船上交付。", items: ["烟草产品", "饮料", "个人护理用品", "保税消耗品"] },
      { title: "船员私人订购", zh: "Private Crew Orders", body: "整合船员个人采购，方便配送至船舶。", items: ["电子产品及数码设备", "船员采购", "洗漱用品", "个人必需品"] },
    ],
    technical: "亦可按需提供部分技术物料，包括轮机、甲板、舱室、厨房、电气及安全用品。",
    portTitle: "阿联酋港口覆盖",
    portIntro: "在阿联酋各港口及锚地协调船舶物资供应。",
    otherPorts: "阿联酋所有其他港口及锚地",
    notice: "服务声明",
    disclaimer: "报价不包含港口及海关费用，以及可能产生的供应船费用。",
    faqTitle: "常见问题",
    faqs: [
      ["你们服务哪些阿联酋港口？", "我们在富查伊拉、豪尔费坎、杰贝阿里、哈利法港、哈伊马角 Mina Saqr、沙迦以及阿联酋所有其他港口和锚地协调供应。"],
      ["中国船员可以使用中文订购吗？", "可以。您可以切换至简体中文，并通过微信、WhatsApp 或电子邮件联系我们。"],
      ["可以供应哪些伙食？", "我们供应冷冻、新鲜及干货食品，以及舱室和厨房所需物品。"],
      ["船员可以订购私人用品吗？", "可以。我们可处理船员私人采购、数码产品、个人必需品及保税物品。"],
      ["你们也供应技术物料吗？", "可以按需供应部分轮机、甲板、舱室、厨房、电气及安全用品。"],
      ["询价单应包含哪些信息？", "请提供船名、船舶邮箱、停靠港、预计到港时间和详细物品清单。"],
    ],
    rfqTitle: "提交询价",
    rfqIntro: "填写船舶资料，然后通过电子邮件或 WhatsApp 发送。",
    vessel: "船名",
    vesselEmail: "船舶邮箱",
    port: "停靠港",
    eta: "预计到港时间",
    items: "所需物品",
    emailRfq: "通过邮件发送",
    whatsappRfq: "通过 WhatsApp 发送",
    po: "采购订单也可直接发送至",
    scan: "扫码联系",
    copyWechat: "复制微信号",
    copyWhatsapp: "复制 WhatsApp 号码",
    copied: "已复制",
    address: "办公地址",
    validation: "请填写所有项目，并提供有效的电子邮箱。",
    navAbout: "关于我们",
    navContact: "联系我们",
    aboutKicker: "关于我们 · 阿拉伯湾船舶供应",
    aboutTitle: "供应，从理解开始。",
    aboutBody: [
      "我们深知每艘船舶的需求各不相同，每位船员的需要也各有差异。多年来，我们与众多船员建立了良好的合作关系，并认真关注每一项需求背后的实际细节。",
      "我们的方式很简单：认真倾听、精心采购、准确供应，建立长久的合作关系。我们尤其关注来自亚洲及世界各地船员的饮食偏好与日常需求。",
    ],
    diffTitle: "您的需求，就是我们的优先。",
    pillars: [
      ["认真倾听", "每一项需求，都从准确了解船舶和船员的实际需要开始。"],
      ["精心采购", "注重产品适用性、正确规格及实际供货情况。"],
      ["准确供应", "正确的物品、数量与包装——对船舶供应尤为重要。"],
      ["建立信任", "以沟通、用心和始终如一的跟进，赢得信赖。"],
    ],
    contactTitle: "联系我们，安排下一次供应",
    contactKicker: "靠泊及锚地供应 · 阿联酋各港口",
    salesManager: "销售经理",
    mobile: "手机 / WhatsApp",
    email: "电子邮箱",
    callLabel: "电话",
    wechatLabel: "微信：",
  },
} as const;

const rfqSchema = z.object({
  vessel: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  port: z.string().trim().min(1).max(100),
  eta: z.string().trim().min(1).max(80),
  items: z.string().trim().min(1).max(3000),
});

function Index() {
  const [language, setLanguage] = useState<Language>("en");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState("");
  const c = copy[language];

  const getRfq = (form: HTMLFormElement) => {
    const data = Object.fromEntries(new FormData(form));
    const parsed = rfqSchema.safeParse(data);
    if (!parsed.success) {
      setError(c.validation);
      return null;
    }
    setError("");
    const { vessel, email, port, eta, items } = parsed.data;
    return `RFQ - Arabian Gulf Ship Supplies\n\nVessel Name: ${vessel}\nVessel Email: ${email}\nPort of Call: ${port}\nETA: ${eta}\n\nRequested Items:\n${items}`;
  };

  const submitEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = getRfq(event.currentTarget);
    if (!message) return;
    const vessel = new FormData(event.currentTarget).get("vessel");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`RFQ - ${String(vessel)}`)}&body=${encodeURIComponent(message)}`;
  };

  const submitWhatsApp = () => {
    const form = document.querySelector<HTMLFormElement>("#rfq-form");
    if (!form) return;
    const message = getRfq(form);
    if (!message) return;
    window.open(`${CONTACT.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const copyValue = async (value: string, key: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(key);
    window.setTimeout(() => setCopied(""), 1800);
  };

  const [wechatOpen, setWechatOpen] = useState(false);
  const copyWechat = () => copyValue(CONTACT.wechat, "wechat");
  const copyWhatsapp = () => copyValue(CONTACT.phoneDisplay, "whatsapp");

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">

      <header className="sticky top-0 z-40 border-b border-primary/20 bg-deep/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <div className="flex min-w-0 items-center gap-3 text-xs text-muted-foreground sm:gap-4">
            <span className="flex items-center gap-2 whitespace-nowrap sm:hidden">
              <a href={CONTACT.phoneHref} className="flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"><Phone className="size-3.5 text-accent" />{CONTACT.phoneDisplay}</a>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-1 font-medium text-primary transition-colors hover:text-accent"><MessageCircle className="size-4" />WhatsApp</a>
            </span>
            <span className="hidden items-center gap-1 whitespace-nowrap sm:flex">
              <a href={CONTACT.phoneHref} className="font-medium text-foreground transition-colors hover:text-accent">{c.callLabel}</a>
              <span aria-hidden="true">/</span>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="font-medium text-primary transition-colors hover:text-accent">WhatsApp</a>
              <span aria-hidden="true" className="pr-1">:</span>
              <a href={CONTACT.phoneHref} className="font-medium text-foreground transition-colors hover:text-accent">{CONTACT.phoneDisplay}</a>
            </span>
            <button onClick={copyWechat} className="hidden cursor-pointer whitespace-nowrap text-primary transition-colors hover:text-accent sm:inline-block">{c.wechatLabel} {CONTACT.wechat}</button>
            <a href={`mailto:${CONTACT.email}`} className="hidden whitespace-nowrap text-primary transition-colors hover:text-accent md:inline">{CONTACT.email}</a>
          </div>
          <div className="flex shrink-0 items-center border border-border text-xs" aria-label={c.language}>
            {(["en", "zh"] as const).map((code) => (
              <button key={code} onClick={() => setLanguage(code)} className={`cursor-pointer px-3 py-1.5 transition-colors ${language === code ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`} aria-pressed={language === code}>
                {code === "en" ? "EN" : "中文"}
              </button>
            ))}
          </div>
        </div>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-4 py-4 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3"><img src={logo.url} alt="AGSS logo" width={512} height={512} className="size-11 shrink-0 rounded-md bg-white object-contain p-0.5 sm:size-12" /><span className="whitespace-nowrap font-brand text-[clamp(0.7rem,3.2vw,1.25rem)] font-medium leading-tight uppercase tracking-[0.06em]">Arabian Gulf <span className="text-accent">Ship Supplies</span></span></a>
          <nav className="hidden items-center gap-6 text-xs font-medium text-muted-foreground lg:flex">
            <a href="#about" className="hover:text-accent">{c.navAbout}</a><a href="#services" className="hover:text-accent">{c.navServices}</a><a href="#ports" className="hover:text-accent">{c.navPorts}</a><a href="#faq" className="hover:text-accent">{c.navFaq}</a><a href="#contact" className="hover:text-accent">{c.navContact}</a>
          </nav>
          <Button asChild size="sm"><a href="#rfq">{c.navRfq}<ChevronRight className="size-4" /></a></Button>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-border">
        <div className="port-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="scan-line pointer-events-none absolute inset-x-0 top-0 h-24" />
        <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase text-accent"><span className="signal-dot size-1.5 rounded-full bg-accent" />{c.eyebrow}</p>
            <h1 className="max-w-[18ch] text-balance text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">{c.title}</h1>
            <p className="mt-6 max-w-[56ch] font-body text-base leading-relaxed text-muted-foreground">{c.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild><a href="#rfq">{c.submitRfq}<Send className="size-4" /></a></Button><Button asChild variant="outline"><a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">{c.contactOps}<MessageCircle className="size-4" /></a></Button></div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <div><p className="inline-flex items-center gap-2 text-xs text-muted-foreground"><span className="signal-dot size-1.5 rounded-full bg-accent" />{c.directLine}</p><a href={CONTACT.phoneHref} className="mt-1 block text-2xl font-semibold transition-colors hover:text-accent">{CONTACT.phoneDisplay}</a></div>
              <div className="grid grid-cols-2 gap-px border border-border bg-border">
                <MiniQr image={whatsappQr.url} alt="QR code to contact Arabian Gulf Ship Supplies on WhatsApp" label="WhatsApp" width={446} height={444} />
                <MiniQr image={wechatQr.url} alt="QR code containing the WeChat ID HajiDubai" label="WeChat" width={580} height={586} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[3/2] overflow-hidden border border-border bg-card"><img src={portImage} alt="Container vessel alongside a brightly lit UAE port at night" width={1200} height={832} fetchPriority="high" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-background/10" /></div>
            <div className="overflow-hidden border border-border">
              <div className="flex items-center justify-center gap-2 bg-card px-4 py-3 text-sm font-medium uppercase tracking-wide"><MapPin className="size-4 text-accent" />{c.allPorts}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-border bg-deep">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-xs font-medium uppercase text-accent">{c.aboutKicker}</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{c.aboutTitle}</h2>
            {c.aboutBody.map((p) => <p key={p} className="mt-5 font-body text-base leading-relaxed text-muted-foreground">{p}</p>)}
          </div>
          <div>
            <h3 className="text-xl font-semibold">{c.diffTitle}</h3>
            <div className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-2">
              {c.pillars.map(([title, body], index) => <article key={title} className="bg-panel p-5"><span className="text-xs text-accent">0{index + 1}</span><h4 className="mt-1 font-semibold uppercase">{title}</h4><p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{body}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6">
        <SectionHeader title={c.serviceTitle} kicker={c.serviceKicker} />
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
          {c.services.map((service) => <article key={service.title} className="bg-card p-6 sm:p-7"><div className="mb-4 inline-flex min-h-8 items-center bg-primary px-3 text-xs font-medium uppercase">{service.title} · {service.zh}</div><p className="font-body text-sm leading-relaxed text-muted-foreground">{service.body}</p><ul className="mt-5 space-y-2 text-sm">{service.items.map((item) => <li key={item} className="border-l-2 border-primary pl-3">{item}</li>)}</ul></article>)}
        </div>
        <p className="mt-5 border-l-2 border-accent bg-deep px-5 py-4 font-body text-sm leading-relaxed text-muted-foreground">{c.technical}</p>
      </section>

      <section id="ports" className="border-y border-border bg-deep">
        <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6"><SectionHeader title={c.portTitle} kicker={c.portIntro} /><div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{PORTS.map((port, index) => <div key={port} className="flex min-h-20 items-center justify-between bg-panel px-5"><span className="font-medium">{port}</span><span className="text-xs text-accent">0{index + 1}</span></div>)}<div className="flex min-h-20 items-center bg-primary px-5 font-medium sm:col-span-2">{c.otherPorts}</div></div></div>
      </section>

      <aside className="border-b border-border bg-primary/10"><div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-5 sm:px-6 md:flex-row md:items-center"><span className="shrink-0 text-xs font-semibold uppercase text-accent">{c.notice}</span><span className="hidden h-4 w-px bg-border md:block" /><p className="font-body text-sm text-muted-foreground">{c.disclaimer}</p></div></aside>

      <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6"><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div id="faq"><h2 className="text-2xl font-semibold">{c.faqTitle}</h2><div className="mt-6 divide-y divide-border border border-border">{c.faqs.map(([q, a], index) => <article key={q} className="p-5"><div className="flex gap-3"><span className="mt-0.5 text-xs text-accent">0{index + 1}</span><div><h3 className="text-sm font-semibold">{q}</h3><p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{a}</p></div></div></article>)}</div></div>
        <div id="rfq" className="self-start border border-border bg-card"><div className="border-b border-border px-5 py-5 sm:px-6"><h2 className="text-xl font-semibold">{c.rfqTitle}</h2><p className="mt-1 font-body text-sm text-muted-foreground">{c.rfqIntro}</p></div>
          <form id="rfq-form" onSubmit={submitEmail} className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2" noValidate>
            <Field name="vessel" label={c.vessel} maxLength={100} /><Field name="email" label={c.vesselEmail} type="email" maxLength={255} /><Field name="port" label={c.port} maxLength={100} /><Field name="eta" label={c.eta} type="datetime-local" maxLength={80} /><Field name="items" label={c.items} textarea maxLength={3000} className="sm:col-span-2" />
            <div className="bg-card p-5 sm:col-span-2 sm:p-6">{error && <p role="alert" className="mb-4 text-sm text-destructive">{error}</p>}<div className="flex flex-col gap-3 sm:flex-row"><Button type="submit" className="flex-1"><Mail className="size-4" />{c.emailRfq}</Button><Button type="button" variant="outline" className="flex-1" onClick={submitWhatsApp}><MessageCircle className="size-4" />{c.whatsappRfq}</Button></div><p className="mt-4 font-body text-xs text-muted-foreground">{c.po} <a href={`mailto:${CONTACT.email}`} className="text-accent underline underline-offset-4">{CONTACT.email}</a></p></div>
          </form>
          <div className="grid gap-px border-t border-border bg-border sm:grid-cols-2"><QrCard image={whatsappQr.url} alt="QR code to contact Arabian Gulf Ship Supplies on WhatsApp" label="WhatsApp" value={CONTACT.phoneDisplay} scanLabel={c.scan} copyLabel={c.copyWhatsapp} copiedLabel={c.copied} isCopied={copied === "whatsapp"} onCopy={copyWhatsapp} width={446} height={444} /><QrCard image={wechatQr.url} alt="QR code containing the WeChat ID HajiDubai" label="WeChat" value={CONTACT.wechat} scanLabel={c.scan} copyLabel={c.copyWechat} copiedLabel={c.copied} isCopied={copied === "wechat"} onCopy={copyWechat} width={580} height={586} /></div>
        </div>
      </div></section>

      <section id="contact" className="border-t border-border bg-deep">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6">
          <SectionHeader title={c.contactTitle} kicker={c.contactKicker} />
          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-panel p-6"><p className="text-xs uppercase text-muted-foreground">{c.salesManager}</p><p className="mt-2 text-lg font-semibold">A. Haji Mohamed</p></div>
            <div className="bg-panel p-6"><p className="flex items-center gap-2 text-xs uppercase text-muted-foreground"><Phone className="size-3.5 text-accent" />{c.mobile}</p><a href={CONTACT.phoneHref} className="mt-2 block text-lg font-semibold hover:text-accent">{CONTACT.phoneDisplay}</a><a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm text-primary hover:text-accent">WhatsApp →</a></div>
            <div className="bg-panel p-6"><p className="flex items-center gap-2 text-xs uppercase text-muted-foreground"><MessageCircle className="size-3.5 text-accent" />WeChat</p><button type="button" onClick={copyWechat} className="mt-2 block cursor-pointer text-lg font-semibold hover:text-accent">{CONTACT.wechat}</button><p className="mt-1 text-sm text-muted-foreground">{copied === "wechat" ? c.copied : c.copyWechat}</p></div>
            <div className="bg-panel p-6"><p className="flex items-center gap-2 text-xs uppercase text-muted-foreground"><Mail className="size-3.5 text-accent" />{c.email}</p><a href={`mailto:${CONTACT.email}`} className="mt-2 block break-all text-lg font-semibold hover:text-accent">{CONTACT.email}</a></div>
            <div className="flex items-start gap-2 bg-card p-6 font-body text-sm text-muted-foreground md:col-span-2 lg:col-span-4"><MapPin className="mt-0.5 size-4 shrink-0 text-accent" />{c.address}: Arabian Gulf Ship Supplies · {CONTACT.address}</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-deep pb-24 sm:pb-8"><div className="mx-auto grid max-w-[1440px] gap-6 px-4 py-8 sm:px-6 md:grid-cols-[1fr_auto]"><div><div className="flex items-center gap-3"><img src={logo.url} alt="AGSS logo" width={512} height={512} loading="lazy" className="size-12 rounded-md bg-white object-contain p-0.5" /><p className="font-brand text-lg font-medium uppercase tracking-[0.08em]">Arabian Gulf <span className="text-accent">Ship Supplies</span></p></div><p className="mt-1 font-body text-sm text-muted-foreground">Marine provisions and vessel supply across the UAE.</p></div><div className="space-y-2 font-body text-sm text-muted-foreground"><p className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-accent" />{c.address}: {CONTACT.address}</p><p className="flex items-center gap-2"><Mail className="size-4 text-accent" /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p></div></div></footer>

      <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-2 rounded-full border border-foreground/15 bg-foreground/10 p-1.5 shadow-2xl backdrop-blur-xl backdrop-saturate-150">
        <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp" className="flex size-11 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity hover:opacity-85"><WhatsAppLogo className="size-6" /></a>
        <button type="button" onClick={() => setWechatOpen(true)} aria-label="WeChat" title="WeChat" className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-[#07C160] text-white transition-opacity hover:opacity-85"><WeChatLogo className="size-6" /></button>
        <a href={`mailto:${CONTACT.email}`} aria-label="Email" title="Email" className="flex size-11 items-center justify-center rounded-full bg-panel text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"><Mail className="size-5" /></a>
        <a href="tel:+971509883935" aria-label="Call" title="Call" className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground md:hidden"><Phone className="size-5" /></a>
      </div>
      {wechatOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm" onClick={() => setWechatOpen(false)} role="dialog" aria-modal="true" aria-label="WeChat">
          <div className="relative w-full max-w-xs border border-border bg-card p-6 text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setWechatOpen(false)} aria-label="Close" className="absolute right-3 top-3 cursor-pointer text-muted-foreground hover:text-foreground"><X className="size-5" /></button>
            <p className="text-xs uppercase text-accent">WeChat</p>
            <img src={wechatQr.url} alt="QR code containing the WeChat ID HajiDubai" width={580} height={586} className="mx-auto mt-3 w-48 bg-white p-2" />
            <p className="mt-4 text-lg font-semibold">{CONTACT.wechat}</p>
            <Button type="button" className="mt-3 w-full" onClick={copyWechat}>{copied === "wechat" ? <Check className="size-4" /> : <Copy className="size-4" />}{copied === "wechat" ? c.copied : c.copyWechat}</Button>
          </div>
        </div>
      )}
    </main>
  );
}

function Stat({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return <div className="min-w-0 bg-card px-3 py-3 sm:px-4"><p className="truncate text-[10px] uppercase text-muted-foreground">{label}</p><p className={`mt-1 truncate text-xs font-medium sm:text-sm ${accent ? "text-accent" : "text-foreground"}`}>{value}</p></div>;
}

function SectionHeader({ title, kicker }: { title: string; kicker: string }) {
  return <div className="mb-8 flex flex-col gap-2 border-b border-border pb-3 sm:flex-row sm:items-end sm:justify-between"><h2 className="text-2xl font-semibold">{title}</h2><span className="max-w-xl font-body text-xs text-muted-foreground sm:text-right">{kicker}</span></div>;
}

function Field({ name, label, type = "text", textarea = false, maxLength, className = "" }: { name: string; label: string; type?: string; textarea?: boolean; maxLength: number; className?: string }) {
  const classes = "mt-2 w-full border border-border bg-deep px-3 py-2.5 font-body text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent";
  return <label className={`block bg-card p-4 ${className}`}><span className="text-xs font-medium uppercase text-muted-foreground">{label}</span>{textarea ? <textarea name={name} maxLength={maxLength} rows={5} required className={classes} /> : <input name={name} type={type} maxLength={maxLength} required className={classes} />}</label>;
}

function MiniQr({ image, alt, label, width, height }: { image: string; alt: string; label: string; width: number; height: number }) {
  return <div className="bg-panel p-3 text-center"><img src={image} alt={alt} width={width} height={height} loading="lazy" className="mx-auto size-24 bg-foreground p-1" /><p className="mt-2 text-xs font-semibold">{label}</p></div>;
}

function QrCard({ image, alt, label, value, scanLabel, copyLabel, copiedLabel, isCopied, onCopy, width, height }: { image: string; alt: string; label: string; value: string; scanLabel: string; copyLabel: string; copiedLabel: string; isCopied: boolean; onCopy: () => void; width: number; height: number }) {
  return <div className="bg-panel p-5"><div className="flex items-center gap-4"><img src={image} alt={alt} width={width} height={height} loading="lazy" className="size-24 bg-foreground p-1" /><div><p className="text-xs uppercase text-muted-foreground">{scanLabel}</p><p className="mt-1 font-semibold">{label}</p><p className="text-sm text-accent">{value}</p></div></div><Button type="button" variant="ghost" size="sm" className="mt-3" onClick={onCopy}>{isCopied ? <Check className="size-4" /> : <Copy className="size-4" />}{isCopied ? copiedLabel : copyLabel}</Button></div>;
}

function WhatsAppLogo({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41"/></svg>;
}

function WeChatLogo({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}><path d="M8.69 2.19C3.89 2.19 0 5.48 0 9.53c0 2.21 1.17 4.2 3 5.55a.59.59 0 0 1 .21.66l-.39 1.48c-.02.07-.05.14-.05.21 0 .16.13.29.29.29a.33.33 0 0 0 .17-.05l1.9-1.11a.9.9 0 0 1 .73-.1c.89.26 1.84.4 2.83.4.16 0 .32 0 .48-.01a5.86 5.86 0 0 1-.25-1.69c0-3.69 3.56-6.68 7.95-6.68h.47C16.73 4.83 13.07 2.19 8.69 2.19m-2.6 4.41c.63 0 1.15.52 1.15 1.16 0 .64-.52 1.16-1.15 1.16-.64 0-1.16-.52-1.16-1.16 0-.64.52-1.16 1.16-1.16m5.81 0c.64 0 1.15.52 1.15 1.16 0 .64-.51 1.16-1.15 1.16-.64 0-1.16-.52-1.16-1.16 0-.64.52-1.16 1.16-1.16m4.91 2.86c-3.88 0-7.04 2.62-7.04 5.86 0 3.24 3.16 5.86 7.04 5.86.8 0 1.58-.11 2.29-.32a.72.72 0 0 1 .59.08l1.54.9c.04.03.09.04.14.04a.24.24 0 0 0 .23-.24c0-.06-.02-.12-.04-.17l-.32-1.2a.48.48 0 0 1 .17-.54C23.07 18.67 24 17.07 24 15.32c0-3.24-3.15-5.86-7.04-5.86m-2.33 2.7c.52 0 .94.42.94.94a.94.94 0 0 1-1.88 0c0-.52.42-.94.94-.94m4.66 0c.52 0 .94.42.94.94a.94.94 0 0 1-1.88 0c0-.52.42-.94.94-.94"/></svg>;
}
