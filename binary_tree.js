class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  draw(ctx, node, x, y, dx) {
    if (!node) {
      return;
    }
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillText(node.value, x, y);
    if (node.left) {
      ctx.beginPath();
      ctx.moveTo(x, y + 20);
      ctx.lineTo(x - dx, y + 50);
      ctx.stroke();
      this.draw(ctx, node.left, x - dx, y + 70, dx / 2);
    }
    if (node.right) {
      ctx.beginPath();
      ctx.moveTo(x, y + 20);
      ctx.lineTo(x + dx, y + 50);
      ctx.stroke();
      this.draw(ctx, node.right, x + dx, y + 70, dx / 2);
    }
  }
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const tree = new BinaryTree();
var number;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "16px Arial";
ctx.textAlign = "center";

document.addEventListener(
  "keyup",
  (event) => {
    if (event.code == "Space") {
      number = randomInt(-100, 100);
      tree.add(number);
      alert(number);
      tree.draw(ctx, tree.root, canvas.width / 2, 50, canvas.width / 4);
    }
  },
  false
);
