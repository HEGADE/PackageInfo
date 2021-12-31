import { showPopUp } from "./showInfo";
console.log("successfully added the script");

const getData = async (searchPackage) => {
  let data = await fetch(`https://api.npms.io/v2/search?q=${searchPackage}`);
  let jsonData = await data.json();
  return jsonData;
};
const sleep = (time)=>
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, time);
});
let prevText=null
window.onload = () => {

  showPopUp(111, "sd");
  let selection = document.querySelector(".id-22-lol section");
  let div = document.querySelector(".id-22-lol");
  let renderCount = 0;
  document.addEventListener("selectionchange", async (e) => {

    await sleep(1000);
    let selectedText = window.getSelection().toString();
    console.log("after something");
    renderCount++;
    // let selectedText = null;          

    console.log(selectedText);
    if (selectedText&&selectedText!=prevText) {
      
       
      console.log(selectedText,prevText,selectedText!=prevText);
      prevText=selectedText
        let data = await getData(selectedText);
        console.log(data?.results[0]?.package?.description)

       

      selection.style.display = "block";

      renderCount=0
      return
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
