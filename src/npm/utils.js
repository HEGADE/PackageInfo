import { fillPopupForPython } from "../pypi/utils";


// Holds the program execution for specified amount of time
export const sleep = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });


//  Request handler  for getting package information from the API
export const getData = async (searchPackage, option) => {
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

export const fillPopup = async (packageNpm, option) => {
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
