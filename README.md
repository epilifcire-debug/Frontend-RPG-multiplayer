# 🎲 Crônicas do Éter

**Crônicas do Éter** é um RPG tático multiplayer por turnos, inspirado em D&D e Baldur’s Gate, com **IA Mestre**, **combate server-side**, **reconexão automática** e **mapas em grid 2D**.

---

## 🧙 Principais Características

- 🎮 Multiplayer online (até 6 jogadores)
- 🧠 IA Mestre rodando no servidor
- ⚔️ Combate por turnos (iniciativa D&D)
- 🔁 Reconexão automática (anti-queda)
- 🗺️ Mapas em grid com pathfinding (A*)
- 💬 Narrativa dinâmica e diálogos ramificados
- 🔒 Servidor autoritativo (anti-cheat)
- 🌍 Frontend estático + Backend Node.js

---

## 🗂️ Estrutura do Projeto (Monorepo)

cronicas-do-eter/
├── frontend/ # Jogo (GitHub Pages)
│ ├── index.html
│ ├── network.js
│ ├── game.js
│ └── ui.js
│
├── backend/ # Servidor multiplayer (Render)
│ ├── package.json
│ ├── server.js
│ ├── rooms.js
│ ├── combat.js
│ ├── initiative.js
│ ├── ai_dm.js
│ └── dice.js
│
└── README.md


---

## 🌐 Deploy

### Frontend (Web)
- Hospedado via **:contentReference[oaicite:0]{index=0}**
- Jogo roda direto no navegador
- Comunicação via WebSocket seguro (wss)

### Backend (Multiplayer + IA)
- Hospedado no **:contentReference[oaicite:1]{index=1}**
- Node.js + WebSocket
- Sistema de salas, turnos e reconexão

---

## 🚀 Como Rodar Localmente

### Backend
```bash
cd backend
npm install
npm start

---

# 2️⃣ AJUSTAR **ROOT DIRECTORY** NO RENDER (MUITO IMPORTANTE)

Isso é **ESSENCIAL** quando backend e frontend estão no **mesmo repositório**.

---

## 🎯 Objetivo
Dizer ao **Render** que:
- O backend está dentro da pasta `backend/`
- O `package.json` NÃO está na raiz

---

## 🛠️ PASSO A PASSO NO RENDER

### 1️⃣ Acesse o painel do serviço no **:contentReference[oaicite:2]{index=2}**

- Vá em **Dashboard**
- Clique no seu serviço (`cronicas-backend`)

---

### 2️⃣ Vá em **Settings**

Procure a seção **Build & Deploy**

---

### 3️⃣ Configure assim:

| Campo | Valor |
|----|----|
| **Root Directory** | `backend` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Branch** | `main` |

📌 **Root Directory é o ponto crítico**  
Sem isso, o Render **não encontra o `package.json`**.

---

### 4️⃣ Salve e redeploy

- Clique em **Save Changes**
- Depois **Manual Deploy → Deploy Latest Commit**

---

## ✅ Como saber se está certo

Nos logs do Render você deve ver:
👉 Root Directory está errado.

---

# ✅ CHECKLIST FINAL

✔ README profissional  
✔ Monorepo organizado  
✔ Backend separado corretamente  
✔ Render configurado corretamente  
✔ GitHub Pages pronto  

---

## 🚀 PRÓXIMO PASSO (POSSO FAZER AGORA)

Posso:
1️⃣ Criar **página de apresentação do jogo**
2️⃣ Criar **lobby visual**
3️⃣ Criar **fila visual de turnos**
4️⃣ Integrar **LLM real**
5️⃣ Preparar **Itch.io**

👉 **Qual você quer agora?**
