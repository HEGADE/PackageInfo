import { showPopUp as createPopup } from "./npm/showInfo";
import { sleep, getData, fillPopup } from "./npm/utils";
let packageOption = null;
let stop=false
chrome.storage.local.get(["key"], function (result) {
  packageOption = result?.key.option || "nodejs";
  stop=result.key.stop|| false
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request?.stop)
  packageOption = request.option || packageOption;
  stop=request?.stop===true||request?.stop===false?request?.stop:stop
  

  console.log(packageOption,stop);
  sendResponse({ selected: packageOption,stop });
});

let prevText = null;
let prevOption = null;

createPopup();
let selection = document.querySelector(".id-22-lol section");
let packageNpmName = document.querySelector("#h1-heading-content");
let packageNpmDes = document.querySelector("#p-content-info");
let author = document.querySelector("#li-content-author-name");
let authorMail = document.querySelector("#li-content-author-mail");
let npmLink = document.querySelector("#a1-lol-123");
let githubLink = document.querySelector("#a2-lol-123");
let packageNpm = {};

document.addEventListener("selectionchange", async (e) => {
  selection.style.display = "none";
  await sleep(1000);
  let selectedText = window.getSelection().toString();
  if (
    selectedText &&
    (selectedText != prevText || packageOption != prevOption) &&!stop
  ) {
    prevText = selectedText;
    prevOption = packageOption;
    let data = await getData(selectedText, packageOption);

    packageNpm = {
      selection,
      data,
      packageNpmName,
      packageNpmDes,
      author,
      authorMail,
      npmLink,
      githubLink,
    };
    try {
      fillPopup(packageNpm, packageOption);
    } catch (e) {
      console.log("Some error occurred");
    } finally {
      packageNpm.selection.style.display = "block";
    }
    data = null;
    return;
  }
});

document.addEventListener("click", function (e) {
  let left = e.offsetX;
  let top = e.offsetY;
  selection.style.marginLeft = left - top + "px";
  let marginTop = `${Math.abs(window.scrollY + 200 - top)}px`;
  selection.style.marginTop = marginTop;
});
