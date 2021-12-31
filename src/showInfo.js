export let showPopUp=(pointerPosition,data)=>{
    let body=document.querySelector("body")
    let div=document.createElement("div")
    div.className="id-22-lol"
    let innerContent=`
    <section style="display:none;" id="section-lol-123" >
        <h1>Something_sos_ss_print</h1>
        <br />
        <p>
          lorem ipsum something is ninja and ninja is maja after all lorem ipsum
          something is ninja and ninja is maja after all
        </p>
        <ul>
          <li>Author: ninja</li>
          <li>Mail: ninja@manja.com</li>
        </ul>

        <div class="imge-container-12-lol">
          <a href="htts">Npm</a>
          <a href="htts">github</a>
        </div>
      </section>
    `
    div.innerHTML=innerContent
    body.appendChild(div)

    


}