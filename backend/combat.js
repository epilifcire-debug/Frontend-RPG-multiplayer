import { rollInitiative } from "./initiative.js";

export const CombatSystem = {

  // ===============================
  // INICIAR COMBATE
  // ===============================
  start(room) {
    if (!room.players || room.players.length === 0) return;

    const entities = room.players.map(player => ({
      id: player.id,
      name: player.name,
      type: "player",
      dex: player.dex || 0
    }));

    room.combat = {
      active: true,
      round: 1,
      currentTurn: 0,
      turnOrder: rollInitiative(entities)
    };

    room.broadcast({
      type: "combat_start",
      round: room.combat.round,
      order: room.combat.turnOrder.map(e => ({
        id: e.id,
        name: e.name,
        initiative: e.initiative
      }))
    });

    this.startTurn(room);
  },

  // ===============================
  // INÍCIO DO TURNO
  // ===============================
  startTurn(room) {
    if (!room.combat || !room.combat.active) return;

    const combat = room.combat;
    const entity = combat.turnOrder[combat.currentTurn];

    room.broadcast({
      type: "turn_start",
      entity: {
        id: entity.id,
        name: entity.name,
        type: entity.type
      },
      round: combat.round
    });
  },

  // ===============================
  // FINALIZAR TURNO
  // ===============================
  endTurn(room) {
    if (!room.combat || !room.combat.active) return;

    const combat = room.combat;
    combat.currentTurn++;

    // Próxima rodada
    if (combat.currentTurn >= combat.turnOrder.length) {
      combat.currentTurn = 0;
      combat.round++;

      room.broadcast({
        type: "new_round",
        round: combat.round
      });
    }

    this.startTurn(room);
  },

  // ===============================
  // VALIDAÇÃO DE TURNO (ANTI-CHEAT)
  // ===============================
  validate(room, playerId) {
    if (!room.combat || !room.combat.active) return false;

    const current =
      room.combat.turnOrder[room.combat.currentTurn];

    return current.id === playerId;
  },

  // ===============================
  // FINALIZAR COMBATE
  // ===============================
  stop(room) {
    if (!room.combat) return;

    room.broadcast({
      type: "combat_end"
    });

    room.combat = null;
  }
};
