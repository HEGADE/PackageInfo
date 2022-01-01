import { showPopUp as createPopup } from "./showInfo";
import { sleep, getData } from "./utils";

console.log("successfully added the script");

const fillPopup = async (packageNpm) => {
  packageNpm.packageNpmName.innerText = packageNpm.data?.results[0]?.package?.name;
  packageNpm.packageNpmDes.innerText = packageNpm.data?.results[0]?.package?.description;
  packageNpm.author.innerText =
    "Publisher: " + packageNpm.data?.results[0]?.package?.publisher?.username;
  packageNpm.authorMail.innerText =
    "Mail: " + packageNpm.data?.results[0]?.package?.publisher?.email;
  packageNpm.npmLink.href = packageNpm.data?.results[0]?.package?.links?.npm;
  if (packageNpm.data?.results[0]?.package?.links?.repository) {
    packageNpm.githubLink.href =
      packageNpm.data?.results[0]?.package?.links?.repository;
    packageNpm.githubLink.innerText = "Github";
  } else {
    packageNpm.githubLink.innerText = "";
  }
};

let prevText = null;
window.onload = () => {
  createPopup(111, "data of something");
  let selection = document.querySelector(".id-22-lol section");
  let div = document.querySelector(".id-22-lol");
  let packageNpmName = document.querySelector("#h1-lol-123");
  let packageNpmDes = document.querySelector("#p-lol-123");
  let author = document.querySelector("#li1-lol-123");
  let authorMail = document.querySelector("#li2-lol-123");
  let npmLink = document.querySelector("#a1-lol-123");
  let githubLink = document.querySelector("#a2-lol-123");
  let packageNpm = {};
  document.addEventListener("selectionchange", async (e) => {
    selection.style.display = "none";
    await sleep(1000);
    let selectedText = window.getSelection().toString();
    if (selectedText && selectedText != prevText) {
      console.log(selectedText, prevText, selectedText != prevText);
      prevText = selectedText;
      let data = await getData(selectedText);
      if (!data?.results[0]?.package?.name) {
        selection.style.display = "block";
        return;
      }
      packageNpm = {
        data,
        packageNpmName,
        packageNpmDes,
        author,
        authorMail,
        npmLink,
        githubLink,
      };
      fillPopup(packageNpm);
      selection.style.display = "block";
      data = null;
      return;
    }
  });

  document.addEventListener("click", function (e) {
    let left = e.offsetX;
    let top = e.offsetY;
    // console.log(left, top, window.scrollX, window.scrollY);
    selection.style.marginLeft = left - top + "px";
    let marginTop = `${Math.abs(window.scrollY - top)}px`;
    selection.style.marginTop = marginTop;
  });
};
