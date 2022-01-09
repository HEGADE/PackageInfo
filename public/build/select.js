(function () {
    'use strict';

    let showPopUp=()=>{
        let body=document.querySelector("body");
        let div=document.createElement("div");
        div.className="id-22-lol";
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
          <a id="a1-lol-123" href="https://npm.org" target="_blank">Npm</a>
          <a id="a2-lol-123" href="https://github.com" target="_blank">Github</a>
        </div>
      </section>
    `;
        div.innerHTML=innerContent;
        body.appendChild(div);

        


    };

    function makeReadmore(des, package_url) {
      return des?.length > 100
        ? des?.substring(0, 100) +
            "  ...... " +
            ` <a href=${package_url} target="_blank" style="color:blue">readmore</a>`
        : des;
    }


    const fillPopupForPython = (DOMEle, packagePyPi) => {
      if (packagePyPi?.author === "UNKNOWN" || !packagePyPi?.name)
        packagePyPi = { ...packagePyPi, name: "Package not found" };

      DOMEle.packageNpmName.innerText = packagePyPi.name;
      if (packagePyPi?.description === "UNKNOWN" || packagePyPi?.description === "")
        packagePyPi.description = "Description is not available";

      DOMEle.packageNpmDes.innerHTML =
        makeReadmore(packagePyPi?.description, packagePyPi?.package_url) ||
        "Not found";
      packagePyPi.author_email = packagePyPi.author_email || "Not Available";
      packagePyPi.author = packagePyPi.author || "Not Available";
      DOMEle.author.innerText = "Publisher: " + packagePyPi.author;
      DOMEle.authorMail.innerText = "Mail: " + packagePyPi.author_email;
      DOMEle.npmLink.href = packagePyPi.package_url || "";
      DOMEle.npmLink.innerText = "PyPi";
      if (packagePyPi?.home_page) {
        DOMEle.githubLink.href = packagePyPi.home_page;
        DOMEle.githubLink.innerText = "Github";
      } else {
        DOMEle.githubLink.innerText = "";
      }
    };

    // Holds the program execution for specified amount of time
    const sleep = (time) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, time);
      });


    //  Request handler  for getting package information from the API
    const getData = async (searchPackage, option) => {
      let data = null;
      try {
        if (option === "nodejs")
          data = await fetch(`https://api.npms.io/v2/search?q=${searchPackage}`);
        else
          data = await fetch(
            `https://pypi.org/pypi/${searchPackage?.replace(" ", "")}/json`
          );
      } catch (e) {
        console.log(e);
      }
      return await data?.json();
    };

    const fillPopup = async (packageNpm, option) => {
      if (option === "nodejs") {
        console.log("nodejs");
        if (!packageNpm.data?.results[0]?.package?.name) {
          packageNpm.selection.style.display = "block";
          return;
        }

        packageNpm.packageNpmName.innerText =
          packageNpm.data?.results[0]?.package?.name;
        packageNpm.packageNpmDes.innerText =
          packageNpm.data?.results[0]?.package?.description;
        packageNpm.author.innerText =
          "Publisher: " + packageNpm.data?.results[0]?.package?.publisher?.username;
        packageNpm.authorMail.innerText =
          "Mail: " + packageNpm.data?.results[0]?.package?.publisher?.email;
        packageNpm.npmLink.href = packageNpm.data?.results[0]?.package?.links?.npm;
        packageNpm.npmLink.innerText = "Npm";
        if (packageNpm.data?.results[0]?.package?.links?.repository) {
          packageNpm.githubLink.href =
            packageNpm.data?.results[0]?.package?.links?.repository;
          packageNpm.githubLink.innerText = "Github";
        } else {
          packageNpm.githubLink.innerText = "";
        }
        return;
      }

      try {
        console.log(packageNpm?.data?.info?.name);
        fillPopupForPython(packageNpm, packageNpm?.data?.info);
        console.log("python");
      } catch (e) {
        console.log("Error occurred in python");
      } finally {
        packageNpm.selection.style.display = "block";
      }
    };

    //  variable declaration
    let packageOption = null;
    let stop = false;
    let prevText = null;
    let prevOption = null;

    // Getting relevant data from the local storage
    chrome.storage.local.get(["key"], function (result) {
      packageOption = result?.key.option || "nodejs";
      stop = result.key.stop || false;
    });

    // Message handler(will receive the message from the pop html)
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      console.log(request?.stop);
      packageOption = request.option || packageOption;
      stop =
        request?.stop === true || request?.stop === false ? request?.stop : stop;
      console.log(packageOption, stop);
      sendResponse({ selected: packageOption, stop });
    });

    // Creating and inserting div element and their children
    showPopUp();

    //Getting reference to the DOM element
    let selection = document.querySelector(".id-22-lol section");
    let packageNpmName = document.querySelector("#h1-heading-content");
    let packageNpmDes = document.querySelector("#p-content-info");
    let author = document.querySelector("#li-content-author-name");
    let authorMail = document.querySelector("#li-content-author-mail");
    let npmLink = document.querySelector("#a1-lol-123");
    let githubLink = document.querySelector("#a2-lol-123");
    let packageNpm = {};

    // Event listener for the text selection
    document.addEventListener("selectionchange", async (e) => {
      selection.style.display = "none";
      await sleep(1000); // Holds the program execution for 1s
      let selectedText = window.getSelection().toString();
      if (
        selectedText &&
        (selectedText != prevText || packageOption != prevOption) &&
        !stop
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

    // Event listener displaying pop
    document.addEventListener("click", function (e) {
      let left = e.offsetX;
      let top = e.offsetY;
      selection.style.marginLeft = left - top + "px";
      let marginTop = `${Math.abs(window.scrollY + 200 - top)}px`;
      selection.style.marginTop = marginTop;
    });

})();
//# sourceMappingURL=select.js.map
