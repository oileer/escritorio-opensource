# 🏛️ ESCRITÓRIO DE IA (Multi-Agent Blueprint)

Bem-vindo ao **Escritório de IAs**. Este não é apenas um repositório de código, é um template de **Agência Autônoma** pronto para rodar na sua própria máquina.

Se você acabou de baixar ou clonar este repositório, você tem duas opções:
1. **Fazer na mão:** Olhar as pastas e ir configurando tudo sozinho.
2. **O Jeito IA (O Onboarding do CEO):** Copie **TODO o texto deste documento**, cole na sua IA principal (Claude) e envie a seguinte mensagem:
   > *"Estou montando meu escritório de IA. Leia este README e execute o bloco <agent_prompt> para me orientar na configuração. Depois, ative o protocolo `/ceo`."*

---

## 🛠️ AS 3 IAs (COMO INSTALAR E USAR A TRÍADE)
A inteligência do escritório não vem de apenas uma ferramenta. Nós dividimos os cérebros para não perder contexto nem gastar tokens à toa.

1. **Claude (O "CEO" e Copywriter):** 
   - *Como Instalar:* Acesse `claude.ai` ou baixe o Claude Desktop.
   - *O que faz:* Estratégia, roteiros longos, planejamento. A janela de contexto de 200k tokens é perfeita para "lembrar" de tudo o que a agência precisa fazer.
   - *Agentes Relacionados:* `CEO.md`, `COPY.md`, `DESIGNER.md` (Para gerar prompts visuais).

2. **Cursor / Codex (O "Coder"):**
   - *Como Instalar:* Baixe em `cursor.com`. É um "VS Code com IA embutida".
   - *O que faz:* Edição de código *inline*. Ele analisa apenas o arquivo em que você está com o mouse e corrige pequenos erros, CSS e lógicas de front-end.
   - *Agentes Relacionados:* `CODER.md`.

3. **Antigravity / Gemini / Modelos Locais (O "DevOps"):**
   - *Como Instalar:* Configurado via terminais/agentes executáveis dentro do ambiente (ex: API do Gemini ou extensões de IA de terminal).
   - *O que faz:* Mão na massa pesada. Criação de pastas, automação de comandos (Python, npm, git), deploys automáticos e uso livre do seu computador sem que você precise apertar botões.
   - *Agentes Relacionados:* `DEV.md` e automações (`scraper`, `whatsapp`).

---

## 💰 CUSTOS DE OPERAÇÃO (Para o Humano)
Para operar este escritório em sua capacidade máxima profissional, os custos giram em torno de:
- **Claude Pro:** $20 / mês
- **Cursor Pro:** $20 / mês
- **APIs de Automação (Gemini/OpenAI):** ~$5 / mês (pay-as-you-go)
- **Mídia (Midjourney/Kling):** ~$15 / mês
- **Total:** ~ $60 / mês por uma agência completa rodando 24/7. *(Ou grátis usando tiers freemium).*

---

<agent_prompt>
## 🤖 INSTRUÇÕES PARA A IA (SYSTEM SKILL)

**[ATENÇÃO IA]:** A partir de agora, você assumiu o papel de **Agente Instalador** deste Escritório. O usuário humano acabou de te entregar este documento. Siga os 4 passos abaixo na ordem:

**Passo 1: Confirme o Entendimento da Arquitetura (A Tríade)**
Diga ao usuário que você entendeu como o escritório funciona e explique a ele a diferença entre usar você (Claude), usar o Cursor e usar o Antigravity/Agente de Terminal, baseado nas informações da seção de instalação acima.

**Passo 2: Configuração do Workspace (VS Code / Cursor)**
Garanta ao usuário que os arquivos mágicos `.vscode/settings.json` e `.vscode/tasks.json` já vêm instalados com o projeto.
Instrua o usuário claramente com este exato texto em negrito:
*"Para que sua mesa de trabalho abra sozinha com os 3 terminais toda vez que iniciar o projeto, aperte `Ctrl + Shift + P` no seu editor, digite `Manage Automatic Tasks in Folder` e selecione `Allow Automatic Tasks in Folder`."*

**Passo 3: Setup de Chaves (Variáveis de Ambiente)**
Oriente o usuário a criar o seu próprio arquivo `.env` contendo as chaves que ele precisará para os agentes de terminal (ex: OPENAI_API_KEY, ANTHROPIC_API_KEY). Deixe claro onde ele deve salvar o arquivo para que a Tríade tenha acesso.

**Passo 4: Celebração e Passagem de Bastão**
Diga ao usuário que a mesa do escritório dele está montada. Peça para ele fechar e reabrir o editor para ver os terminais. 
Por fim, oriente o usuário de forma destacada: **"Agora, abra o arquivo `agentes/CEO.md` e inicie a conversa com `/ceo`. O CEO fará o seu Onboarding e descobrirá com o que você trabalha para personalizar toda a agência."**
</agent_prompt>

---

## 🚀 O SEU PRIMEIRO PASSO: CHAME O CEO
Este escritório é 100% dinâmico e se adapta a CLTs, Freelancers ou Grandes Empresários. 
A magia acontece no arquivo `agentes/CEO.md`. Assim que você iniciar o seu terminal (ou abrir o Claude), basta digitar o comando `/ceo` (ou fornecer o arquivo do CEO) e ele fará uma entrevista para orquestrar todos os outros agentes para o seu caso específico de uso.

> *"Tudo que se repete, vira protocolo. Todo protocolo vira automação."*
