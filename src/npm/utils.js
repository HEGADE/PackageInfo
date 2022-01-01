export const sleep = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

  export const getData = async (searchPackage) => {
    let data = await fetch(`https://api.npms.io/v2/search?q=${searchPackage}`);
    let jsonData = await data.json();
    return jsonData;
  };


  
export const fillPopup = async (packageNpm) => {
  packageNpm.packageNpmName.innerText = packageNpm.data?.results[0]?.package?.name;
  packageNpm.packageNpmDes.innerText = packageNpm.data?.results[0]?.package?.description;
  packageNpm.author.innerText =
    "Publisher: " + packageNpm.data?.results[0]?.package?.publisher?.username;
  packageNpm.authorMail.innerText =
    "Mail: " + packageNpm.data?.results[0]?.package?.publisher?.email;
  packageNpm.npmLink.href = packageNpm.data?.results[0]?.package?.links?.npm;
  if (packageNpm.data?.results[0]?.package?.links?.repository) {
    packageNpm.githubLink.href =
      packageNpm.data?.results[0]?.package?.links?.repository;
    packageNpm.githubLink.innerText = "Github";
  } else {
    packageNpm.githubLink.innerText = "";
  }
};