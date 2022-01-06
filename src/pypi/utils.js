export const fillPopupForPython = (DOMEle, packagePyPi) => {
  console.log(packagePyPi?.name);
  if(packagePyPi.author==="UNKNOWN"){
    throw new Error("Not found")
  }
  DOMEle.packageNpmName.innerText = packagePyPi.name;
  DOMEle.packageNpmDes.innerText = packagePyPi.description;
  DOMEle.author.innerText = "Publisher: " + packagePyPi.author;
  DOMEle.authorMail.innerText = "Mail: " + packagePyPi.author_email;
  DOMEle.npmLink.href = packagePyPi.package_url;
  DOMEle.npmLink.innerText = "PyPi";
  if (packagePyPi?.home_page) {
    DOMEle.githubLink.href = packagePyPi.home_page;
    DOMEle.githubLink.innerText = "Github";
  } else {
    DOMEle.githubLink.innerText = "";
  }
};
