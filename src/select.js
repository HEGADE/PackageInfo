import { showPopUp } from "./showInfo";
console.log("successfully added the script");
window.onload=()=>{

  
    // let data = await fetch("https://api.github.com/users");
    // let jsonData = await data.json();
    showPopUp(111,"Dd")
    // console.log(jsonData);
    let selection=document.querySelector(".id-22-lol section")
    document.addEventListener('selectionchange', (e) => {
    let selectedText=window.getSelection().toString();
    console.log(selectedText)
    if(selectedText){
      selection.style.display="block";
    }
    // document.querySelector("section").style.top=`${window.getSelection().anchorOffset*10}`
    
    });
}
