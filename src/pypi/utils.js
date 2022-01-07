function makeReadmore(des, package_url) {
  return des?.length > 100
    ? des?.substring(0, 100) +
        "  ...... " +
        ` <a href=${package_url} target="_blank" style="color:blue">readmore</a>`
    : des;
}
export const fillPopupForPython = (DOMEle, packagePyPi) => {
  if (packagePyPi?.author === "UNKNOWN" || !packagePyPi?.name)
    packagePyPi = { ...packagePyPi, name: "Package not found" };

  DOMEle.packageNpmName.innerText = packagePyPi.name;
  if (packagePyPi?.description === "UNKNOWN")
    packagePyPi.description = "Description is not available";

  DOMEle.packageNpmDes.innerHTML =
    makeReadmore(packagePyPi?.description, packagePyPi?.package_url) ||
    "Not found";
  packagePyPi.author_email = packagePyPi.author_email || "Not Available";
  packagePyPi.author = packagePyPi.author || "Not Available";
  DOMEle.author.innerText = "Publisher: " + packagePyPi.author;
  DOMEle.authorMail.innerText = "Mail: " + packagePyPi.author_email;
  DOMEle.npmLink.href = packagePyPi.package_url||"";
  DOMEle.npmLink.innerText = "PyPi";
  if (packagePyPi?.home_page) {
    DOMEle.githubLink.href = packagePyPi.home_page;
    DOMEle.githubLink.innerText = "Github";
  } else {
    DOMEle.githubLink.innerText = "";
  }
};
