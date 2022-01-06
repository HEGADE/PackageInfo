function makeReadmore(des,package_url) {
  // console.log(des.length())
  return des.length > 100 ? des.substring(0, 100) + "  ...... "+` <a href=${package_url} target="_blank">readmore</a>` : des ;
}
export const fillPopupForPython = (DOMEle, packagePyPi) => {
  console.log(packagePyPi?.name);
  if (packagePyPi.author === "UNKNOWN") throw new Error("Not found");
  DOMEle.packageNpmName.innerText = packagePyPi.name;
  DOMEle.packageNpmDes.innerHTML =   makeReadmore(packagePyPi.description,packagePyPi.package_url);
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


