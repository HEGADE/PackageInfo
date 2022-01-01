import { showPopUp } from "./showInfo";
console.log("successfully added the script");

const getData = async (searchPackage) => {
  let data = await fetch(`https://api.npms.io/v2/search?q=${searchPackage}`);
  let jsonData = await data.json();
  return jsonData;
};
const sleep = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
let prevText = null;
window.onload = () => {
  showPopUp(111, "sd");
  let selection = document.querySelector(".id-22-lol section");
  let div = document.querySelector(".id-22-lol");
  let h1 = document.querySelector("#h1-lol-123");
  let p = document.querySelector("#p-lol-123");
  let li1 = document.querySelector("#li1-lol-123");
  let li2 = document.querySelector("#li2-lol-123");
  let a1 = document.querySelector("#a1-lol-123");
  let a2 = document.querySelector("#a2-lol-123");
  let renderCount = 0;
  document.addEventListener("selectionchange", async (e) => {
    selection.style.display = "none";
    await sleep(1000);
    let selectedText = window.getSelection().toString();
    console.log("after something");
    renderCount++;

    console.log(selectedText);
    if (selectedText && selectedText != prevText) {
      console.log(selectedText, prevText, selectedText != prevText);
      prevText = selectedText;
      let data = await getData(selectedText);
      if (!data?.results[0]?.package?.name) {
        selection.style.display = "block";

        return;
      }

      h1.innerText = data?.results[0]?.package?.name;
      p.innerText = data?.results[0]?.package?.description;
      li1.innerText =
        "Publisher: " + data?.results[0]?.package?.publisher?.username;
      li2.innerText = "Mail: " + data?.results[0]?.package?.publisher?.email;
      a1.href = data?.results[0]?.package?.links?.npm;
      if (data?.results[0]?.package?.links?.repository) {
        a2.href = data?.results[0]?.package?.links?.repository;
      } else {
        a2.innerText = "";
      }
      selection.style.display = "block";
      // setTimeout(() => {
      //   selection.style.display = "none";
      // }, 2400);
      renderCount = 0;

      return;
    }
  });
  // document.onmousedown
  document.addEventListener("click", function (e) {
    let left = e.offsetX;
    let top = e.offsetY;
    console.log(left, top, window.scrollX, window.scrollY);
    selection.style.marginLeft = left - top + "px";
    let topp = `${Math.abs(window.scrollY - top)}px`;
    console.log(topp);
    selection.style.marginTop = topp;
  });
};
