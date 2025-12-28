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
