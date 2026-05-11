# 🏛️ ESCRITÓRIO DE IA (Multi-Agent Blueprint)

Bem-vindo ao **Escritório de IAs**. Este não é apenas um repositório de código, é um template de **Agência Autônoma** pronto para rodar na sua própria máquina.

Se você acabou de baixar ou clonar este repositório, você tem duas opções:
1. **Fazer na mão:** Olhar as pastas e ir configurando tudo sozinho.
2. **O Jeito IA (Setup Mágico):** Copie **TODO o texto deste documento**, cole na sua IA (Claude, Cursor, Antigravity ou ChatGPT) e envie a seguinte mensagem:
   > *"Estou montando meu escritório de IA. Leia este README e execute o bloco <agent_prompt> para configurar tudo para mim."*

---

## 💰 CUSTOS DE OPERAÇÃO (Para o Humano)
Para operar este escritório em sua capacidade máxima profissional, a arquitetura foi dividida em 3 IAs principais. Isso evita o gargalo de tokens e a perda de contexto que acontece quando você tenta fazer uma única IA realizar todas as tarefas do mundo.

| Ferramenta / IA | Função na "Agência" | Custo Mensal (USD) |
| :--- | :--- | :--- |
| **Claude Pro** | O **"CEO"** e Estrategista. Fica no navegador criando ideias, roteiros e copys longos. | $20 / mês |
| **Cursor Pro (Codex)** | O **"Programador Pareador"**. Fica no editor de código, focado apenas no arquivo que você está olhando. | $20 / mês |
| **APIs (Gemini/OpenAI)**| O **"Arquiteto/DevOps"**. Roda scripts de forma invisível no terminal (como raspar dados ou agendar reuniões). | ~$5 (Sob demanda) |
| **Midjourney/Kling/Runway**| O **"Departamento de Arte"**. Usado para gerar imagens e vídeos B-Roll. | ~$15 / mês |
| **Infra (Vercel, GitHub)** | Onde os sites e códigos vivem. | Grátis |
| **Total Estimado** | **Uma agência inteira trabalhando 24/7 para você.** | **~ $60 / mês** |

*(Se você quiser usar as versões gratuitas, o custo cai para quase zero, pagando apenas os centavos de API sob demanda).*

---

<agent_prompt>
## 🤖 INSTRUÇÕES PARA A IA (SYSTEM SKILL)

**[ATENÇÃO IA]:** A partir de agora, você assumiu o papel de **Agente Instalador** deste Escritório. O usuário humano acabou de te entregar este documento. Sua missão é configurar e explicar o ambiente para ele de forma autônoma. Siga os 4 passos abaixo na ordem:

**Passo 1: Confirme o Entendimento da Arquitetura (A Tríade)**
Diga ao usuário que você entendeu como o escritório funciona e que ele usará 3 cérebros:
- O **Claude** para pensar e escrever (Copy).
- O **Cursor** para codar a interface.
- **Você (a IA atual que está lendo isso)** para executar scripts, criar arquivos e montar a infraestrutura local.

**Passo 2: Configuração do Workspace (VS Code / Cursor)**
Verifique se a pasta `.vscode/` com `settings.json` e `tasks.json` existe no diretório.
1. O `settings.json` já contém regras para ocultar lixos de sistema.
2. O `tasks.json` já possui uma task com `"runOn": "folderOpen"` que inicia paralelamente **3 terminais**.

**Passo 3: A Regra do 'Allow Automatic Tasks'**
Instrua o usuário claramente com este exato texto em negrito:
*"Para que sua mesa de trabalho abra sozinha toda vez que iniciar o projeto, aperte `Ctrl + Shift + P` no seu editor, digite `Manage Automatic Tasks in Folder` e selecione `Allow Automatic Tasks in Folder`."*

**Passo 4: Setup de Chaves (Variáveis de Ambiente)**
Crie um arquivo `.env` na raiz do projeto (se não existir) deixando as chaves preparadas para o usuário preencher (ex: `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`). Não insira chaves falsas, apenas o template.

**Passo 5: Celebração**
Diga ao usuário que a mesa do escritório dele está montada. Peça para ele fechar a janela do editor e abrir novamente para ver a "Mágica" dos 3 terminais sendo abertos simultaneamente.
</agent_prompt>

---

## 🚀 EXEMPLOS DE FLUXOS DE TRABALHO
O poder deste escritório é a capacidade de combinar agentes (arquivos `.md` na pasta `agentes/`). Exemplo de pipelines que você pode construir:
1. **Agência de Marketing:** Web Scraper extrai leads → IA analisa sites → Disparo Automático via WhatsApp API.
2. **Criação de Conteúdo:** Busca de trends em redes sociais → Claude gera Roteiro → Automação de renderização de vídeo.

> *"Tudo que se repete, vira protocolo. Todo protocolo vira automação."*
