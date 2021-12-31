import { showPopUp } from "./showInfo";
console.log("successfully added the script");
window.onload=()=>{

  
    // let data = await fetch("https://api.github.com/users");
    // let jsonData = await data.json();
    showPopUp(111,"Dd")
  
    let selection=document.querySelector(".id-22-lol section")
    let div=document.querySelector(".id-22-lol")
    document.addEventListener('selectionchange', (e) => {
      console.log(e)
    let selectedText=window.getSelection().toString();
    console.log(selectedText)
    if(selectedText){
      console.log(`"${window.getSelection().focusOffset*5}px"`)
      selection.style.display="block";
      console.log(document.querySelector("body").getBoundingClientRect())
      let bodyAxis=document.querySelector("body").getBoundingClientRect()
      console.log(document.querySelector("body"))
      let top=`${bodyAxis.top-1000}px`
      let left=`${bodyAxis.left-1000}px`
      let right=`${bodyAxis.right-1000}px`
      let bottom=`${bodyAxis.bottom-500}px`
      // let top=`${bodyAxis.top}px`
    // selection.style.marginTop=bottom
    // selection.style.marginLeft=left
    // selection.style.marginRight=right
    // selection.style.marginBottom=bo

    
    }
    // document.onmousedown
    document.addEventListener('click', function(e) {
   
      let left = e.offsetX;
      let top = e.offsetY;
      console.log(left,top,window.scrollX,window.scrollY,)
      selection.style.marginLeft = left-top + 'px';
      let topp=`${Math.abs(window.scrollY-top)}px`
      console.log(topp)
      selection.style.marginTop =topp
    })
    
    });
}
