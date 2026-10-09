import { FormEvent, useEffect, useState, type ReactNode } from "react";
import { budgets, projectTypes, timelines } from "../api/options.js";
import essemIcon from "./assets/essem-icon.png";
import essemLogo from "./assets/essem-logo.png";
import cafeService from "./assets/cafe-service.jpg";
import colleaguesPlanning from "./assets/colleagues-planning.jpg";
import heroOffice from "./assets/hero-operations.jpg";
import paperRecords from "./assets/paper-records.jpg";
import shopCounter from "./assets/shop-counter.jpg";
import websiteDesk from "./assets/website-desk.jpg";

type IconName = "arrow" | "mail" | "phone" | "pin";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M8 3h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3L17 12l4 1.5V17a2 2 0 0 1-2.2 2A16 16 0 0 1 5 6.2 2 2 0 0 1 7 4Z" />
    ),
    pin: (
      <>
        <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  );
}

const services = [
  {
    number: "01",
    title: "AI and automations",
    path: "/ai-and-automations",
    image: shopCounter,
    alt: "A shopkeeper checking orders on a phone behind the counter",
    copy: "AI and workflows that connect your tools, people, and customers, so repetitive work stops living in chats and spreadsheets.",
    points: ["Applied AI", "Process mapping", "Tool integrations"],
  },
  {
    number: "02",
    title: "Digitization",
    path: "/digitization",
    image: paperRecords,
    alt: "Hands sorting a stack of paper records beside a laptop",
    copy: "Practical systems that replace paper, scattered files, and manual follow-ups with clearer digital operations.",
    points: ["Operations systems", "Records and workflows", "Staff-ready tools"],
  },
  {
    number: "03",
    title: "Online presence",
    image: cafeService,
    alt: "A cafe server speaking with a customer who is using a phone",
    copy: "The digital face of your business: clear, credible, and built to turn interest into enquiries.",
    points: ["Brand positioning", "Content foundations", "Lead pathways"],
  },
  {
    number: "04",
    title: "Websites and apps",
    path: "/websites",
    image: websiteDesk,
    alt: "A designer working at a laptop in a simple office",
    copy: "Custom websites and mobile apps when your operation needs a strong front end or a dedicated product layer.",
    points: ["Marketing sites", "Web applications", "Mobile apps"],
  },
];

const audiences = [
  { number: "01", title: "SME owners", copy: "Owners who want less chaos in day-to-day operations and a clearer digital presence." },
  { number: "02", title: "Retail and service businesses", copy: "Shops, cafes, salons, clinics, and service teams that sell and serve customers daily." },
  { number: "03", title: "Teams going digital", copy: "Businesses ready to move off paper, WhatsApp-only operations, and disconnected tools." },
  { number: "04", title: "Product-minded founders", copy: "Founders who need websites, apps, or productized systems like RelayIQ." },
];

const steps = [
  { number: "01", title: "Discovery", copy: "Understand the operation before proposing tools." },
  { number: "02", title: "Build", copy: "Ship systems, sites, and automations with clear scope." },
  { number: "03", title: "Launch", copy: "Go live with training, handover, and support paths." },
  { number: "04", title: "Improve", copy: "Refine from real usage, not slide-deck theory." },
];

const values = ["Innovation", "Impact", "Integrity", "Collaboration", "Sustainability"];

const whatsappUrl = "https://wa.me/254728210962?text=Hello%20ESSEM%2C%20I%20would%20like%20to%20discuss%20a%20project.";

const servicePages = [
  {
    path: "/ai-and-automations",
    title: "AI and automations | Essem Digital Innovations",
    description: "Essem designs AI and workflows that connect tools, people, and customers, so repetitive work leaves chats and spreadsheets. Offices in Mombasa and Nairobi.",
    eyebrow: "AI and automations",
    h1: "AI and automations for work that still lives in chats.",
    lead: "AI and workflows that connect your tools, people, and customers, so repetitive work stops living in chats and spreadsheets.",
    image: shopCounter,
    alt: "A shopkeeper checking orders on a phone behind the counter",
    points: [
      { title: "Applied AI", copy: "Use AI for the repetitive checks, replies, and summaries your team already does by hand." },
      { title: "Process mapping", copy: "We trace how the work actually moves before choosing a tool." },
      { title: "Tool integrations", copy: "Connect the systems you already use so people stop copying the same details between them." },
    ],
  },
  {
    path: "/digitization",
    title: "Digitization | Essem Digital Innovations",
    description: "Essem replaces paper, scattered files, and manual follow-ups with practical digital operations for businesses in Mombasa and Nairobi.",
    eyebrow: "Digitization",
    h1: "Digitization that replaces paper and scattered follow-ups.",
    lead: "Practical systems that replace paper, scattered files, and manual follow-ups with clearer digital operations.",
    image: paperRecords,
    alt: "Hands sorting a stack of paper records beside a laptop",
    points: [
      { title: "Operations systems", copy: "A single place for the work your team currently tracks in books, chats, and memory." },
      { title: "Records and workflows", copy: "Records that stay findable, and steps that do not depend on one person remembering them." },
      { title: "Staff-ready tools", copy: "Systems people can use on the first day, without a long training programme." },
    ],
  },
  {
    path: "/websites",
    title: "Websites and apps | Essem Digital Innovations",
    description: "Essem builds marketing sites, web applications, and mobile apps when a business needs a proper front end. Based in Mombasa and Nairobi.",
    eyebrow: "Websites and apps",
    h1: "Websites and apps built around how you operate.",
    lead: "Custom websites and mobile apps when your operation needs a strong front end or a dedicated product layer.",
    image: websiteDesk,
    alt: "A designer working at a laptop in a simple office",
    points: [
      { title: "Marketing sites", copy: "A clear public site that explains the business and turns interest into an enquiry." },
      { title: "Web applications", copy: "Tools your staff or customers use in the browser, tied to the operation behind them." },
      { title: "Mobile apps", copy: "A phone layer when the work happens away from a desk." },
    ],
  },
];

function sectionHref(id: string) {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return path === "/" ? `#${id}` : `/#${id}`;
}

function PageMeta({ title, description, path }: { title: string; description: string; path: string }) {
  useEffect(() => {
    document.title = title;
    const set = (selector: string, value: string) => {
      const element = document.querySelector(selector);
      if (!element) return;
      if (element.tagName === "LINK") element.setAttribute("href", value);
      else element.setAttribute("content", value);
    };
    const url = `https://www.essemdigital.com${path}`;
    set('meta[name="description"]', description);
    set('link[rel="canonical"]', url);
    set('meta[property="og:title"]', title);
    set('meta[property="og:description"]', description);
    set('meta[property="og:url"]', url);
  }, [title, description, path]);
  return null;
}

function ServicePage({ page }: { page: (typeof servicePages)[number] }) {
  return (
    <section className="section service-page">
      <div className="container service-page__grid">
        <div>
          <div className="eyebrow eyebrow--green"><span />{page.eyebrow}</div>
          <h1>{page.h1}</h1>
          <p>{page.lead}</p>
          <div className="hero__actions">
            <a className="button" href="/#contact">
              Book a consultation
              <Icon name="arrow" />
            </a>
            <a className="text-link" href="/">Back to the homepage</a>
          </div>
        </div>
        <img alt={page.alt} src={page.image} />
      </div>
      <div className="container service-points">
        {page.points.map((point) => (
          <article key={point.title}>
            <h2>{point.title}</h2>
            <p>{point.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What does ESSEM actually do?",
    a: "ESSEM helps businesses digitize, automate, and show up online through AI and automations, digitization, online presence, websites, and apps. RelayIQ is one product under that mission.",
  },
  {
    q: "Who is ESSEM for?",
    a: "Growing businesses and SME teams across Kenya and East Africa that want practical systems and a stronger digital presence.",
  },
  {
    q: "What is RelayIQ?",
    a: "RelayIQ is an ESSEM product for WhatsApp-first selling and service: storefront, bookings, dine-in QR, and M-Pesa. Start free at relayiq.app, then talk to us if you need custom work around it.",
  },
  {
    q: "Do you build custom websites and apps?",
    a: "Yes. Websites and apps are part of how we deliver digitization and automation, especially when an operation needs a custom front end or a mobile layer.",
  },
  {
    q: "How do we get started?",
    a: "Use the form, email, phone, or WhatsApp. We will understand what you need to digitize or automate, then outline clear next steps. We reply within one business day.",
  },
];

function WhatsAppMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.14h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 13.92c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.63-.6-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.15-1.53-1.15-2.92s.73-2.07 1-2.35c.24-.28.64-.41 1.02-.41h.37c.12 0 .28-.04.44.34.16.4.56 1.37.61 1.47.05.1.08.22.02.35-.06.14-.1.22-.19.34-.1.12-.2.26-.29.35-.1.1-.2.2-.08.39.11.19.5.82 1.07 1.33.73.65 1.35.86 1.54.96.19.1.3.08.41-.05.11-.12.47-.55.6-.74.12-.19.25-.16.42-.1.17.07 1.08.51 1.27.6.19.1.31.14.36.22.05.08.05.72-.19 1.4Z" />
    </svg>
  );
}

function WhatsAppChat({ href }: { href: string }) {
  const [open, setOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setShowTeaser(true), reduce ? 0 : 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={open ? "wa-widget is-open" : "wa-widget"}>
      <section aria-labelledby="wa-title" className="wa-panel" inert={open ? undefined : true}>
        <header className="wa-panel__head">
          <span aria-hidden="true" className="wa-avatar">E</span>
          <div>
            <strong id="wa-title">Essem Digital</strong>
            <small>Replies within one business day</small>
          </div>
          <button aria-label="Close chat" className="wa-close" onClick={() => setOpen(false)} type="button">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
        </header>
        <div className="wa-panel__body">
          <p>Start a conversation with us today. Tell us what you want to digitize or automate.</p>
        </div>
        <a className="wa-go" href={href} rel="noreferrer" target="_blank">
          <WhatsAppMark />
          Continue on WhatsApp
        </a>
      </section>
      {showTeaser && !open ? (
        <button className="wa-teaser" onClick={() => setOpen(true)} type="button">
          Start a conversation with us today
        </button>
      ) : null}
      <button
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        className="wa-launcher"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? <svg aria-hidden="true" className="wa-x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" /></svg> : <WhatsAppMark />}
      </button>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setSolutionsOpen(false);
  };
  const solutionLinks = [
    { title: "AI and automations", href: "/ai-and-automations" },
    { title: "Digitization", href: "/digitization" },
    { title: "Online presence", href: "/#online-presence" },
    { title: "Websites and apps", href: "/websites" },
  ];

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      projectType: String(data.get("project") || ""),
      budgetRange: String(data.get("budget") || ""),
      timeline: String(data.get("timeline") || ""),
      message: String(data.get("message") || "").trim(),
      marketingConsent: false,
    };

    if (payload.name.length < 2) {
      setStatus("error");
      setFormError("Name must be at least 2 characters.");
      return;
    }
    if (payload.message.length < 10) {
      setStatus("error");
      setFormError("Message must be at least 10 characters.");
      return;
    }

    setStatus("sending");
    setFormError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setStatus("error");
        setFormError(result.error || "Failed to send message. Please try again.");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setFormError("Network error. Please try again or email info@essemdigital.com.");
    }
  };

  const activePage = servicePages.find((item) => item.path === window.location.pathname.replace(/\/$/, ""));

  return (
    <main>
      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <div className="container header__inner">
          <a aria-label="Essem Digital Innovations home" href="/">
            <img alt="Essem Digital Innovations" className="logo" src={essemLogo} />
          </a>
          <nav aria-label="Primary navigation" className={menuOpen ? "nav nav--open" : "nav"}>
            <div className={solutionsOpen ? "nav-drop is-open" : "nav-drop"}>
              <button
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
                onClick={() => setSolutionsOpen((open) => !open)}
                type="button"
              >
                Solutions
              </button>
              <div className="nav-drop__menu">
                {solutionLinks.map((item) => (
                  <a href={item.href} key={item.href} onClick={closeMenu}>{item.title}</a>
                ))}
              </div>
            </div>
            <a href={sectionHref("products")} onClick={closeMenu}>Products</a>
            <a href={sectionHref("about")} onClick={closeMenu}>About</a>
            <a href={sectionHref("approach")} onClick={closeMenu}>Approach</a>
            <a href={sectionHref("contact")} onClick={closeMenu}>Contact</a>
          </nav>
          <a className="button button--small" href={whatsappUrl} rel="noreferrer" target="_blank">Talk to us</a>
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <PageMeta
        description={activePage?.description ?? "Essem Digital Innovations helps businesses in Mombasa and Nairobi digitize operations, automate work, and build a credible online presence."}
        path={activePage?.path ?? "/"}
        title={activePage?.title ?? "Essem Digital Innovations | Mombasa and Nairobi"}
      />
      {activePage ? <ServicePage page={activePage} /> : <>

      <section className="hero" id="home">
        <div className="container hero__grid">
          <div className="hero__content reveal" data-reveal>
            <div className="eyebrow"><span />Building a Connected World</div>
            <h1>Infrastructure for <em>modern business.</em></h1>
            <p className="hero__lead">
              We help companies digitize operations, automate work, and present themselves online with the clarity of a serious brand.
            </p>
            <div className="hero__actions">
              <a className="button" href="#contact">
                Book a consultation
                <Icon name="arrow" />
              </a>
              <a className="text-link" href="#products">See RelayIQ <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <figure className="hero-photo reveal reveal--right" data-reveal>
            <div className="hero-photo__panel" />
            <img alt="An operator at a desk with a laptop, checklist, and receipt printer" src={heroOffice} />
            <figcaption>
              <small>Mombasa and Nairobi</small>
              <strong>Dependable digital systems for businesses that are done with manual work.</strong>
            </figcaption>
          </figure>
        </div>
        <div className="container proof reveal" data-reveal>
          <div><strong>Mombasa</strong><span>Mwembe Tayari</span></div>
          <div><strong>Nairobi</strong><span>City office</span></div>
          <div><strong>1 business day</strong><span>Typical reply time</span></div>
          <div><strong>RelayIQ</strong><span>Our own product</span></div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-heading reveal" data-reveal>
            <div>
              <div className="eyebrow eyebrow--blue"><span />What we deliver</div>
              <h2>Four focused offers. The work that moves a business from manual to modern.</h2>
            </div>
            <p>No inflated agency menu. Systems, sites, and automations designed around how the operation actually runs.</p>
          </div>
          <div className="service-grid reveal-group" data-reveal>
            {services.map((service) => (
              <article className="service-card" id={service.title === "Online presence" ? "online-presence" : undefined} key={service.title}>
                <img alt={service.alt} src={service.image} />
                <div className="service-card__body">
                  <span>{service.number}</span>
                  <h3>{"path" in service && service.path ? <a href={service.path}>{service.title}</a> : service.title}</h3>
                  <p>{service.copy}</p>
                  <ul>
                    {service.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  {"path" in service && service.path ? <a className="text-link" href={service.path}>Read this service</a> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about__grid reveal" data-reveal>
          <div>
            <div className="eyebrow eyebrow--blue"><span />About ESSEM</div>
            <h2>Built for operators who need systems that work.</h2>
            <p>
              Too many businesses still run on manual processes and a weak digital setup. Work slows down, customers get inconsistent service, and growth costs more effort than it should.
            </p>
            <p>
              ESSEM helps businesses digitize, automate, and show up online through systems, websites, apps, and smart automations. With offices in Mwembe Tayari, Mombasa and in Nairobi, we design for real operating environments.
            </p>
          </div>
          <div className="statements">
            <article>
              <small>Vision</small>
              <p>To build a smarter, more connected, and sustainable world through technology.</p>
            </article>
            <article>
              <small>Mission</small>
              <p>To design and deliver digital solutions that improve efficiency, strengthen connectivity, and create measurable value.</p>
            </article>
          </div>
        </div>
        <div className="container values reveal" data-reveal>
          {values.map((value) => <span key={value}>{value}</span>)}
        </div>
      </section>

      <section className="section product" id="products">
        <div className="container product__panel reveal" data-reveal>
          <img alt="" className="product__mark" src={essemIcon} />
          <div>
            <div className="eyebrow eyebrow--light"><span />ESSEM product</div>
            <h2>RelayIQ</h2>
            <p>
              WhatsApp-first commerce for growing businesses: storefront, bookings, dine-in QR, and M-Pesa, with a free Starter plan to begin.
            </p>
            <ul>
              <li>WhatsApp storefront and order flow</li>
              <li>Appointment bookings</li>
              <li>Dine-in table QR ordering</li>
              <li>M-Pesa payments</li>
            </ul>
            <div className="hero__actions">
              <a className="button button--light" href="https://relayiq.app" rel="noreferrer" target="_blank">
                Open RelayIQ
                <Icon name="arrow" />
              </a>
              <a className="text-link text-link--light" href="#contact">Need a custom build?</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section audience">
        <div className="container">
          <div className="section-heading reveal" data-reveal>
            <div>
              <div className="eyebrow eyebrow--green"><span />Who we serve</div>
              <h2>For businesses ready to professionalize operations.</h2>
            </div>
            <p>We work best with operators who want practical systems, not another layer of complexity.</p>
          </div>
          <div className="audience-grid reveal" data-reveal>
            {audiences.map((item) => (
              <article key={item.title}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band" data-reveal id="approach">
        <img alt="Two colleagues reviewing a plan in a bright office" src={colleaguesPlanning} />
        <div className="container band__copy">
          <div className="eyebrow eyebrow--light"><span />How we work</div>
          <h2>A clear path from conversation to live systems.</h2>
          <p>No mystery process. Four steps we actually use with every engagement.</p>
        </div>
      </section>

      <section className="section steps-section">
        <div className="container steps reveal" data-reveal>
          {steps.map((step) => (
            <article className={step.number === "02" ? "step step--focus" : "step"} key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq">
        <div className="container faq__grid">
          <div className="reveal" data-reveal>
            <div className="eyebrow eyebrow--blue"><span />FAQ</div>
            <h2>Clear answers before you commit.</h2>
            <p>Straight talk on what ESSEM does, who we serve, and how an engagement starts.</p>
          </div>
          <div className="faq__list reveal" data-reveal>
            {faqs.map((item, index) => {
              const open = openFaq === index;
              return (
                <article className={open ? "faq__item is-open" : "faq__item"} key={item.q}>
                  <button
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    type="button"
                  >
                    {item.q}
                    <span aria-hidden="true">{open ? "–" : "+"}</span>
                  </button>
                  {open ? <p>{item.a}</p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact__grid">
          <div className="reveal" data-reveal>
            <div className="eyebrow eyebrow--green"><span />Contact</div>
            <h2>Start the conversation.</h2>
            <p>Tell us what is manual today. Project type, budget, and timeline help us reply with a clearer next step.</p>
            <ul className="contact__details">
              <li><Icon name="mail" /><a href="mailto:info@essemdigital.com">info@essemdigital.com</a></li>
              <li><Icon name="phone" /><a href="tel:+254112576616">Mombasa · +254 112 576616</a></li>
              <li><Icon name="phone" /><a href="tel:+254728210962">Nairobi · +254 728 210 962</a></li>
              <li><Icon name="pin" /><span>Mwembe Tayari, Mombasa<br />Nairobi</span></li>
            </ul>
            <a className="text-link text-link--blue" href={whatsappUrl} rel="noreferrer" target="_blank">
              Continue on WhatsApp
              <Icon name="arrow" />
            </a>
          </div>
          <form className="contact-form reveal" data-reveal onSubmit={onSubmit}>
            <label>Name<input name="name" placeholder="Your name" required type="text" /></label>
            <label>Email<input name="email" placeholder="you@company.com" required type="email" /></label>
            <label>
              Project type
              <select defaultValue="" name="project" required>
                <option disabled value="">Select a service</option>
                {projectTypes.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <div className="form-row">
              <label>
                Budget range
                <select defaultValue="" name="budget" required>
                  <option disabled value="">Select a range</option>
                  {budgets.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label>
                Timeline
                <select defaultValue="" name="timeline" required>
                  <option disabled value="">Select a timeline</option>
                  {timelines.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
            </div>
            <label>Message<textarea name="message" placeholder="What do you need to digitize, automate, or launch online?" required rows={5} /></label>
            <button className="button" disabled={status === "sending"} type="submit">
              {status === "sending" ? "Sending..." : "Send message"}
              <Icon name="arrow" />
            </button>
            {status === "sent" ? <p className="form-note" role="status">Message sent. We will reply within one business day.</p> : null}
            {status === "error" ? <p className="form-note form-note--error" role="alert">{formError}</p> : null}
          </form>
        </div>
      </section>
      </>}

      <footer>
        <div className="container footer__top">
          <div>
            <img alt="Essem Digital Innovations" className="logo logo--footer" src={essemLogo} />
            <p>Building a Connected World. Digital systems, automations, and online presence for operators across East Africa.</p>
          </div>
          <div className="footer__links">
            <div>
              <strong>Explore</strong>
              <a href="/ai-and-automations">AI and automations</a>
              <a href="/digitization">Digitization</a>
              <a href="/websites">Websites and apps</a>
              <a href={sectionHref("products")}>RelayIQ</a>
            </div>
            <div>
              <strong>Connect</strong>
              <a href="mailto:info@essemdigital.com">info@essemdigital.com</a>
              <a href="tel:+254112576616">Mombasa · +254 112 576616</a>
              <a href="tel:+254728210962">Nairobi · +254 728 210 962</a>
              <a href="https://www.linkedin.com/company/essem-digital/" rel="noreferrer" target="_blank">LinkedIn</a>
              <a href="https://www.instagram.com/essemdigital" rel="noreferrer" target="_blank">Instagram</a>
              <a href="https://www.facebook.com/share/1TfTTa5qQo/" rel="noreferrer" target="_blank">Facebook</a>
            </div>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© {new Date().getFullYear()} Essem Digital Innovations.</span>
          <span>Mombasa and Nairobi</span>
        </div>
      </footer>

      <WhatsAppChat href={whatsappUrl} />
    </main>
  );
}
