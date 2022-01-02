export const fillPopupForPython=(DOMEle,packagePyPi)=>{
   
      console.log(      packagePyPi?.name)
      DOMEle.packageNpmName.innerText =
      packagePyPi?.name;
      DOMEle.packageNpmDes.innerText =
      packagePyPi.description;
      DOMEle.author.innerText =
        "Publisher: " + packagePyPi?.author;
        DOMEle.authorMail.innerText =
        "Mail: " + packagePyPi?.author_email;
    //   packageNpm.npmLink.href = packageNpm.data?.results[0]?.package?.links?.npm;
      if (packagePyPi?.home_page) {
        DOMEle.githubLink.href =
        packagePyPi.home_page;
        DOMEle.githubLink.innerText = "Github";
      } else {
        DOMEle.githubLink.innerText = "";
      }
}