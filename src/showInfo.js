export let showPopUp=(pointerPosition,data)=>{
  console.log(data)
    let body=document.querySelector("body")
    let div=document.createElement("div")
    div.className="id-22-lol"
    let innerContent=`
    <section style="display:none;" id="section-lol-123" >
        <h1 id="h1-lol-123">Package not found</h1>
        <br />
        <p id="p-lol-123">
         try to select right package name
        </p>
        <ul>
          <li id="li1-lol-123"></li>
          <li id="li2-lol-123"></li>
        </ul>

        <div class="imge-container-12-lol">
          <a id="a1-lol-123" href="#"></a>
          <a id="a2-lol-123" href="#"></a>
        </div>
      </section>
    `
    div.innerHTML=innerContent
    body.appendChild(div)

    


}