import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronRight, Copy, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";

import portImage from "@/assets/uae-port-night.jpg";
import wechatQr from "@/assets/wechat-qr.png.asset.json";
import whatsappQr from "@/assets/whatsapp-qr.png.asset.json";
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
    directLine: "Direct line",
    language: "Language",
    coverage: "Coverage",
    allPorts: "All UAE ports",
    serviceTitle: "One-stop supply",
    serviceKicker: "Three core business lines",
    services: [
      { title: "Provisions", zh: "伙食供应", body: "Vessel provisions selected for multinational and Chinese crews.", items: ["Frozen foods", "Fresh produce", "Dry provisions", "Cabin & galley supplies"] },
      { title: "Bonded Stores", zh: "保税物品", body: "Bonded goods coordinated for delivery in line with local requirements.", items: ["Tobacco products", "Beverages", "Personal care", "Bonded consumables"] },
      { title: "Private Crew Orders", zh: "船员私人订购", body: "Personal purchases consolidated for convenient vessel delivery.", items: ["Gadgets & electronics", "Crew purchases", "Toiletries", "Personal essentials"] },
    ],
    technical: "Technical supplies are also available on request, including selected engine, deck, cabin, galley, electrical and safety stores.",
    portTitle: "UAE port coverage",
    portIntro: "Supply coordination at ports and anchorages throughout the United Arab Emirates.",
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
    directLine: "直线电话",
    language: "语言",
    coverage: "覆盖范围",
    allPorts: "阿联酋所有港口",
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

  const copyWechat = () => copyValue(CONTACT.wechat, "wechat");
  const copyWhatsapp = () => copyValue(CONTACT.phoneDisplay, "whatsapp");

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <section aria-label={c.status} className="border-b border-border bg-deep">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-4 py-6 sm:flex-row sm:justify-between sm:px-6">
          <div className="min-w-0 text-center sm:text-left">
            <p className="inline-flex items-center gap-2 text-xs uppercase text-muted-foreground"><span className="signal-dot size-1.5 rounded-full bg-accent" />{c.directLine} · {c.active}</p>
            <a href={CONTACT.phoneHref} className="mt-1 block text-2xl font-semibold transition-colors hover:text-accent sm:text-3xl">{CONTACT.phoneDisplay}</a>
          </div>
          <div className="grid shrink-0 grid-cols-2 gap-px border border-border bg-border">
            <MiniQr image={whatsappQr.url} alt="QR code to contact Arabian Gulf Ship Supplies on WhatsApp" label="WhatsApp" copyLabel={c.copyWhatsapp} copiedLabel={c.copied} isCopied={copied === "whatsapp"} onCopy={copyWhatsapp} width={446} height={444} />
            <MiniQr image={wechatQr.url} alt="QR code containing the WeChat ID HajiDubai" label="WeChat" copyLabel={c.copyWechat} copiedLabel={c.copied} isCopied={copied === "wechat"} onCopy={copyWechat} width={580} height={586} />
          </div>
        </div>
      </section>

      <header className="sticky top-0 z-40 border-b border-primary/20 bg-deep/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <div className="flex min-w-0 items-center gap-4 text-xs text-muted-foreground">
            <a href={CONTACT.phoneHref} className="hidden font-medium text-foreground transition-colors hover:text-accent sm:inline">{CONTACT.phoneDisplay}</a>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="text-primary transition-colors hover:text-accent">WhatsApp</a>
            <button onClick={copyWechat} className="cursor-pointer text-primary transition-colors hover:text-accent">WeChat: {CONTACT.wechat}</button>
            <a href={`mailto:${CONTACT.email}`} className="hidden text-primary transition-colors hover:text-accent md:inline">{CONTACT.email}</a>
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
          <a href="#top" className="max-w-[16rem] text-sm font-bold leading-tight uppercase sm:text-base">Arabian Gulf <span className="text-accent">Ship Supplies</span></a>
          <nav className="hidden items-center gap-6 text-xs font-medium text-muted-foreground lg:flex">
            <a href="#services" className="hover:text-accent">{c.navServices}</a><a href="#ports" className="hover:text-accent">{c.navPorts}</a><a href="#faq" className="hover:text-accent">{c.navFaq}</a>
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
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[3/2] overflow-hidden border border-border bg-card"><img src={portImage} alt="Container vessel alongside a brightly lit UAE port at night" width={1200} height={832} fetchPriority="high" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-background/10" /></div>
            <div className="grid grid-cols-3 gap-px overflow-hidden bg-border border border-border">
              <Stat label={c.status} value={c.active} accent /><Stat label={c.language} value="EN / 中文" /><Stat label={c.coverage} value={c.allPorts} />
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

      <footer className="border-t border-border bg-deep pb-24 sm:pb-8"><div className="mx-auto grid max-w-[1440px] gap-6 px-4 py-8 sm:px-6 md:grid-cols-[1fr_auto]"><div><p className="font-semibold uppercase">Arabian Gulf <span className="text-accent">Ship Supplies</span></p><p className="mt-1 font-body text-sm text-muted-foreground">Marine provisions and vessel supply across the UAE.</p></div><div className="space-y-2 font-body text-sm text-muted-foreground"><p className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-accent" />{c.address}: {CONTACT.address}</p><p className="flex items-center gap-2"><Mail className="size-4 text-accent" /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p></div></div></footer>

      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-4 gap-px border border-primary/30 bg-border shadow-2xl sm:left-auto sm:right-4 sm:grid-cols-3">
        <Button asChild size="sm" className="min-w-0"><a href={CONTACT.phoneHref}><Phone className="size-4" /><span className="hidden sm:inline">Call</span></a></Button><Button asChild variant="outline" size="sm" className="min-w-0 bg-panel"><a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="size-4" /><span className="hidden sm:inline">WhatsApp</span></a></Button><Button type="button" variant="outline" size="sm" className="min-w-0 bg-panel" onClick={copyWechat}><Copy className="size-4" /><span className="hidden sm:inline">WeChat</span></Button><Button asChild size="sm" className="min-w-0 sm:hidden"><a href="#rfq"><Send className="size-4" /><span className="sr-only">RFQ</span></a></Button>
      </div>
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

function QrCard({ image, alt, label, value, scanLabel, copyLabel, copiedLabel, isCopied, onCopy, width, height }: { image: string; alt: string; label: string; value: string; scanLabel: string; copyLabel: string; copiedLabel: string; isCopied: boolean; onCopy: () => void; width: number; height: number }) {
  return <div className="bg-panel p-5"><div className="flex items-center gap-4"><img src={image} alt={alt} width={width} height={height} loading="lazy" className="size-24 bg-foreground p-1" /><div><p className="text-xs uppercase text-muted-foreground">{scanLabel}</p><p className="mt-1 font-semibold">{label}</p><p className="text-sm text-accent">{value}</p></div></div><Button type="button" variant="ghost" size="sm" className="mt-3" onClick={onCopy}>{isCopied ? <Check className="size-4" /> : <Copy className="size-4" />}{isCopied ? copiedLabel : copyLabel}</Button></div>;
}
