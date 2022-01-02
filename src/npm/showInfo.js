export let showPopUp=()=>{
    let body=document.querySelector("body")
    let div=document.createElement("div")
    div.className="id-22-lol"
    let innerContent=`
    <section style="display:none;" id="section-content-123" >
        <h1 id="h1-heading-content">Package not found</h1>
        <br />
        <p id="p-content-info">
         try to select right package name
        </p>
        <ul>
          <li id="li-content-author-name"></li>
          <li id="li-content-author-mail"></li>
        </ul>

        <div class="imge-container-12-lol">
          <a id="a1-lol-123" href="https://npm.org">Npm</a>
          <a id="a2-lol-123" href="https://github.com">Github</a>
        </div>
      </section>
    `
    div.innerHTML=innerContent
    body.appendChild(div)

    


}