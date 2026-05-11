"use client";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./TerminalDemo.module.css";

const ONBOARDING = [
  { role: "system", text: "$ /ceo", delay: 0 },
  { role: "ai", text: "Escritório de IA iniciado. Bem-vindo.", delay: 600 },
  { role: "ai", text: "Antes de começarmos, preciso entender com o que você trabalha.", delay: 1200 },
  { role: "ai", text: "Qual é o seu perfil profissional?", delay: 1800 },
];

const PROFILES: Record<string, { label: string; response: string[]; color: string }> = {
  clt: {
    label: "👔 CLT / Funcionário",
    color: "#06B6D4",
    response: [
      "> Perfil: CLT detectado.",
      "> Ativando agentes: ORGANIZER + COPY.",
      "> Prioridade: Automatizar tarefas repetitivas,",
      "  criar modelos de e-mails e gerenciar sua agenda.",
      "> Seu escritório está personalizado. 🚀",
    ],
  },
  freelancer: {
    label: "🎯 Freelancer / Autônomo",
    color: "#7C3AED",
    response: [
      "> Perfil: Freelancer detectado.",
      "> Ativando agentes: CEO + COPY + DESIGNER.",
      "> Prioridade: Captação de clientes, proposta",
      "  comercial automática e conteúdo para redes.",
      "> Seu escritório está personalizado. 🚀",
    ],
  },
  empresa: {
    label: "🏢 Empresário / Agência",
    color: "#10B981",
    response: [
      "> Perfil: Empresário detectado.",
      "> Ativando agentes: CEO + DEV + SCRAPER + WHATSAPP.",
      "> Prioridade: Prospecção automatizada, sistema",
      "  de vendas e gestão de equipe com IA.",
      "> Seu escritório está personalizado. 🚀",
    ],
  },
};

export default function TerminalDemo() {
  const [phase, setPhase] = useState<"intro" | "choose" | "result">("intro");
  const [shownLines, setShownLines] = useState<typeof ONBOARDING>([]);
  const [chosen, setChosen] = useState<string | null>(null);
  const [resultLines, setResultLines] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    ONBOARDING.forEach((line, i) => {
      const t = setTimeout(() => {
        setShownLines((prev) => [...prev, line]);
        if (i === ONBOARDING.length - 1) {
          setTimeout(() => setPhase("choose"), 600);
        }
      }, line.delay);
      timeouts.push(t);
    });
    return () => timeouts.forEach(clearTimeout);
  }, [inView]);

  const choose = (key: string) => {
    if (phase !== "choose") return;
    setChosen(key);
    setPhase("result");
    const lines = PROFILES[key].response;
    lines.forEach((line, i) => {
      setTimeout(() => {
        setResultLines((prev) => [...prev, line]);
      }, i * 300);
    });
  };

  const reset = () => {
    setPhase("intro");
    setShownLines([]);
    setChosen(null);
    setResultLines([]);
    setTimeout(() => {
      let timeouts: ReturnType<typeof setTimeout>[] = [];
      ONBOARDING.forEach((line, i) => {
        const t = setTimeout(() => {
          setShownLines((prev) => [...prev, line]);
          if (i === ONBOARDING.length - 1) {
            setTimeout(() => setPhase("choose"), 600);
          }
        }, line.delay);
        timeouts.push(t);
      });
    }, 100);
  };

  return (
    <section className={styles.section} id="demo" ref={ref}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.text}>
            <p className="section-label">// TERMINAL DEMO</p>
            <h2 className="section-title">
              O CEO que faz<br />
              <span className="gradient-text">o onboarding por você.</span>
            </h2>
            <p className="section-subtitle">
              Ao digitar <code className={styles.code}>/ceo</code>, o agente CEO inicia uma entrevista para entender o seu negócio e personalizar toda a agência.
            </p>
            <p className={styles.hint}>← Interaja com o terminal ao lado</p>
          </div>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <div className={styles.dots}>
                <span style={{ background: "#FF5F57" }} />
                <span style={{ background: "#FFBD2E" }} />
                <span style={{ background: "#28C840" }} />
              </div>
              <span className={styles.terminalTitle}>escritorio — bash</span>
              {phase === "result" && (
                <button className={styles.resetBtn} onClick={reset}>↺ Reiniciar</button>
              )}
            </div>
            <div className={styles.terminalBody}>
              {shownLines.map((line, i) => (
                <div
                  key={i}
                  className={`${styles.line} ${line.role === "system" ? styles.lineSystem : styles.lineAi}`}
                >
                  {line.role === "ai" && <span className={styles.prompt}>CEO &gt;</span>}
                  {line.text}
                </div>
              ))}

              {phase === "choose" && (
                <div className={styles.choices}>
                  {Object.entries(PROFILES).map(([key, p]) => (
                    <button
                      key={key}
                      className={styles.choiceBtn}
                      style={{ "--btn-color": p.color } as React.CSSProperties}
                      onClick={() => choose(key)}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              )}

              {chosen && (
                <div className={styles.line} style={{ color: PROFILES[chosen].color, marginTop: 8, fontFamily: "var(--font-mono)" }}>
                  &gt; {PROFILES[chosen].label}
                </div>
              )}

              {resultLines.map((line, i) => (
                <div key={i} className={`${styles.line} ${styles.lineResult}`}>
                  {line}
                </div>
              ))}

              <span className={styles.cursor}>█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
