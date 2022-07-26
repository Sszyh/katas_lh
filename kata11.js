const PI = 3.14159;
let volume = 0

const sphereVolume = function (radius) {
  volume = PI * radius * radius * radius * 4 / 3
  return volume;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  volume = PI * radius * radius * height / 3;
  return volume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  volume = height * width * depth;
  return volume;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let total = 0;
  for (let solid of solids) {
    if (solid["type"] === "sphere") {
      total += sphereVolume(solid["radius"]);
    } else if (solid["type"] === "cone") {
      total += coneVolume(solid["radius"],solid["height"]);
    } else if (solid["type"] === "prismVolume") {
      total += prismVolume(solid["height"],solid["width"],solid["depth"])
    }
  }
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

