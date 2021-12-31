export let showPopUp=(pointerPosition,data)=>{
  console.log(data)
    let body=document.querySelector("body")
    let div=document.createElement("div")
    div.className="id-22-lol"
    let innerContent=`
    <section style="display:none;" id="section-lol-123" >
        <h1 id="h1-lol-123">Something_sos_ss_print</h1>
        <br />
        <p id="p-lol-123">
          lorem ipsum something is ninja and ninja is maja after all lorem ipsum
          something is ninja and ninja is maja after all
        </p>
        <ul>
          <li id="li1-lol-123">Author: ninja</li>
          <li id="li2-lol-123">Mail: ninja@manja.com</li>
        </ul>

        <div class="imge-container-12-lol">
          <a id="a1-lol-123" href="#">Npm</a>
          <a id="a2-lol-123" href="#">github</a>
        </div>
      </section>
    `
    div.innerHTML=innerContent
    body.appendChild(div)

    


}