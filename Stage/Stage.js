/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("IMG_3257", "./Stage/costumes/IMG_3257.png", {
        x: 480,
        y: 360,
      }),
      new Costume("IMG_3422", "./Stage/costumes/IMG_3422.png", {
        x: 480,
        y: 356,
      }),
      new Costume("IMG_3315", "./Stage/costumes/IMG_3315.png", {
        x: 480,
        y: 360,
      }),
      new Costume("IMG_3304", "./Stage/costumes/IMG_3304.png", {
        x: 480,
        y: 360,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];
  }
}
