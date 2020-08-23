let PAST_DATA = [
  " ",
  "I",
  " ",
  "h",
  "a",
  "v",
  "e",
  " ",
  "b",
  "u",
  "i",
  "l",
  "t",
  " ",
  "m",
  "a",
  "n",
  "y",
  " ",
  "t",
  "h",
  "i",
  "n",
  "g",
  "s",
  " ",
  "i",
  "n",
  " ",
  "t",
  "h",
  "e",
  " ",
  "p",
  "a",
  "s",
  "t",
  ".",
  ".",
  ".",
  "\n",
  " ",
  "T",
  "i",
  "m",
  "b",
  "e",
  "r",
  " ",
  "F",
  "r",
  "a",
  "m",
  "e",
  " ",
  "h",
  "o",
  "m",
  "e",
  "s",
  " ",
  "f",
  "r",
  "o",
  "m",
  " ",
  "l",
  "o",
  "g",
  "s",
  " ",
  "I",
  " ",
  "c",
  "u",
  "t",
  " ",
  "d",
  "o",
  "w",
  "n",
  " ",
  "m",
  "y",
  "s",
  "e",
  "l",
  "f",
  ".",
  ".",
  ".",
  "\n",
  " ",
  "J",
  "a",
  "p",
  "a",
  "n",
  "e",
  "s",
  "e",
  " ",
  "w",
  "o",
  "o",
  "d",
  " ",
  "f",
  "i",
  "r",
  "e",
  "d",
  " ",
  "C",
  "e",
  "r",
  "a",
  "m",
  "i",
  "c",
  " ",
  "k",
  "i",
  "l",
  "n",
  "s",
  " ",
  "f",
  "o",
  "r",
  " ",
  "m",
  "a",
  "k",
  "i",
  "n",
  "g",
  " ",
  "p",
  "o",
  "t",
  "t",
  "e",
  "r",
  "y",
  ".",
  ".",
  ".",
  "\n",
  " ",
  "A",
  "n",
  "d",
  " ",
  "a",
  " ",
  "c",
  "o",
  "m",
  "p",
  "l",
  "e",
  "t",
  "e",
  " ",
  "m",
  "o",
  "t",
  "o",
  "r",
  "c",
  "y",
  "c",
  "l",
  "e",
  " ",
  "f",
  "r",
  "o",
  "m",
  " ",
  "s",
  "c",
  "r",
  "a",
  "t",
  "c",
  "h",
  ".",
  ".",
  ".",
];

let presentPast = () => {
  for (let i = 0; i < PAST_DATA.length; i++) {
    (function (i) {
      setTimeout(function () {
        document.getElementById("textContainer").innerHTML += PAST_DATA[i];
        console.log(PAST_DATA[i]);
      }, 50 * i);
    })(i);
  }
};

//   let typeWriter = (text, i, fnCallback) => {
//     if (i < text.length) {
//       document.querySelector("p").innerHTML =
//         text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

//       setTimeout(function () {
//         typeWriter(text, i + 1, fnCallback);
//       }, 100);
//     } else if (typeof fnCallback == "function") {
//       setTimeout(fnCallback, 700);
//     }
//   };

//   let StartTextAnimation = (i) => {
//     if (typeof dataText[i] == "undefined") {
//       setTimeout(() => {
//         StartTextAnimation(0);
//       }, 20000);
//     }
//     // check if dataText[i] exists
//     if (i < dataText.length) {
//       // text exists! start typewriter animation
//       typeWriter(dataText[i], 0, () => {
//         // after callback (and whole text has been animated), start next text
//         StartTextAnimation(i + 1);
//       });
//     }
//   };

//   StartTextAnimation(0);

document.getElementById("past").addEventListener("click", presentPast);
document.getElementById("present").addEventListener("click", () => {
  alert("my past has stuff");
});
document.getElementById("future").addEventListener("click", () => {
  alert("my past has stuff");
});
const area = document.getElementById("textContainer");
/////////////////////////////

//////////////////////////////////

// document.addEventListener("DOMContentLoaded", function (event) {
//     // array with texts to type in typewriter
//     let dataText = past;

//     // type one text in the typwriter
//     // keeps calling itself until the text is finished;
//     function typeWriter(text, i, fnCallback) {
//       // chekc if text isn't finished yet
//       if (i < text.length) {
//         // add next character to h1
//         document.querySelector("p").innerHTML =
//           text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

//         // wait for a while and call this function again for next character
//         setTimeout(function () {
//           typeWriter(text, i + 1, fnCallback);
//         }, 100);
//       }
//       // text finished, call callback if there is a callback function
//       else if (typeof fnCallback == "function") {
//         // call callback after timeout
//         setTimeout(fnCallback, 700);
//       }
//     }
//     // start a typewriter animation for a text in the dataText array
//     function StartTextAnimation(i) {
//       if (typeof dataText[i] == "undefined") {
//         setTimeout(function () {
//           StartTextAnimation(0);
//         }, 20000);
//       }
//       // check if dataText[i] exists
//       if (i < dataText[i].length) {
//         // text exists! start typewriter animation
//         typeWriter(dataText[i], 0, function () {
//           // after callback (and whole text has been animated), start next text
//           StartTextAnimation(i + 1);
//         });
//       }
//     }
//     // start the text animation
//     StartTextAnimation(0);
//   });
