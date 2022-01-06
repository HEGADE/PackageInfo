import { fillPopupForPython } from "../pypi/utils";
export const sleep = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

  const myHeaders = new Headers({
    "Access-Control-Allow-Origin": "*"


  });
export const getData = async (searchPackage, option) => {
  let jsonData = null;
  let data=null
  if (option === "nodejs") {
     data = await fetch(`https://api.npms.io/v2/search?q=${searchPackage}`);
    jsonData = await data.json();
  } else {
    try{
     console.log(searchPackage)
      data = await fetch(`https://pypi.org/pypi/${searchPackage}/json`,{
        headers:{
          
          "Access-Control-Allow-Origin":"*" 
      },
       mode:"no-cors"
    });
  }
  catch(e){
    console.log(e)
  }
    jsonData = await data.json();
  }
  return jsonData;
};

export const fillPopup = async (packageNpm, option) => {
  if (option === "nodejs") {
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
  console.log(packageNpm.data.info.name);
  fillPopupForPython(packageNpm, packageNpm.data.info);
};
