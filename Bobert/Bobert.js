/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bobert extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "IMG_3264-removebg-preview",
        "./Bobert/costumes/IMG_3264-removebg-preview.svg",
        { x: 144, y: 108 }
      ),
      new Costume("costume1", "./Bobert/costumes/costume1.svg", {
        x: 66.68741749999998,
        y: 41.482725000000016,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Message 2" },
        this.whenIReceiveMessage2
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveMessage1() {
    this.size += 50;
  }

  *whenIReceiveMessage2() {
    this.size = 50;
  }

  *whenthisspriteclicked() {
    this.direction -= 15;
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement sensing_setdragmode */ null;
  }
}
