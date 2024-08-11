// create a hacking simulator which has green background and it shows these message with random delay of 1 to 7 seconds.
// initializing hacking ,reading your files, password files deteched, sending all passwords and personal files to the server, cleaning up, three dots must blink so it look like real terminal.
// let text= ["initializing Hacking...",
// "Reading your Files..",
// "Password Files Detected..",
// "Sending all password and personal files to the server..",
// "cleaning up.."

const addItem = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};
const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};
function main() {
  setInterval(() => {
    let last = document.body.lastElementChild;
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 700);
}

let text = [
  "initializing Hacking and now reading your data...",
  "Reading your Files",
  "Password Files Detected",
  "Sending all password and personal files to the server",
  "Reading you files..",
];

for (const item of text) {
  addItem(item);
}
main();
