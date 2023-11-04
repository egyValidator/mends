// const Readability = require('@mozilla/readability')
// const Readability = require('readability-js')
// import Readability from 'readability-js'

// const readability = new Readability();

// const article = readability.parse(document.querySelector('article p'))

// const utterance = new SpeechSynthesisUtterance(article)

// speechSynthesis.speak(utterance)

async function getRes(askMsg) {
  const url = 'https://robomatic-ai.p.rapidapi.com/api';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '47799e2f55mshbd97c45893cbd9dp13b6dfjsn5f58e83bf98d',
      'X-RapidAPI-Host': 'robomatic-ai.p.rapidapi.com'
    },
    body: new URLSearchParams({
      in: askMsg,
      op: 'in',
      cbot: '1',
      SessionID: 'RapidAPI1',
      cbid: '1',
      key: 'RHMN5hnQ4wTYZBGCF3dfxzypt68rVP',
      ChatSource: 'RapidAPI',
      duration: '1'
    })
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getRes('If I am a frontend developer how can you help me?')