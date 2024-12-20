import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Bobert from "./Bobert/Bobert.js";
import Arrow1 from "./Arrow1/Arrow1.js";
import Arrow2 from "./Arrow2/Arrow2.js";
import Img3287RemovebgPreview from "./Img3287RemovebgPreview/Img3287RemovebgPreview.js";
import Img3287RemovebgPreview2 from "./Img3287RemovebgPreview2/Img3287RemovebgPreview2.js";
import Img3424 from "./Img3424/Img3424.js";
import Button3 from "./Button3/Button3.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Bobert: new Bobert({
    x: 1.647058823529406,
    y: -1.352941176470587,
    direction: -64.11227949553765,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 150,
    visible: true,
    layerOrder: 3,
  }),
  Arrow1: new Arrow1({
    x: -236,
    y: 167,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  Arrow2: new Arrow2({
    x: -222,
    y: -166,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
  Img3287RemovebgPreview: new Img3287RemovebgPreview({
    x: 211.58823529411762,
    y: 145.2941176470588,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 25,
    visible: true,
    layerOrder: 5,
  }),
  Img3287RemovebgPreview2: new Img3287RemovebgPreview2({
    x: 216,
    y: -158,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 25,
    visible: true,
    layerOrder: 4,
  }),
  Img3424: new Img3424({
    x: -3.7647058823529562,
    y: 4.588235294117659,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 105,
    visible: false,
    layerOrder: 6,
  }),
  Button3: new Button3({
    x: 2.4705882352941213,
    y: 35.17647058823529,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
