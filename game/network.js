// ===============================
// CONFIGURAÇÃO
// ===============================
const SERVER_URL = "wss://cronicas-backend.onrender.com"; // 🔴 troque pela sua URL
const ROOM_ID = "sala1";
const PLAYER_NAME = "Jogador";

// ===============================
// ESTADO LOCAL
// ===============================
let socket = null;
let playerId = localStorage.getItem("playerId");

// ===============================
// CONECTAR / RECONECTAR
// ===============================
function connect() {
  console.log("🔌 Conectando ao servidor...");

  socket = new WebSocket(SERVER_URL);

  socket.onopen = () => {
    console.log("🟢 Conectado");

    socket.send(JSON.stringify({
      type: "join",
      room: ROOM_ID,
      name: PLAYER_NAME,
      playerId: playerId // pode ser null na primeira vez
    }));
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    handleServerMessage(data);
  };

  socket.onclose = () => {
    console.warn("⚠️ Conexão perdida. Tentando reconectar...");
    setTimeout(connect, 2000); // retry automático
  };

  socket.onerror = (err) => {
    console.error("❌ Erro no socket", err);
    socket.close();
  };
}

// ===============================
// TRATAR MENSAGENS DO SERVIDOR
// ===============================
function handleServerMessage(data) {
  switch (data.type) {

    case "player_id":
      playerId = data.playerId;
      localStorage.setItem("playerId", playerId);
      console.log("🆔 Player ID salvo:", playerId);
      break;

    case "reconnected":
      UI.log("🔁 Reconectado ao jogo");
      if (data.state) {
        Game.restoreCombat(data.state);
      }
      break;

    case "combat_start":
      UI.log("⚔️ Combate iniciado!");
      break;

    case "turn_start":
      UI.log(`🎯 Turno de ${data.entity.name}`);
      Game.setActivePlayer(data.entity.id);
      break;

    case "narration":
      UI.log("🧙 " + data.text);
      break;

    case "system":
      UI.log("ℹ️ " + data.message);
      break;

    case "error":
      UI.log("❌ " + data.message);
      break;

    default:
      console.warn("Mensagem desconhecida:", data);
  }
}

// ===============================
// ENVIAR AÇÕES AO SERVIDOR
// ===============================
function sendAction(action) {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    UI.log("⚠️ Não conectado ao servidor");
    return;
  }

  socket.send(JSON.stringify({
    type: "action",
    action
  }));
}

// ===============================
// AÇÕES DE JOGO
// ===============================
window.endTurn = () => {
  sendAction({ type: "end_turn" });
};

// ===============================
// INICIAR
// ===============================
connect();

// ===============================
// EXPORT (se usar módulos)
// ===============================
export { sendAction };
