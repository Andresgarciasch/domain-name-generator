/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from console");
};
//write your code here
let pre = ["the", "our", "your", "his", "her"];

let adj = ["incredible", "greatest", "amazing"];

let noun = ["4geeksters", "table", "sweater", "robbedspareparts"];

let post = [".com", ".net", ".us", ".hacked"];

for (let i = 0; i < pre.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < post.length; l++) {
        console.log(`${pre[i]}${adj[j]}${noun[k]}${post[l]}`);
      }
    }
  }
}
