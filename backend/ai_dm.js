import { roll } from "./dice.js";

export const AI_DM = {
  narrate(room, text) {
    room.broadcast({
      type: "narration",
      text
    });
  },

  startScene(room) {
    this.narrate(
      room,
      "🧙 Vocês entram em uma antiga cripta tomada pelo silêncio."
    );
  },

  onPlayerAction(room, player, action) {

    if (action.type === "move") {
      this.narrate(
        room,
        `${player.name} avança cautelosamente pelo corredor.`
      );
    }

    if (action.type === "attack") {
      const hit = roll("1d20");

      if (hit >= 10) {
        const dmg = roll("1d8");
        this.narrate(
          room,
          `${player.name} acerta o inimigo causando ${dmg} de dano.`
        );
      } else {
        this.narrate(
          room,
          `${player.name} erra o ataque.`
        );
      }
    }

    if (action.type === "end_turn") {
      this.narrate(
        room,
        `${player.name} finaliza seu turno.`
      );
    }
  }
};
