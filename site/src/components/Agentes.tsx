"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Agentes.module.css";

const agentes = [
  { emoji: "👑", name: "CEO", desc: "Orquestrador. Planeja, delega e toma decisões estratégicas.", ia: "Claude", cor: "#7C3AED" },
  { emoji: "⚙️", name: "DEV", desc: "Infraestrutura, scripts Python, automações e deploys.", ia: "Antigravity", cor: "#10B981" },
  { emoji: "✍️", name: "COPY", desc: "Copywriting persuasivo, roteiros para vídeos e e-mails.", ia: "Claude", cor: "#7C3AED" },
  { emoji: "🎨", name: "DESIGNER", desc: "Direção de arte e engenharia de prompts para imagens e vídeos.", ia: "Claude + Midjourney", cor: "#F59E0B" },
  { emoji: "💻", name: "CODER", desc: "Pair programming inline. Bugs, CSS e lógica de componentes.", ia: "Cursor", cor: "#06B6D4" },
  { emoji: "🔍", name: "SCRAPER", desc: "Extração de leads e dados da web de forma automatizada.", ia: "Antigravity", cor: "#10B981" },
  { emoji: "📱", name: "WHATSAPP", desc: "Prospecção e disparos automáticos via Evolution API.", ia: "Antigravity", cor: "#10B981" },
  { emoji: "📊", name: "ESTRATEGISTA", desc: "Análise de mercado, precificação e plano de crescimento.", ia: "Claude", cor: "#7C3AED" },
];

export default function Agentes() {
  const ref = useRef(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">// OS AGENTES</p>
          <h2 className="section-title">
            Um time completo,<br />
            <span className="gradient-text">pronto para usar.</span>
          </h2>
          <p className="section-subtitle">
            Cada agente é um arquivo <code className={styles.inlineCode}>.md</code> com instruções especializadas. Basta carregar na IA certa e ele assume o papel.
          </p>
        </div>
        <div className={styles.grid}>
          {agentes.map((a, i) => (
            <motion.div
              key={a.name}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className={styles.cardInner}>
                <div className={styles.top}>
                  <span className={styles.emoji}>{a.emoji}</span>
                  <span className={styles.agenteName}>{a.name}</span>
                </div>
                <p className={styles.agenteDesc}>{a.desc}</p>
                <div className={styles.iaBadge} style={{ color: a.cor, borderColor: a.cor + "30", background: a.cor + "12" }}>
                  {a.ia}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
