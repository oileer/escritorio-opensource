import Hero from "@/components/Hero";
import Triade from "@/components/Triade";
import TerminalDemo from "@/components/TerminalDemo";
import Agentes from "@/components/Agentes";

export default function Home() {
  return (
    <main>
      <Hero />
      <Triade />
      <TerminalDemo />
      <Agentes />
      
      {/* Footer simples integrado diretamente para finalizar */}
      <footer style={{ padding: "60px 0", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p style={{ color: "var(--color-text-muted)", fontSize: "14px" }}>
            Escritório de IA — Projeto Open Source criado por <strong>Euller</strong>
          </p>
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
            <a href="https://github.com/oileer/escritorio-opensource" style={{ color: "var(--color-primary-light)", fontSize: "14px" }}>GitHub</a>
            <a href="#" style={{ color: "var(--color-primary-light)", fontSize: "14px" }}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
