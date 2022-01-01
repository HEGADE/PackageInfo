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