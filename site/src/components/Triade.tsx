"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Triade.module.css";

const ias = [
  {
    emoji: "🧠",
    name: "Claude",
    role: "O Estrategista",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.2)",
    description:
      "Janela de contexto de 200k tokens. Ideal para planejamento estratégico, roteiros longos, copywriting persuasivo e tomada de decisão.",
    agentes: ["CEO", "COPY", "DESIGNER (Prompts)"],
    install: "claude.ai ou Claude Desktop",
    tag: "Pensamento & Texto",
  },
  {
    emoji: "💻",
    name: "Cursor / Codex",
    role: "O Pair Programmer",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.2)",
    description:
      "Editor de código com IA embutida. Olha o arquivo que você está editando e faz correções cirúrgicas, autocomplete avançado e refatorações precisas.",
    agentes: ["CODER"],
    install: "cursor.com (substitui o VS Code)",
    tag: "Edição de Código",
  },
  {
    emoji: "⚡",
    name: "Antigravity / Terminal",
    role: "O Arquiteto DevOps",
    color: "#10B981",
    glow: "rgba(16,185,129,0.2)",
    description:
      "Acesso total à sua máquina. Cria scripts Python, faz deploys na Vercel, raspa dados, sobe servidores e automatiza tudo sem que você precise apertar botões.",
    agentes: ["DEV", "SCRAPER", "WHATSAPP"],
    install: "APIs (Gemini, OpenAI) via terminal",
    tag: "Automação Local",
  },
];

export default function Triade() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">// A TRÍADE</p>
          <h2 className="section-title">
            Não é uma IA. É um{" "}
            <span className="gradient-text">time inteiro.</span>
          </h2>
          <p className="section-subtitle">
            Pare de tentar fazer uma única IA ser o Bombril da sua empresa. Cada
            cérebro tem uma especialidade. Divida para multiplicar.
          </p>
        </div>
        <div className={styles.grid}>
          {ias.map((ia, i) => (
            <motion.div
              key={ia.name}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{ "--glow": ia.glow } as React.CSSProperties}
            >
              <div className={styles.cardTop}>
                <span className={styles.emoji}>{ia.emoji}</span>
                <span className={styles.tagBadge} style={{ color: ia.color, borderColor: ia.color + "40", background: ia.color + "15" }}>
                  {ia.tag}
                </span>
              </div>
              <h3 className={styles.iaName} style={{ color: ia.color }}>{ia.name}</h3>
              <p className={styles.iaRole}>{ia.role}</p>
              <p className={styles.iaDesc}>{ia.description}</p>
              <div className={styles.agentes}>
                <span className={styles.agentesLabel}>Agentes:</span>
                {ia.agentes.map((a) => (
                  <span key={a} className={styles.agentTag}>{a}</span>
                ))}
              </div>
              <div className={styles.install}>
                <span className={styles.installIcon}>↗</span>
                <code className={styles.installText}>{ia.install}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
