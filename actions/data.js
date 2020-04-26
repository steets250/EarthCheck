const fetch = require("node-fetch");
const url = 'http://localhost:8000/ways';

const getData = async callback => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
    });
    const json = await response.json();
    callback(json, null);
  } catch (error) {
    callback(null, error);
  }
};

getData((data, error) => {
  console.log(data, error);
})