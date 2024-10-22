import { Scene } from "phaser";
import { getPhrase } from "../services/translations";

// The HUD scene is the scene that shows the points and the remaining time.
export class Hud extends Scene {
  remaining_time = 0;

  remaining_time_text;
  points_text;

  constructor() {
    super("Hud");
  }

  init(data) {
    // fadeIn([duration], [red], [green], [blue], [callback], [context])
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.remaining_time = data.remaining_time;
  }

  create() {
    this.points_text = this.add.text(10, 10, getPhrase("PUNTOS:0000"), {
      fontSize: "24px",
      color: "#ffffff",
    });

    this.remaining_time_text = this.add.text(
      this.scale.width - 200,
      10,
      getPhrase(`TIEMPO:${this.remaining_time.toString().padStart(2, "0")}`),
      {
        fontSize: "24px",
        color: "#ffffff",
      }
    );
  }

  update_points(points) {
    this.points_text.setText(getPhrase(`PUNTOS:${points.toString().padStart(4, "0")}`));
  }

  update_timeout(timeout) {
    this.remaining_time_text.setText(
      getPhrase(`TIEMPO:${timeout.toString().padStart(2, "0")}s`)
    );
  }
}
